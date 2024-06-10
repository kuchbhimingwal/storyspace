import React from 'react'

interface prop {
  id:string;
  onchane: (value:File)=>void;
}
function ImageInput({id, onchane}:prop) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    if (event.target.files && event.target.files.length > 0){
    onchane(event.target.files[0])
    }
  }
  return (
    <div>
      <input id={id} type='file' accept='image/*' onChange={handleChange}/>
    </div>
  )
}

export default ImageInput