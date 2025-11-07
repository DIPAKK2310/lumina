export default interface Video {
  id: string;
  title: string;
  description: string;
  publicId: string;
  url: string;
  originalSize: number;
  compressedSize: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}