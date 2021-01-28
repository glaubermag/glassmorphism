import styled from "styled-components";

import background from "../../assets/images/background.png";
export const Container = styled.div`

background: linear-gradient(to right, #55439E, #952fff);
height: 100vh;
width: 100%:
margin: 0px;
padding: 0px;

@media only screen and (max-width: 1100px) {

justify-content: center;
align-items: center;
} 


`;

export const Header = styled.div`
  height: 100%;
  width: 100%;
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  justify-content: center;

  #topImg {
    position: absolute;
    top: -130px;
    left: 30px;
  }

  #righImg {
    position: absolute;
    right: 0px;
    top: 30px;
  }

  #bottomLeft {
    position: absolute;

    left: 30px;
    bottom: 65px;
  }



  @media only screen and (max-width: 1100px) {
    #topImg {
      width: 200px; 
      position: absolute;
      top: -65px;
      left: 30px;
    }
    #righImg {
      width: 250px;
      position: absolute;
      right: 0px;
      top: 100px;
    }
    #bottomLeft {
      position: absolute;
  
      left: 0px;
      bottom: 10px;
    }


  } 
`;

export const Info = styled.div`
  max-width: 1117px;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space- ;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const InfoTitle = styled.div`
  width: 480px;
  height: 100%;
  h1 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    text-transform: capitalize;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 0;
    margin-bottom: 20px;
  }

  p {
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #ffffff;
    margin: 0;
    margin-bottom: 40px;
  }

  div {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      height: 80px;
      border-radius: 10px;
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.7);
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(45px);
    }

    input::placeholder {
      font-family: Lato, sans-serif;
      font-size: 16px;
      line-height: 16px;
      padding-left: 20px;
      color: #cdbfd8;
    }

    button {
      width: 120px;
      height: 60px;
      background-color: #4f3aa7;
      border-radius: 6px;
      font-family: Lato, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      color: #fff;
      outline: none;
      border: none;
      position: absolute;
      top: 12px;
      right: 0;
    }
  }


  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    width: 330px;
    margin: auto;
    padding-bottom: 2em;

    h1 {
      padding-top: 2em;
      font-size: 30px;

    }

    p {

      font-size: 14px;

    }
  } 

`;
export const InfoCard = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(45px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: none;
  padding-left: 50px;
  margin: auto;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 300px;
    height: 230px;
    margin: auto;
  } 
`;

export const CardTitle = styled.div`
  h2 {
    padding-top: 0;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    margin-top: 40px;
  }
  @media only screen and (max-width: 1100px) {
    
    h2 {     margin-top: 30px;
      font-size: 18px;
      line-height: 18px;


    }
    
  } 
`;

export const CardChip = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
     margin-top: 5px;
      margin-bottom: 5px;
    
  } 
`;

export const CardFooter = styled.div`
width: 100%;

  .alignleft {
    float: left;
  }
  .alignright {
    float: right;
    margin-right: 30px;
  }
  h2 {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.07em;
    color: #ffffff;
  }

  p {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
  }


  @media only screen and (max-width: 1100px) {
    .alignright {
    }
  } 
`;
