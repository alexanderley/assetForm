import React from "react";

// import ui components
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

// UI components
// box Component -> border, dropShadow etc
// button Component ->
// add Asset Component -> Yellow Button with plus Icon

const FormPage: React.FC = () => {
  return (
    <>
      <h1>Step One</h1>
      <div className="container">
        <Button>Save & Continue</Button>
        <Container>
          <Card>
            <div className="stepOne card">Step One</div>
          </Card>
          <Card>
            {" "}
            <div className="stepTwo card">Step Two</div>
          </Card>
          <Card>
            <div className="internalNode card">Internal Node</div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default FormPage;
