"use server"
import client from "@/db"

export async function postblog(title:string, subtitle:string, content: string, authorId:string){
  try {
    const res = await client.article.create({
      data:{
        title,
        subtitle,
        content,
        authorId,
        
      }
    });
    console.log(res);
    
    return "post created"
  } catch (error) {
    console.log(error);
    
    return "error while creting the post"
  }
}