import styled from "styled-components"

const TopBarContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 background-color: black;
 justify-content: space-between;
 height: 100px;
 width: 100%;
`
const Logo = styled.img`
 width: 50px;
 height: 50px;
 margin-top: 20px;

`
const TopBarText = styled.h1`
    font-size: 16px;
    font-family: "Jost", "sans-serif";
`
const ButtonContainer = styled.div`
    margin: 3px;
`
const TopBarbButton = styled.button`
    color: black;
    font-size: 16px;
    cursor: pointer;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    text-align: center;
    background-color: white;
    width: 100px;
    margin: 5px;
    border: none;
    font-family: "Jost", "sans-serif";
    text-transform: capitalize;
`

export const TopBar = () => {
 return (
  <TopBarContainer>
     <Logo src="https://dynamic.brandcrowd.com/asset/logo/ef9887a9-ea3b-4a4e-981e-49a2fcd29087/logo-search-grid-1x?v=637641830988230000"/>
     <ButtonContainer>
  <TopBarbButton>Admin</TopBarbButton>
     </ButtonContainer>
     
  </TopBarContainer>
 )
}