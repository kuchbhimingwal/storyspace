"use client"
import ImageInput from './ImageInput'
import { useState } from 'react';
import { UploadFile } from '../lib/actions/urlGenerator'
function Postcreate() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [url, setUrl] = useState("")
  const handleSubmit = async()=>{
    const formData = new FormData();
    formData.append('file', selectedFile!);
    // console.log(formData);
    
    const imageUrl = await UploadFile(formData);
    console.log(imageUrl);
    
  }
  return (
    <div>
      <ImageInput id='imageInput' onchane={(e)=>{setSelectedFile(e)}}/>
      <button onClick={handleSubmit}>Submit</button>
      {url}
    </div>
  )
}

export default Postcreate