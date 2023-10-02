import { createJwtToken } from "@/jwt/index";
import { prisma } from "~~/prisma/db";
import bcrypt from "bcrypt";



export default defineEventHandler(async (event)=>{
   const {old_password,password,id} = await readBody(event);

   const salt = await bcrypt.genSalt();
   const hash = await bcrypt.hash(password, salt);

   //Check if the user exists
   const user = await prisma.user.findUnique({
      where: {
         id: id
      }
   });
   const response = {};

   if(user){
      //Check if the password hash matched
      const match = await bcrypt.compare(old_password, user.password);
      
      if(match){

         const [userData, employeeData] = await prisma.$transaction([
            prisma.user.update({
               where: {
                  id: id
               },
               data: {
                  password: hash,
                  salt: salt
               }
            }),
            prisma.user.findUnique({
               where: {
                  id: id
               }
            })

           
          ])
          response['user'] = userData
          response['employee'] = employeeData
          response['success'] = true
         
         console.log("this is mu user data")
         console.log({userData})
         //Store encrpted user data in cookie
         
         //Disconnect Prisma
 
         return response
      }else{
         response['message'] = `The old password provided does not match`
         response['success'] = false
         return response
      }
   }else{
      //Disconnect Prisma
    
         response['message'] = `The user does not exist, please log out and try again`
         response['success'] = false
         return response
   }

});