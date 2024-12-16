import React from "react";

// import ui components
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

// import components
import AssetForm from "../components/AssetForm";

// UI components
// box Component -> border, dropShadow etc
// button Component ->
// add Asset Component -> Yellow Button with plus Icon

const FormPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <Container>
          <Card className="stepOne">
            <h1>Step One</h1>
            <h2>1 Asset</h2>
            <AssetForm></AssetForm>
          </Card>
          <Card>
            {" "}
            <div className="stepTwo card">Step Two</div>
          </Card>
          <Card>
            <div className="internalNode card">Internal Node</div>
          </Card>
          <Button>Save & Continue</Button>
        </Container>
      </div>
    </>
  );
};

export default FormPage;
