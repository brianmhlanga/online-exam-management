import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const { portalId } = await readBody(event);
    
    const profile = await prisma.applicant.findMany({
       where: {
          portal_id: 5
       }
    });
    return {
        data: profile,
        success: true
    };
});