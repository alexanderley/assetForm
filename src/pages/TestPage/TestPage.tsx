import React from "react";
import DynamicForm from "../../components/ui/DynamicForm";

import { InputFieldConfig } from "../../types/InputTypes";

const TestPage: React.FC = () => {
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
    {
      id: "3",
      name: "theme",
      label: "Engery Class",
      type: "switch",
      options: [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
      ],
      placeholder: "Select a theme",
    },
    {
      id: "1",
      name: "config Test",
      label: "configTest",
      type: "text",
      required: true,
    },
    {
      id: "1",
      name: "config Test2",
      label: "configTest2",
      type: "text",
      required: true,
    },
  ];

  const formConfig2: InputFieldConfig[] = [
    {
      id: "10",
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      id: "20",
      name: "subscribeNewsletter",
      label: "Subscribe to Newsletter",
      type: "checkbox",
    },
    {
      id: "30",
      name: "colorScheme",
      label: "Color Scheme",
      type: "switch",
      options: [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
      ],
      placeholder: "Choose a color",
    },
    {
      id: "40",
      name: "membershipLevel",
      label: "Membership Level",
      type: "switch",
      options: [
        { label: "Silver", value: "silver" },
        { label: "Gold", value: "gold" },
      ],
      placeholder: "Select membership level",
    },
    {
      id: "50",
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      id: "60",
      name: "address",
      label: "Address",
      type: "text",
      required: true,
    },
  ];

  // console.log("formConfig: ", formConfig);

  return (
    <div>
      <h1>Test Page for hooks</h1>
      <DynamicForm formConfig={formConfig} />
      <DynamicForm formConfig={formConfig2} />
    </div>
  );
};

export default TestPage;
