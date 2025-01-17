import { useState } from "react";

import { InputFieldConfig } from "../../types/Inputtypes";
("../../types/Inputtypes");

type FormData = { [key: string]: string | number | boolean };

const useDynamicForm = (config: InputFieldConfig[]) => {
  const [formData, setFormData] = useState<FormData>(
    config.reduce((acc, field) => {
      acc[field.name] = field.type === "checkbox" ? false : "";
      return acc;
    }, {} as FormData)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const renderFields = () => {
    return config.map((field) => {
      switch (field.type) {
        case "text":
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                value={String(formData[field.name] || "")}
                onChange={handleChange}
                required={field.required}
              />
            </div>
          );
        case "checkbox":
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>
                <input
                  id={field.id}
                  name={field.name}
                  type="checkbox"
                  checked={!!formData[field.name]}
                  onChange={handleChange}
                />
                {field.label}
              </label>
            </div>
          );
        case "switch":
          return (
            <div key={field.id}>
              <label>{field.label}</label>
              <select
                id={field.id}
                name={field.name}
                value={String(formData[field.name] || "")}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {field.placeholder || "Select an option"}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return { formData, renderFields };
};

export default useDynamicForm;
