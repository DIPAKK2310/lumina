'use client'
import React, { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const VideoUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false)

  const  router = useRouter();// useRouter hook to navigate programmatically
    //Max file size is 60 MB
    const max_File_Size = 60 * 1024 * 1024; // 60 MB in bytes

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      //if file not found/choose alert to select a file
      if (!file) {
        alert("Please select a file to upload.");
        return;
      }

      //checking file size not exceed the max_file_size
      if(file.size > max_File_Size){
        toast.error("File size exceeds the maximum limit of 60 MB.",{
          icon: '📂',
        });
        return;
      }

      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);// Append the file to the form data
      formData.append("title", title);// Append the title to the form data
      formData.append("description", description);// Append the description to the form data
      formData.append("originalSize", file.size.toString()); // Append the original size of the file to the form data

        try {
            const response = await axios.post("/api/video-upload", formData)
            console.log("Video uploaded successfully:", response.data);
            toast.success("Video uploaded successfully!", {
              icon: '✅',
            });
        } catch (error) {
            console.error("Error uploading video:", error);
            toast.error("Error uploading video. Please try again.", {
              icon: '❌',
            });
        }finally{
          setIsUploading(false)
        }

    }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Upload Video</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className="label">
            <span className='label-text'>Title</span>
          </label>
          <input type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          className='input input-bordered w-full'
          required
          />
        </div>
        <div>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <textarea 
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          className='textarea textarea-bordered w-full'></textarea>
        </div>
        <div>
          <label className="label">
            <span className='label-text'>Video File</span>
          </label>
          <input type="file" 
          accept='video/*'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className='file-input file-input-bordered w-full'
          required
          />
        </div>
        <button
        type='submit'
        className='btn btn-primary'
        disabled={isUploading}// Disable the button while uploading
        >
          {isUploading ? "Uploading..." : "Upload Video"} 
        </button>
      </form>
    </div>
  )
}

export default VideoUpload;