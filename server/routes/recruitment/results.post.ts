import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{

    const response = {};
    const { postingId, applicant_id } = await readBody(event)
    try {
       
        const questions =  await prisma.questionaireAnswers.aggregate({
            _count: {
                question: true
            },
            where: {
                AND: [
                    { postingId: postingId },
                    {applicant_id: applicant_id},
                  ],
            }
        })

        response['questions'] = questions
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }
    try {
       
        const unstructure_questions =  await prisma.questionaireAnswers.aggregate({
            _count: {
                question: true
            },
            where: {
                postingId: postingId,
                applicant_id: applicant_id,
                question_type: "UnStructured"
            }
        })

        response['unstructure_questions'] = unstructure_questions
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    try {
       
        const passed =  await prisma.questionaireAnswers.aggregate({
            _count: {
                question: true
            },
            where: {
                postingId: postingId,
                applicant_id: applicant_id,
                correct: true
            }
        })

        response['passed'] = passed
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})