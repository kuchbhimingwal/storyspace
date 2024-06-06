import Image from "next/image";
import client from "@/db"

const dataFetching = async()=>{
  const users = await client.user.findMany({});
  return users
}
export default async function Home() {
  const users = await dataFetching();
  console.log(users)
  return (
    <div>
      {users[0].id}
    </div>
  );
}
