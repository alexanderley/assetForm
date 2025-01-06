import React, { useContext, useState } from "react";
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

const AssetForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AssetFormData>({
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

  if (!formContext) {
    throw new Error("formContext is false or undefined");
  }
  const { setFormContextData } = formContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormContextData((prevState: any) => {
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
        {/* <h3>Address Information</h3> */}
        <div className="form-row-top">
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street"
          />
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Number"
            className="small-input"
          />
          <input
            type="number"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            placeholder="Postcode"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
          />
        </div>
      </div>
      {/* Asset Details Group */}
      <div className="form-group">
        {/* <h3>Asset Details</h3> */}
        <div className="form-row">
          <input
            type="number"
            name="plotArea"
            value={formData.plotArea}
            onChange={handleChange}
            placeholder="Plot area (m²)"
          />
          <input
            type="number"
            name="usableArea"
            value={formData.usableArea}
            onChange={handleChange}
            placeholder="Usable area (m²)"
          />
          <input
            type="number"
            name="yearlyRevenue"
            value={formData.yearlyRevenue}
            onChange={handleChange}
            placeholder="Yearly Revenue (€)"
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            name="yearOfConstruction"
            value={formData.yearOfConstruction}
            onChange={handleChange}
            placeholder="Year Of Construction"
          />
          <input
            type="text"
            name="yearOfRedevelopment"
            value={formData.yearOfRedevelopment}
            onChange={handleChange}
            placeholder="Year of Redevelopment"
          />
          <label>
            <input
              type="checkbox"
              name="monumentProtection"
              checked={formData.monumentProtection}
              onChange={handleCheckboxChange}
            />
            <span className="checkboxLabel">Monument Protection</span>
          </label>
        </div>
        <div className="form-row">
          <select
            id="dropdown"
            value={formData.assetClass}
            onChange={handleSelectChange}
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
            onChange={handleSelectChange}
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
            onChange={handleSelectChange}
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
