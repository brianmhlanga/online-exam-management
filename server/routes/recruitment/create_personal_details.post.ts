import { prisma } from "~~/prisma/db";
import bcrypt from "bcrypt";
import { date } from "maz-ui";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    
    try {
       
        const {data:{ firstname,lastname,portal_id,email,gender,nationality,id_number,current_logged_in_at,date_of_birth,phone_number,ethnic_background,province,city,availability,expected_salary,disability,employment_status,convictions,address,personal,technical,password} } = await readBody(event);
        console.log("mbilimbi",password)
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const createPersonalDetails = await prisma.applicant.create({
            data: {
                first_name: firstname,
                last_name: lastname,
                email: email,
                gender: gender,      
                id_number: id_number,         
                phone: phone_number,             
                enthnicity: ethnic_background,         
                province: province,    
                city: city,            
                nationality: nationality,     
                availability: availability,        
                expected_salary: Number(expected_salary),   
                disability: disability,           
                employment_status: employment_status,   
                previous_convictions: convictions, 
                date_of_birth: date_of_birth,  
                personal_strength: personal,    
                technical_skills: technical,   
                address: address,
                password: hash,
                salt: salt,
                current_logged_in_at: new Date(),
                last_logged_in_at: new Date()
                
            },
        })

        response['post'] = createPersonalDetails
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    