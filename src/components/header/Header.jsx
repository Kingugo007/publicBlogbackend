import styled from "styled-components"

const Headers = styled.div`
  width: 100%;
  height: 70vh;
  padding: 0;
  background-image: url("https://images.pexels.com/photos/6667766/pexels-photo-6667766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
const HeadersTitle = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
 `
const HeaderText = styled.h1`
    font-size: 40px;
    text-align: left;
    margin-top: 250px;
    color: white;
    margin-left: 100px;
`
const HeaderButton = styled.button`
    color: black;
    font-size: 18px;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    text-align: center;
    background-color: white;
    width: 200px;
    margin-left: 100px;
    border: none;
    font-family: "Jost", "sans-serif";
    text-transform: capitalize;

`

export default function Header() {
  return (
    <Headers>
    <HeadersTitle>
       <HeaderText>
         welcome to our daily news <br /> on how to train your pets
       </HeaderText>
       <HeaderButton>
           Be a writer
       </HeaderButton>
         </HeadersTitle>
      </Headers>

  );
}
