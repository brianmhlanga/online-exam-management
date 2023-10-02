import { createJwtToken } from "@/jwt/index";
import { prisma } from "~~/prisma/db";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
   const {email, password} = await readBody(event);
//test comment
   //Check if the user exists
   if (!email) {
      return {
        message: "Email must be provided",
        success: false
      };
    }
   const  user = await prisma.user.findFirst({
      where: {
         
           email: email,
         //   AND: {
         //    account_status: 'ACTIVE'
         //   }
         
       }
   });

   const response = {};

   if(user){
      //Check if the password hash matched
      const match = await bcrypt.compare(password, user.password);
      
      if(match){
         //Successfully login
         //Create a JWT token
         const token = await createJwtToken();

         setCookie(event, "token", token);

         //Store his last Login IP Address and time
         
         const [userData, employeeData]  = await prisma.$transaction([
            prisma.user.update({
               where: {
                  email: email
               },
               data: {
                  last_logged_in_at: new Date()
               }
            }),
            prisma.user.findUnique({
               where: {
                  email: email
               },
            })
          ])

         // const company_access = userData.company_access.at(0).access_list;
         console.log({userData})
         // @ts-ignore
         // data ? data.map(item => item.name) : [],

         response['user'] = userData
         response['success'] = true
         console.log("this is my user data and permissions",{userData})
         //Store encrpted user daa in cookie
         let filteredUserData = {
            id: userData.id,
            first_name: userData.name,
            last_name: userData.surname,
            username: userData.username,
            email: userData.email,
            profile: userData.profile,
          };
         // setCookie(event, "user", JSON.stringify(userData));
         setCookie(event, "user", JSON.stringify(filteredUserData));
         return response
      }else{
         response['message'] = `The user with email ${email} does not exist, is inactive or the password does not match`
         response['success'] = false
         return response
      }
   }else{
      //Disconnect Prisma
    
         response['message'] = `The user with email ${email} does not exist, is inactive or the password does not match`
         response['success'] = false
         return response
   }

});