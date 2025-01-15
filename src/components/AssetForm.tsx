import React, { useContext, useEffect, useState } from "react";
import Button from "./ui/Button";
import { FormContext } from "../context/form.context";
import "./AssetForm.scss";

interface AssetFormData {
  street: string;
  number: string;
  postcode: string;
  city: string;
  country: string;
  plotArea: string;
  usableArea: string;
  yearOfConstruction: string;
  yearOfRedevelopment: string;
  assetClass: string;
  objectStatus: string;
  energyClass: string;
  monumentProtection: boolean;
  mainTenant: string;
  yearlyRevenue: string;
  walt: string;
}

interface AssetConfig {
  type: string;
  name: string;
  placeholder: string;
}

const AssetForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<AssetFormData>>({
    street: "",
    number: "",
    postcode: "",
    city: "",
    country: "",
    plotArea: "",
    usableArea: "",
    yearOfConstruction: "",
    yearOfRedevelopment: "",
    assetClass: "",
    objectStatus: "",
    energyClass: "",
    monumentProtection: false,
    mainTenant: "",
    yearlyRevenue: "",
    walt: "",
  });

  const formContext = useContext(FormContext);

  useEffect(() => {
    console.log("formData in effect", formData);
  }, [formData]);

  const adressFields: AssetConfig[] = [
    {
      type: "text",
      name: "street",
      placeholder: "Street",
    },
    {
      type: "text",
      name: "number",
      placeholder: "Number",
    },
    {
      type: "number",
      name: "postcode",
      placeholder: "Postcode",
    },
    {
      type: "text",
      name: "city",
      placeholder: "City",
    },
    {
      type: "text",
      name: "country",
      placeholder: "Country",
    },
  ];

  const areaFields: AssetConfig[] = [
    {
      type: "number",
      name: "plotArea",
      placeholder: "Plot area (m²)",
    },
    {
      type: "number",
      name: "usableArea",
      placeholder: "Usable area (m²)",
    },
    {
      type: "number",
      name: "yearlyRevenue",
      placeholder: "Yearly Revenue (€)",
    },
  ];

  const yearInformationFields: AssetConfig[] = [
    {
      type: "number",
      name: "yearOfConstruction",
      placeholder: "Year Of Construction",
    },
    {
      type: "text",
      name: "yearOfRedevelopment",
      placeholder: "Year Of Redeveloping",
    },
    {
      type: "checkbox",
      name: "monumentProtection",
      placeholder: "Year Of Construction",
    },
  ];

  if (!formContext) {
    throw new Error("formContext is false or undefined");
  }
  const { setFormContextData } = formContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("✨✨ Event in handle Change: ", e.target, formData);

    // Checks for the type of field
    switch (e.target.type) {
      case "text":
        console.log("text", formData);
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        break;
      case "checkbox":
        console.log("checkbox", e.target.checked, e.target.name, formData);
        setFormData({
          ...formData,
          [e.target.name]: e.target.checked,
        });
        break;
      case "select":
        console.log("select", formData);
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.checked,
  //   });
  // };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormContextData((prevState: any) => {
      console.log("prevState: ", prevState);
      console.log("formData: ", formData);
      if (prevState) {
        return {
          ...prevState,
          assetForm: {
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
    <form className="asset-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="form-row-top">
          {adressFields.map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
            />
          ))}
        </div>
      </div>
      <div className="form-group">
        <div className="form-row">
          {areaFields.map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
            />
          ))}
          {areaFields.map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              onChange={handleChange}
              placeholder={input.placeholder}
              {...(input.type === "checkbox" && { value: "true" })}
            />
          ))}
        </div>
        <div className="form-row">
          {yearInformationFields.map((input) => {
            if (input.type === "text") {
              return (
                <input
                  key={input.name}
                  type={input.type}
                  name={input.name}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                />
              );
            }
            if (input.type === "checkbox") {
              return (
                <input
                  key={input.name}
                  type="checkbox"
                  onChange={handleChange}
                  name={input.name}
                  placeholder={input.placeholder}
                  value="true"
                />
              );
            }
          })}
        </div>
        <div className="form-row">
          <select
            id="dropdown"
            value={formData.assetClass}
            onChange={handleChange}
            name="assetClass"
          >
            <option value="" disabled selected>
              Select Asset Class
            </option>
            <option value="assetClass-1">Asset Class 1</option>
            <option value="assetClass-2">Asset Class 2</option>
            <option value="assetClass-3">Asset Class 3</option>
          </select>
          <select
            id="dropdown"
            value={formData.objectStatus}
            onChange={handleChange}
            name="objectStatus"
          >
            <option value="" disabled selected>
              Select ObjectStatus
            </option>
            <option value="objectStatus-1">Objektstatus 1</option>
            <option value="objectStatus-2">Objektstatus 2</option>
            <option value="objectStatus-3">Objektstatus 3</option>
          </select>
          <select
            id="dropdown"
            value={formData.energyClass}
            onChange={handleChange}
            name="energyClass"
          >
            <option value="" disabled selected>
              Select Energie Class
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="form-row">
          <input
            type="text"
            name="walt"
            value={formData.walt}
            onChange={handleChange}
            placeholder="WALT"
          />
          <input
            type="text"
            name="mainTenant"
            value={formData.mainTenant}
            onChange={handleChange}
            placeholder="Main Tenant"
          />
        </div>
      </div>
      <div className="buttonContent">
        {" "}
        <Button type="submit">Save & Continue</Button>
        {isSubmitted && <div className="check-icon">✔️</div>}
      </div>
    </form>
  );
};

export default AssetForm;
