import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    
    const {id}  = await readBody(event);
    const deleteJobPost = await prisma.jobPostings.delete({
        where: {
        id: id    
        },
        
    });
    return {
        data: deleteJobPost,
        success: true
    };
});

