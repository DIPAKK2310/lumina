import React, { useState, useEffect, useCallback } from "react"
import { getCldImageUrl, getCldVideoUrl} from "next-cloudinary"
import { Download, Clock, FileDown, FileUp} from "lucide-react"
import dayjs from "dayjs"// import utc from "dayjs/plugin/utc"
import relativeTime from "dayjs/plugin/relativeTime"// import localizedFormat from "dayjs/plugin/localizedFormat"
import {filesize} from "filesize"
import Video from "@/types/index"

dayjs.extend(relativeTime)// dayjs.extend(localizedFormat)


interface VideoCardProps {
    video: Video;
    onDownload: (url: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({video, onDownload}) => {

  const [isHovered, setisHovered] = useState(false)
  const [previewError, setpreviewError] = useState(false)

  const getThumbnailUrl = useCallback((publicId: string) => {
    return getCldImageUrl( {
      src: publicId,
      width: 400,
      height: 225,
      crop: "fill",
      gravity: "auto",
      format: "jpg",
      quality: "auto",
      assetType: "video"
    })
  },[])
  
    const getFullVideolUrl = useCallback((publicId: string) => {
      return getCldVideoUrl( {
        src: publicId,
        width: 1920,
        height: 1080,
        
      })
    },[])
    
    const getPreviewVideolUrl = useCallback((publicId: string) => {
      return getCldVideoUrl( {
        src: publicId,
        width: 400,
        height: 225,
        rawTransformations: ["e_preview:duration_15:max_seg_9: min_seg_duration_1"]//custom transformation for preview
       
      })
    },[])
  
    const formatSize = useCallback((size: number)=>{
        return filesize(size)
    },[])

    const formatDuration = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60)//method to roundown the number
        const remainingSeconds = Math.round(seconds % 60)//modulus operator to get the remainder &  number rounded to the nearest integer
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`//padStart method to ensure two digits for seconds

    },[])

    const compresionPercentage = Math.round((1 - Number(video.compressedSize) / Number(video.originalSize)) * 100);

    useEffect(()=>{
      setpreviewError(false);

    },[isHovered])

    const handlePrEviewError = () =>{
      setpreviewError(true);
    }
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    >
      <figure className="aspect-video relative">
         {isHovered ? (
            previewError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-red-500">Preview not available </p>
              </div>
            ): (
              <video
                src={getPreviewVideolUrl(video.publicId)}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                onError={handlePrEviewError}
              />
            )
         ): (
          <img src={getThumbnailUrl(video.publicId)} 
            alt={video.title} 
            className="w-full h-full object-cover"
          
          />
         )}
         <div className="absolute bottom-2  right-2 bg-base-100 bg-opacity-70  px-2 py-1 rounded-lg text-sm flex items-center">
          <Clock size={16} className="mr-1"/>
          {formatDuration(video.duration)}
         </div>
      </figure>
         <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold">{video.title}</h2>
            <p className="text-sm text-base-content opacity-70 mb-4">{video.description}</p>
            <p className="text-sm text-base-content opacity-70 mb-4">
                Uploaded {dayjs(video.createdAt).fromNow()}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <FileUp size={18} className="mr-2 text-primary"/>
                  <div>
                    <div className="font-semibold">Original</div>
                    <div>{formatSize(Number(video.originalSize))}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                  <FileDown size={18} className="mr-2 text-secondary"/>
                  <div>
                    <div className="font-semibold">Compressed </div>
                    <div>{formatSize(Number(video.compressedSize))}</div>
                   
                  </div>
                  </div>
                  </div>
                  <div className="flex justify-center items-center mt-4">
                    <div className="text-sm font-semibold">
                      compression:{" "}
                      <span>{compresionPercentage}%</span>
                    </div>
                    <button className="btn btn-primary btn-sm "
                    onClick={() => onDownload(getFullVideolUrl(video.publicId), video.title)

                    }
                     >
                      <Download size={16} />
                      
                    </button>
                  </div>
            </div>
         </div>
    
  )
}

export default VideoCard