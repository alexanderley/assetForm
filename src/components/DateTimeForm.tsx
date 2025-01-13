import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import { FormContext } from "../context/form.context";

import "./DateTimeForm.scss";

interface DateTimeFormData {
  date: string;
  time: string;
  seller: string;
  owner: string;
  salesPrice: string;
  commission: string;
  revenuesActual: string;
  revenuesTarget: string;
  usableSpace: string;
  grossFloorArea: string;
}

const DateTimeForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [formData, setFormData] = useState<DateTimeFormData>({
  //   date: "",
  //   time: "",
  //   seller: "",
  //   owner: "",
  //   salesPrice: "",
  //   commission: "",
  //   revenuesActual: "",
  //   revenuesTarget: "",
  //   usableSpace: "",
  //   grossFloorArea: "",
  // });

  const [formData, setFormData] = useState<Partial<DateTimeFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
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
          dateTimeForm: {
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
      <form className="date-time-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              id="seller"
              name="seller"
              placeholder="Seller"
              value={formData.seller}
              onChange={handleChange}
            />
            <label htmlFor="seller">Name of a company or person</label>
          </div>

          <div className="form-row">
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="Owner"
              value={formData.owner}
              onChange={handleChange}
            />
            <label htmlFor="owner">Name of a company or person</label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="salesPrice"
              name="salesPrice"
              placeholder="Sales price"
              value={formData.salesPrice}
              onChange={handleChange}
            />
            <label htmlFor="salesPrice">Sales price,usally 1 Mio</label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="commission"
              name="commission"
              placeholder="Commission"
              value={formData.commission}
              onChange={handleChange}
            />
            <label htmlFor="commission">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dolores!
            </label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="revenuesActual"
              name="revenuesActual"
              placeholder="Revenues Actual per year"
              value={formData.revenuesActual}
              onChange={handleChange}
            />
            <label htmlFor="revenuesActual">
              Revenues Lorem ipsum, dolor sit amet consectetur adipisicing.
            </label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="revenuesTarget"
              name="revenuesTarget"
              placeholder="Revenues Target"
              value={formData.revenuesTarget}
              onChange={handleChange}
            />
            <label htmlFor="revenuesTarget">
              Revenues Target Lorem ipsum dolor sit amet.
            </label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="usableSpace"
              name="usableSpace"
              placeholder="Usable space"
              value={formData.usableSpace}
              onChange={handleChange}
            />
            <label htmlFor="usableSpace">
              Rentable space in spm Lorem, ipsum.
            </label>
          </div>

          <div className="form-row">
            <input
              type="number"
              id="grossFloorArea"
              name="grossFloorArea"
              placeholder="Gross Floor Area"
              value={formData.grossFloorArea}
              onChange={handleChange}
            />
            <label htmlFor="grossFloorArea">
              Total space are in sql incl Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </label>
          </div>
        </div>
        <div className="buttonContent">
          {" "}
          <Button type="submit">Save & Continue</Button>
          {isSubmitted && <div className="check-icon">✔️</div>}
        </div>
      </form>
    </>
  );
};

export default DateTimeForm;
