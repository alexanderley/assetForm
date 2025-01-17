import React from "react";
import useDynamicForm from "../customHooks/useDynamicForm";

import { InputFieldConfig } from "../../types/Inputtypes";

// #Todo: This needs to go to the porent in order to be customizable
const formConfig: InputFieldConfig[] = [
  {
    id: "1",
    name: "username",
    label: "Username",
    type: "text",
    required: true,
  },
  {
    id: "2",
    name: "acceptTerms",
    label: "Accept Terms",
    type: "checkbox",
  },
  {
    id: "3",
    name: "theme",
    label: "Theme",
    type: "switch",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
    placeholder: "Select a theme",
  },
];

const DynamicForm = () => {
  const { formData, renderFields } = useDynamicForm(formConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFields()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
