"use client"
import ImageInput from './ImageInput'
import { useState } from 'react';
import { UploadFile } from '../lib/actions/uploadImg'
import { postblog } from '../lib/actions/postBlog'
import Input from './Input';
import Button from './Button';
import { useSession } from "next-auth/react";

function Postcreate() {
  const session = useSession();
  const authurId = session.data?.user?.id;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title , setTitle] = useState("");
  const [subtitle , setSubtitle] = useState("");
  const [content , setContent] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async()=>{
    const postres = await postblog(title,subtitle,content,authurId);
    console.log(postres);
    
    // const formData = new FormData();
    // formData.append('file', selectedFile!);

    // const imageUrl = await UploadFile(formData);
    // console.log(imageUrl);
  }
  return (
    <div className='flex justify-center'>
      <div className='w-2/5 p-10 border rounded-3xl border-gray'>
        <div className='mb-4'>
          <h2 className='text-3xl font-semibold text-gray font-sans'>Write your stroy here</h2>
        </div>
        <div className=''>
          <Input label='Title' placeholder='Write your title' type='text' onchane={(e)=>{setTitle(e)}}/>
        </div>
        <div className=''>
          <Input label='Subtitle' placeholder='Write your Subtitle' type='text' onchane={(e)=>{setSubtitle(e)}}/>
        </div>
        <div className=''>
          <Input label='Your story' placeholder='Write your story here' type='text' onchane={(e)=>{setContent(e)}}/>
        </div>
        <ImageInput id='imageInput' onchane={(e)=>{setSelectedFile(e)}}/>
        <Button title="Submit" onclick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Postcreate