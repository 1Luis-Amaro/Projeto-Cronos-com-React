import Container from "../../Container";
import Logo from "../../Logo";
import Menu from "../../Menu";
import Footer from "../../Footer";
import type React from "react";

type MainTamplateProps = {
    children: React.ReactNode
}

function MainTamplate({children}: MainTamplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

        {children}
      
    
      <Container>
        <Footer/>
      </Container>
    
    </>
  );
}

export default MainTamplate;
