import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const { postId } = await readBody(event);
    
    const questionsList = await prisma.questionaire.findMany({
       where: {
          postingId: postId
       }
    });
    return {
        data: questionsList,
        success: true
    };
});