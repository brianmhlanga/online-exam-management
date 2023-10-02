import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { email, username, name ,profile, surname,selected_center,selectedCommodities , phone, age, password, gender, title, accountTypes, account_status} = await readBody(event);
     
    const isAlreadyRegistered = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(isAlreadyRegistered){
        return {
            message: `User with ${email} already exists.`,
            success: false
        }
    }
   

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    try {
    
        const createUser = await prisma.user.create({
            data: {
                name: name,
                surname: surname,
                username: username,
                phone: phone,
                email: email,
                profile: profile,
                gender: gender,
                password: hash,
                account_status: account_status,
                title: title,
                age: age,
                salt: salt,
                current_logged_in_at: new Date(),
                last_logged_in_at: new Date()
            }
        });
        response['registred'] = createUser
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});