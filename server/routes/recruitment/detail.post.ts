import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    
    try {
        const { sid } = await readBody(event)
        const loan_type =  await prisma.jobPostings.findUniqueOrThrow({
            where: {
                id : sid
                }
        })

        response['loan_type'] = loan_type
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})