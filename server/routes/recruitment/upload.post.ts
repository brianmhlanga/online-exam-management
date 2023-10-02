import { readFiles } from 'h3-formidable';
import path from "path";
import { prisma } from '~/prisma/db';
import fs from 'fs';
import {fileTypeFromBuffer} from 'file-type';


export default defineEventHandler(async (event) => {
    const response = {};
    const {id} = getQuery(event);
    const { files: { attachment: [ { filepath } ] } } = await readFiles(event, {
        includeFields: true
    });
    const fileExtension = await getFileExtension(filepath);
    let imageName = String(Date.now()) + String(Math.round(Math.random() * 10000000));
    let newPath = `${ path.join("public", "uploads", imageName) }${fileExtension}`;
    fs.copyFileSync(filepath, newPath);
    //Update Company
    try {
        let applicanntId = await prisma.applicant.findUnique({
            where: {
                id: id
            }
        })
        let attachment: any = await prisma.applicant.update({
            where: {
                       id: applicanntId.id
                        },
                    data: {
                       resume: `${imageName}${fileExtension}`
                   },
})
        response['attachment'] = attachment
        response['success'] = true
    }
    catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };

    return response
})

async function getFileExtension(filepath) {
    const buffer = fs.readFileSync(filepath);
    const fileInfo = await fileTypeFromBuffer(buffer)
    return fileInfo ? `.${fileInfo.ext}` : '';
}