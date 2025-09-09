import { NextRequest , NextResponse } from 'next/server';
import { v2 as cloudinary, UploadStream } from 'cloudinary';
import {auth} from "@clerk/nextjs/server"


// Configuration
cloudinary.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

interface CloudinaryUploadResult{
    public_id: string;
    [key: string]: any; // Allow any other properties

}

export async function POST(request: NextRequest) {
    const { userId } = await auth();
    if(!userId){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const formData= await request.formData()
        const file = formData.get('file') as File || null;// Ensure 'file' is of type File

        if(!file) {
            return NextResponse.json({ error: "File not provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer(); // Ensure the file is read
        const buffer = Buffer.from(bytes);// Convert to Buffer

        const result = await new Promise<CloudinaryUploadResult>((resolve, reject)=>{
            const uploadStream = cloudinary.uploader.upload_stream(
                {folder:"next-cloudinary-uploads"},
                (error, result)=>{
                    if(error){
                        console.error("Cloudinary upload error:", error);
                        reject(error);
                    }else{
                        resolve (result as CloudinaryUploadResult);
                    }
                }
            )
            uploadStream.end(buffer)
        }
      )
      return NextResponse.json(
        {publicId: result.public_id}, {status: 200}
     )
    } catch (error) {
       console.log("Upload image failed",error)
       return NextResponse.json(
            { error: "Failed to upload image" }, 
            { status: 500 }
     );
    }
}