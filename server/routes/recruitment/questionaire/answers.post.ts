import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
   
        const {questionList  } = await readBody(event);
        const createQuestionaire = await prisma.questionaireAnswers.createMany({
            data: questionList,
        })

        response['created'] = createQuestionaire
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    