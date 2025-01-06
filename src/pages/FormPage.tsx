import React, { useContext, useState } from "react";

// import ui components
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

// import components
import AssetForm from "../components/AssetForm";
import DateTimeForm from "../components/DateTimeForm";
import InternalNote from "../components/InternalNote";
import Modal from "../components/ui/Modal";
import { FormContext } from "../context/form.context";

const FormPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("formContext is false or undefined");
  }
  const { formContextData } = formContext;

  return (
    <>
      <div className="container">
        <Container>
          <Card className="step-one">
            <h1>Step One</h1>
            <AssetForm />
          </Card>
          <Card>
            <div className="step-two">
              <h1>Step two</h1>
              <DateTimeForm />
            </div>
          </Card>
          <Card>
            <div className="internal-note">
              <h1>Internal Note</h1>
              <InternalNote />
            </div>
          </Card>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Modal to show contents"
            modalData={formContextData}
          ></Modal>
          <Button
            className="button-yellow"
            onClick={() => setIsModalOpen(true)}
          >
            Show Content
          </Button>
        </Container>
      </div>
    </>
  );
};

export default FormPage;
