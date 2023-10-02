import fs from 'fs';

export default defineEventHandler(async (event)=>{
    const { file_url } = await readBody(event);

    //Example: file_url = "./public/uploads/1667310371195DIJR-M1-004.pdf"
    const file_data = fs.readFileSync(file_url);

    return file_data;
})