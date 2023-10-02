import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
       
        const { id,firstname,lastname,portal_id,email,gender,nationality,id_number,date_of_birth,phone_number,ethnic_background,province,city,availability,expected_salary,disability,employment_status,convictions,address,personal,technical } = await readBody(event);
        const createPersonalDetails = await prisma.applicant.update({
            where: {
                id: id,
              },
            data: {
                portal_id: portal_id,
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
                address: address          
               
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
    