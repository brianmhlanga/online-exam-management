import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const { id } = await readBody(event);
    
    const loanType = await prisma.loanType.findFirst({
       where: {
          id: Number(id)
       }
    });
    return {
        data: loanType,
        success: true
    };
});