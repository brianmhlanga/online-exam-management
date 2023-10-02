import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    
    try {
        const { postingId,applicanntId } = await readBody(event)
        const postingApplications =  await prisma.applications.findMany({
            where: {
                    postingId: postingId
                },
                include: {
                    applicant: true,
                    jobpostings: {
                        include:{
                            questionaireanswers: {
                            },
                            applications: {
                                
                            }
                        }
                    }
                },
        }); 

        const exam_mark = await prisma.questionaireAnswers.aggregate({
        _count: {
            correct: true
            
        },
        where: {
            postingId : postingId
            },
        })

        response['postingApplications'] = postingApplications
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
});