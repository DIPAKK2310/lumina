"use client"
import React, {useState, useEffect, useRef} from 'react'
import { CldImage } from 'next-cloudinary';

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio:"1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio:"4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 657, aspectRatio:"16:9" },
  "Youtube Thumbnail (16:9)": { width: 1280, height: 720, aspectRatio:"16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio:"3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio:"205:78" },
}

type SocialFormat = keyof typeof socialFormats;// Define a type for the keys of socialFormats

export default function SocialShare () {

  const[uploadImage,setUploadImage] = useState<string | null >(null);// Store the uploaded image URL
  const[selectedFormat,setselectedFormat] = useState<SocialFormat>("Instagram Square (1:1)");// Store the selected social format
  const [isUploading, setisUploading] = useState(false)// State to track if upload is in progress
  const [isTransforming, setisTransforming] = useState(false);// State to track if transformation is in progress
  const imageRef = useRef<HTMLImageElement>(null);// Ref to the image element for transformations

  useEffect(() => {
    if(uploadImage){

      setisTransforming(true);// Start transformation

    }
  }, [selectedFormat,uploadImage])// Effect to handle transformations when selected format or uploaded image changes

  const handleFileUpload = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if(!file) return;
    
    setisUploading(true);// Start upload
    const formData = new FormData();// Create a new FormData object
    formData.append('file',file);// Append the file to the form data
    // formData.append('upload_preset','ml_default');// Replace with your upload preset
      try {
          const response = await fetch("/api/image-upload",{
            method:'POST',
            body:formData
          })
          if(!response.ok) throw new Error("Failed upload image");// Check if the response is ok 
          const data = await response.json();
          setUploadImage(data.publicId);// Set the uploaded image Data publicID
          
        } catch (error) {
              console.log("Failed to upload image",error);
              alert("Failed to upload image");
        }finally{
          setisUploading(false);// End upload  

        }
      }
  //14:11
  const handleFileDownload = () => {

  }

  return (
    <div>Social-share</div>
  )
}

