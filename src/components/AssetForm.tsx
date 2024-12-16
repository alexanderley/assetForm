import React, { useState } from "react";
// import "./Form.css"; // You can also use SCSS here

const AssetForm: React.FC = () => {
  const [formData, setFormData] = useState({
    street: "",
    number: "",
    postcode: "",
    city: "",
    plotArea: "",
    usableArea: "",
    yearOfConstruction: "",
    yearOfRedevelopment: "",
    assetClass: "",
    objectStatus: "",
    monumentProtection: false,
    energyClass: "",
    mainTenant: "",
    yearlyRevenue: "",
    country: "Germany",
    walt: "",
  });

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

  return (
    <form className="asset-form">
      {/* Address Information Group */}
      <div className="form-group">
        <h3>Address Information</h3>
        <div className="form-row">
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street"
          />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Number"
          />
          <input
            type="text"
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
        </div>
      </div>

      {/* Asset Details Group */}
      <div className="form-group">
        <h3>Asset Details</h3>
        <div className="form-row">
          <input
            type="text"
            name="plotArea"
            value={formData.plotArea}
            onChange={handleChange}
            placeholder="Plot area (m²)"
          />
          <input
            type="text"
            name="usableArea"
            value={formData.usableArea}
            onChange={handleChange}
            placeholder="Usable area (m²)"
          />
          <input
            type="text"
            name="yearOfConstruction"
            value={formData.yearOfConstruction}
            onChange={handleChange}
            placeholder="Year Of Construction"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="yearOfRedevelopment"
            value={formData.yearOfRedevelopment}
            onChange={handleChange}
            placeholder="Year of Redevelopment"
          />
          <input
            type="text"
            name="assetClass"
            value={formData.assetClass}
            onChange={handleChange}
            placeholder="Select Asset Class"
          />
          <input
            type="text"
            name="objectStatus"
            value={formData.objectStatus}
            onChange={handleChange}
            placeholder="Select Object Status"
          />
        </div>
      </div>

      {/* Additional Information Group */}
      <div className="form-group">
        <h3>Additional Information</h3>
        <div className="form-row">
          <input
            type="text"
            name="mainTenant"
            value={formData.mainTenant}
            onChange={handleChange}
            placeholder="Main Tenant"
          />
          <input
            type="text"
            name="yearlyRevenue"
            value={formData.yearlyRevenue}
            onChange={handleChange}
            placeholder="Yearly Revenue (€)"
          />
          <input
            type="text"
            name="walt"
            value={formData.walt}
            onChange={handleChange}
            placeholder="WALT"
          />
        </div>
        <div className="form-row">
          <label>
            <input
              type="checkbox"
              name="monumentProtection"
              checked={formData.monumentProtection}
              onChange={handleCheckboxChange}
            />
            Monument Protection
          </label>
          <input
            type="text"
            name="energyClass"
            value={formData.energyClass}
            onChange={handleChange}
            placeholder="Select Energy Class"
          />
        </div>
      </div>

      {/* Country Selection */}
      <div className="form-group">
        <h3>Country</h3>
        <div className="form-row">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            disabled
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AssetForm;
