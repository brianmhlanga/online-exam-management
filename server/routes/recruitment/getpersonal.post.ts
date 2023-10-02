import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    
    try {
        const { sid } = await readBody(event)
        const profileInfo =  await prisma.applicant.findUniqueOrThrow({
            where: {
                id : sid
                }
        })

        response['profile_info'] = profileInfo
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})