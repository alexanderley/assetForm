import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import { FormContext } from "../context/form.context";
import "./AssetForm.scss";

// Import configurations for input fields
import {
  addressFields,
  areaFields,
  yearInformationFields,
  assetClassFields,
} from "../configs/assetFormConfigs";

import { renderInputs } from "../componentRendering/renderInputs";

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

const AssetForm: React.FC = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("formContext is false or undefined");
  }

  const { setFormContextData } = formContext;

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormContextData((prevState: any) => ({
      ...prevState,
      assetForm: { ...formData },
    }));
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form className="asset-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="form-row-top">
          {renderInputs(addressFields, formData, handleChange)}
        </div>
      </div>
      <div className="form-group">
        <div className="form-row">
          {renderInputs(areaFields, formData, handleChange)}
        </div>
        <div className="form-row">
          {renderInputs(yearInformationFields, formData, handleChange)}
        </div>
        <div className="form-row">
          {renderInputs(assetClassFields, formData, handleChange)}
        </div>
      </div>
      <div className="buttonContent">
        <Button type="submit">Save & Continue</Button>
      </div>
    </form>
  );
};

export default AssetForm;
