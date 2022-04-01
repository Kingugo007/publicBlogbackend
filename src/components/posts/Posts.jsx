import { Post } from "../post/Post";
import styled from "styled-components";

const BlogPosts = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

export const Posts = ({ posts }) => {
  return (
    <BlogPosts>  
    {
        posts.map((post, index) => (
      <Post key={index} post={post}/>
        ))
    }         
    </BlogPosts>
  );

}

