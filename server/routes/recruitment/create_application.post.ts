import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
       
        const { postingId,applicantId} = await readBody(event);
        const createApplication = await prisma.applications.create({
            data: {
                postingId: postingId,
                applicantId: applicantId,
            },
        })

        response['post'] = createApplication
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    