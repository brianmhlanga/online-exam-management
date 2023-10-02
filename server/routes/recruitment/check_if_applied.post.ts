import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    
    try {
        const { postingId,applicantId } = await readBody(event)
        const check =  await prisma.applications.findMany({
            where: {
                AND: [
                    {
                        postingId: postingId
                    },
                    {
                        applicantId: applicantId
                    }
                ]
            }
        });

        response['status'] = check
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})