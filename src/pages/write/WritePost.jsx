import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import styled from "styled-components";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <Write>
        <WriteForm onSubmit={handleSubmit}>
        <WriteFormGroup>
           <WriteInput
            type="text"
            placeholder="imgae url"
            
          />
          <WriteInput
            type="text"
            placeholder="Title"
           
          />
        </WriteFormGroup>
        <WriteFormGroup>
         <WriteInput
            placeholder="Tell your story..."
            type="text"
            
          />
        </WriteFormGroup>
        <WriteSubmit 
        type="submit"
        >
          Publish
        </WriteSubmit>
      </WriteForm>
    </Write>
  );
}

const Write = styled.div`
     padding-top: 50px;
`


const WriteForm = styled.from`
   position: relative;  
`
 


const WriteInput = styled.div`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
`


const WriteText = styled.div`
  font-size: 20px;
  height: 100vh;
`

const WriteSubmit = styled.button`
     position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px; 
`



