import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    
    try {
        const { id } = await readBody(event)
        const question =  await prisma.questionaire.findUniqueOrThrow({
            where: {
                id : id
                }
        })

        response['question'] = question
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})