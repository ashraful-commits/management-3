"use client"

import { useState } from "react"

export default function ImageUpload() {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  const handleImageUpload = async () => {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "shop_api")

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v2/ds9mljkgj/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log("Image uploaded successfully:", data)
      } else {
        console.error("Error uploading image:", response.statusText)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  )
}
