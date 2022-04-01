import styled from "styled-components";

const BlogPost = styled.div`
 width: 385px;
  margin: 0px 25px 40px 25px;
`
const PostImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;

@media screen and (max-width: 480px) {
    width: 16em;
    height: 12em;
}
`
const PostInfo = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
`
const PostTitle = styled.h1`
  font-family: "Jost", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`
const PostDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: black;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  
`

export const Post = ({ post })  => {
    console.log(post)
    return (
        <BlogPost>
        <PostImg src={post.photo} alt="" />
      <PostInfo>
           <PostTitle>
             {post.title}
           </PostTitle>        
         </PostInfo>
       <PostDesc>{post.desc}</PostDesc>
        
    </BlogPost>
    
    
  );
}



