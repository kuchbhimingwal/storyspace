"use server"
import client from "@/db"

export async function addImg(imageLink:string, articleId:string){
  

    const res = await client.tasveer.create({
      data:{
        imageLink,
        articleId
      }
    })

    if(res){
      return "content created"
    } else {
      return "error whiekdfme"
    }
}
