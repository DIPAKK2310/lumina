import React, { useState, useEffect, useCallback } from "react"
import { getCldImageUrl, getCldVideoUrl} from "next-cloudinary"
import { Download, Clock, FileDown, FileUp} from "lucide-react"
import dayjs from "dayjs"// import utc from "dayjs/plugin/utc"
import relativeTime from "dayjs/plugin/relativeTime"// import localizedFormat from "dayjs/plugin/localizedFormat"
import {filesize} from "filesize"
import { Video } from "@prisma/client"

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
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard