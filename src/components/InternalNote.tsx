import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import { FormContext } from "../context/form.context";

import "./InternaltNote.scss";

interface InternalNoteFormData {
  internalNote: string;
}

const InternalNote: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormdata] = useState<InternalNoteFormData>({
    internalNote: "",
  });

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error("formContext is false or undefined");
  }

  const { setFormContextData } = formContext;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // important to set prevState to any an check if a prevState exist here
    setFormContextData((prevState: any) => {
      if (prevState) {
        return {
          ...prevState,
          internalNote: {
            ...formData,
          },
        };
      }
    });
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <form className="internal-note-form" onSubmit={handleFormSubmit}>
        <textarea
          name="internalNote"
          rows={10}
          cols={50}
          placeholder="Add itnernal note here.."
          onChange={handleChangeTextArea}
        ></textarea>
        <div className="buttonContent">
          {" "}
          <Button type="submit">Save & Continue</Button>
          {isSubmitted && <div className="check-icon">✔️</div>}
        </div>
      </form>
    </>
  );
};

export default InternalNote;
