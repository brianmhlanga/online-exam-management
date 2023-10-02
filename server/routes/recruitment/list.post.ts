import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    
    let types: any = await prisma.jobPostings.findMany({
        include:{
            applications: true
        }
    })
    .catch((error)=>{
        console.error(error);
        return {
            success: false
        }
    }); 

    

    return {
        data: types,
        success: true
    };
});
