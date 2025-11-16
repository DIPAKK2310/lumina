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
  

  const handleFileDownload = () => {
    if(!imageRef.current) return;// Check if the image ref is available

    fetch(imageRef.current.src).// Fetch the image from the src
    then((response)=> response.blob()).
    then((blob)=>{
      const url = URL.createObjectURL(blob);// Create a URL for the blob
      const link = document.createElement('a');// Create a temporary anchor element
      link.href = url;// Set the href to the blob URL
      link.download = `${selectedFormat.replace(/\s+/g, "_").toLowerCase()}.png`;// Set the download attribute with a filename
      document.body.appendChild(link);// Append the link to the body
      link.click();// Programmatically click the link to trigger download
      document.body.removeChild(link);// Remove the link from the body
      window.URL.revokeObjectURL(url);// Revoke the object URL to free up memory
      document.body.removeChild(link);// Remove the link from the body

    })
  }

  return (
    <div className='container mx-auto p-4 max-w-4xl'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Social Media Image Creator 
      </h1>
    <div className='card'>
        <div className='card-body'>
          <h2>Upload an Image </h2>
          <div className='form-controll'>
            <label className="label">
              <span className='label-text'>Choose an image file</span>
            </label>
            <input 
            type="file" onChange={handleFileUpload} 
            className="file-input file-input-bordered file-input-primary w-full "
            />
          </div>
          {isUploading && (
            <div className='mt-4'>
              <progress className='progress progress-primary w-full'></progress>
            </div>
            )}

            {uploadImage && (
              <div className='mt-6'>
                <h2 className='card-title mb-4'>Select Social Media 
                  Format</h2>
                <div className='form-control'>
                    <select className='select select-bordered w-full'
                      value={selectedFormat}
                      onChange={(e) => setselectedFormat(e.target.value as SocialFormat)
                      }
                    >
                      {Object.keys(socialFormats).map((format) => (
                        <option key={format} value={format}>
                          {format}
                        </option>
                      ))}
                    </select>
                </div>
                <div className='mt-6 relative'>
                    <h3 className='text-lg font-semibold mb-2'>Preview:</h3>
                    <div className='flex justify-center'>

                      {isTransforming && (
                        <div className='absolute inset-0  bg-opacity-50 flex items-center justify-center bg-base-100 z-10'>
                          <span className='loading loading-spinner loading-lg'></span>
                        </div>
                      )}
                          <CldImage
                              width={socialFormats[selectedFormat].width}
                              height={socialFormats[selectedFormat].height}
                              src={uploadImage}
                              sizes="100vw"
                              alt="transformed image"
                              crop="fill"
                              aspectRatio={socialFormats[selectedFormat].aspectRatio}
                              gravity='auto'
                              ref={imageRef}
                              onLoad={() => setisTransforming(false)} // End transformation when image loads
                              className={isTransforming ? 'opacity-50' : 'opacity-100'}
                            />
                    </div>
                </div>
                    <div className='card-action mt-6 justify-end'>
                      <button className='btn btn-primary' onClick={handleFileDownload}>
                        Download for {selectedFormat}
                      </button>
                    </div>
              </div>
            )}
        </div>
    </div>
    </div>
  )
}

