import Image, { StaticImageData } from "next/image";

 interface ImageProps{
    url:string|StaticImageData; 
    label:string
}

export const ProjectImage:React.FC<ImageProps> =({
    url,
    label
}) =>{
    return (
      <div>
        <Image
            src={url}
            alt={label}
            
            />
      </div>

    )
}