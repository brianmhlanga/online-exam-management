import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};
    
    try {
        const { id,title,description,department,hiring_manager,deadline,job_type,experience,salary,location,views,status } = await readBody(event);
        const updateJobPost = await prisma.jobPostings.update({
            where: {
                id: id,
              },
            data: {
                title: title,
                description: description,
                department: department,
                hiring_manager: hiring_manager,
                deadline: deadline,
                job_type: job_type,
                experience: Number(experience),
                salary: Number(salary),
                location: location,
                views: views,
            },
        })

        response['post'] = updateJobPost
        response['success'] = true
    } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
    }

    return response;
})
    