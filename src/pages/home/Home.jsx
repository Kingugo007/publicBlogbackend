import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import { Posts } from "../../components/posts/Posts"
import axios from "axios"

export const Home = () => {
const postUrl = "http://localhost:5000/api/posts"


const [posts, setPosts] = useState([])
 
const getPosts = async () => {
 try{
  const data = await axios.get(`${postUrl}/`)
  console.log(data.data)
  setPosts(data.data)
  
 } catch(err) {
     console.log(err)
 }
}

useEffect(() => {
 getPosts()    
},[])
    return (
        <>
        <Header />
        <Posts posts={posts}/>
        </>
        
    )
}