"use client"
import { NextRequest , NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import {auth} from "@clerk/nextjs/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// Configuration
cloudinary.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

interface CloudinaryUploadResult{
    public_id: string;
    bytes: number;
    duration?: number;
    [key: string]: any; // Allow any other properties

}

export async function POST(request: NextRequest) {
    try {
    const { userId } = await auth();
   
    if(!userId){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
        !process.env.CLOUDINARY_API_KEY ||
        !process.env.CLOUDINARY_API_SECRET) {
        return NextResponse.json({ error: "Cloudinary configuration is missing" }, { status: 500 });

    }
        const formData= await request.formData()
        const file = formData.get('file') as File || null ;// Ensure 'file' is of type File
        const title = formData.get('title') as string ; // Get title from form data 
        const description = formData.get('description') as string || null; // Get description from form data
        const originalSize = formData.get('originalSize') as string ; // Get original size from form data

        if(!file) {
            return NextResponse.json({ error: "File not provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer(); // Ensure the file is read
        const buffer = Buffer.from(bytes);// Convert to Buffer

        const result = await new Promise<CloudinaryUploadResult>((resolve, reject)=>{
            // Upload to Cloudinary
            const uploadStream = cloudinary.uploader.upload_stream(
                {   
                    resource_type: "video", // Specify resource type as video
                    folder:"video-uploads",
                    transformation:[{
                        quality: "auto", // Automatically adjust quality
                        fetch_format: "mp4", // Automatically adjust format to mp4
                    }]
                },
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
      
      const video = await prisma.video.create({
            data: {
                title,
                description, // Default empty description if not provided
                publicId: result.public_id, // Store Cloudinary public ID
                originalSize: originalSize , // Default to "0" if not provided
                compressedSize: String(result.bytes), // Store compressed size from Cloudinary
                duration: result.duration || 0 , // Store video duration if available
             
            }
      }
        
      )
      return NextResponse.json(video);

    } catch (error) {
       console.log("Upload Video failed",error)
       return NextResponse.json(
            { error: "Failed to upload video" }, 
            { status: 500 }
     );
    }finally{
        await prisma.$disconnect(); // Ensure Prisma client is disconnected
    }
}