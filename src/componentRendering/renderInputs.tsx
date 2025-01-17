// import { useContext, useState } from "react";
// import { FormContext } from "../context/form.context";

// interface AssetFormData {
//   street: string;
//   number: string;
//   postcode: string;
//   city: string;
//   country: string;
//   plotArea: string;
//   usableArea: string;
//   yearOfConstruction: string;
//   yearOfRedevelopment: string;
//   assetClass: string;
//   objectStatus: string;
//   energyClass: string;
//   monumentProtection: boolean;
//   mainTenant: string;
//   yearlyRevenue: string;
//   walt: string;
// }

// interface InputElement {
//   id?: string;
//   label?: string;
//   name: string;
//   type: string;
//   value?: string | number | boolean;
//   placeholder?: string;
//   required?: boolean;

//   // typescript error:
//   options?: { label?: string; value: string | number }[];
// }

// type InputElements = InputElement[];

// // function to rende inputfields
// export const renderInputs = (inputElements: InputElements): JSX.Element[] => {
//   const formContext = useContext(FormContext);

//   if (!formContext) {
//     throw new Error("formContext is false or undefined");
//   }
//   //   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState<Partial<AssetFormData>>({
//     street: "",
//     number: "",
//     postcode: "",
//     city: "",
//     country: "",
//     plotArea: "",
//     usableArea: "",
//     yearOfConstruction: "",
//     yearOfRedevelopment: "",
//     assetClass: "",
//     objectStatus: "",
//     energyClass: "",
//     monumentProtection: false,
//     mainTenant: "",
//     yearlyRevenue: "",
//     walt: "",
//   });

//   // Handles Change functionality
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     console.log("✨✨ Event in handle Change: ", e.target.type, formData);
//     // Checks for the type of field
//     switch (e.target.type) {
//       case "text":
//         console.log("text", formData);
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//         break;
//       case "checkbox":
//         console.log("checkbox", e.target.checked, e.target.name, formData);
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.checked,
//         });
//         break;
//       case "select":
//         console.log("select-one", formData);
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value,
//         });
//     }

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return inputElements.map((input) =>
//     input.id === "dropdown" ? (
//       <select
//         id="dropdown"
//         value={String(input.value || "")}
//         name={String(input.name) || ""}
//         onChange={handleChange}
//       >
//         {/* Default dropdown field */}
//         <option value="" disabled selected>
//           {input.placeholder}
//         </option>
//         {input.options?.map((option) => (
//           <option value={option.value}>{option.value}</option>
//         ))}
//       </select>
//     ) : (
//       <input
//         key={input.name}
//         type={input.type}
//         name={input.name}
//         onChange={handleChange}
//         placeholder={input.placeholder}
//         {...(input.type === "checkbox" && { value: "true" })}
//       />
//     )
//   );
// };

import React from "react";

interface InputElement {
  id?: string;
  label?: string;
  name: string;
  type: string;
  value?: string | number | boolean;
  placeholder?: string;
  required?: boolean;
  options?: { label?: string; value: string | number }[];
}

type InputElements = InputElement[];

export const renderInputs = (
  inputElements: InputElements,
  formData: { [key: string]: any },
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
): JSX.Element[] => {
  return inputElements.map((input) =>
    input.id === "dropdown" ? (
      <select
        key={input.name}
        id="dropdown"
        value={String(formData[input.name] || "")}
        name={input.name}
        onChange={handleChange}
      >
        <option value="" disabled>
          {input.placeholder}
        </option>
        {input.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>
    ) : (
      <input
        key={input.name}
        type={input.type}
        name={input.name}
        value={formData[input.name] || ""}
        onChange={handleChange}
        placeholder={input.placeholder}
        {...(input.type === "checkbox" && { checked: !!formData[input.name] })}
      />
    )
  );
};
