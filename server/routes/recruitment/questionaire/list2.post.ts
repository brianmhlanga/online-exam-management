import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response = {}

    try {
        const { postId } = await readBody(event);
        
        const questionsList = await prisma.questionaire.findMany({
           where: {
              postingId: postId
           }
        })

        response['loan_type'] = questionsList
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})