import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
   
        const {applicantId,postingId,applicationId,status  } = await readBody(event);
        const updateApplication = await prisma.applications.update({
            where: {
                id: applicationId,
              },
            data: {
                status: status
            },
        })

        response['updateApplication'] = updateApplication
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    