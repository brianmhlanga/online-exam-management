import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
   
        const {question,postingId,question_type,multichoice_answer,boolean_answer,options,score,created_by_name,created_by_id  } = await readBody(event);
        const createQuestionaire = await prisma.questionaire.update({
            where: {
                id: postingId,
              },
            data: {
                question: question,
                question_type: question_type,
                multichoice_answer: multichoice_answer,
                boolean_answer: boolean_answer,
                options: options,
                score: Number(score),
                created_by_name: created_by_name,
                created_by_id: created_by_id
            },
        })

        response['post'] = createQuestionaire
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    