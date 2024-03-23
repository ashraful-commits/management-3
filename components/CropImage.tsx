import React, { useState } from 'react'
import ReactCrop from "react-image-crop"
import 'react-image-crop/dist/ReactCrop.css'

const CropImage = ({file,setResult}) => {
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ aspect: 1, unit: "%", width: 100, height: 100, x: 0, y: 0 })
    const [croppedImage, setCroppedImage] = useState(null)
    const handleImageLoaded = (e) => {
      const img = e.target;
      setImage(img);
    }
  
    const handleCropChange = (newCrop) => {
        console.log(newCrop)
        setCrop({
            ...crop,
            ...newCrop,
            height: newCrop.width * (1 / crop.aspect)
        });
    }
  
 
  
    const handleCropComplete = (crop) => {
      console.log(image)
      if (image && crop.width && crop.height) {
        getCroppedImg(image, crop, 'profile.jpeg')
      }
    }
  
    const getCroppedImg = () => {
      if (image && crop) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
    
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
        canvas.toBlob((blob) => {
          if (blob) {
           
            const format = 'image/png';
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              setResult(reader.result);
            };
          }
        }, 'image/png'); 
      }
    }
  
    const handleCropButtonClick = () => {
      getCroppedImg()
    }
  
  return (<div className="w-full h-full overflow-hidden bg-black max-h-[500px]">
   
    {file && <ReactCrop
      crop={crop}
      onChange={handleCropChange}
      onComplete={handleCropComplete}
    >
      <img  onLoad={handleImageLoaded} style={{width:"500px",height:"auto",objectFit:"cover"}} src={file} />
    </ReactCrop>}
  </div>);
};

export default CropImage;
