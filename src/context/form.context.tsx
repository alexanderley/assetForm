import { createContext, ReactNode, useEffect, useState } from "react";

// interface AssetFormData {
//   street?: string;
//   number?: string;
//   postcode?: string;
//   city?: string;
//   country?: string;
//   plotArea?: string;
//   usableArea?: string;
//   yearlyRevenue?: string;
//   yearOfConstruction?: string;
//   yearOfRedevelopment?: string;
//   assetClass?: string;
//   objectStatus?: string;
//   energyClass?: string;
//   monumentProtection?: boolean;
//   mainTenant?: string;
//   walt?: string;
// }

// interface DateTimeData {
//   date?: string;
//   time?: string;
//   seller?: string;
//   owner?: string;
//   salesPrice?: string;
//   commission?: string;
//   revenuesActual?: string;
//   revenuesTarget?: string;
//   usableSpace?: string;
//   grossFloorArea?: string;
// }

// interface InternalNoteData {
//   internalNote?: string;
// }

// interface FormContextType {
//   formContextData: {
//     assetForm: AssetFormData;
//     dateTimeForm: DateTimeData;
//     internalNote: InternalNoteData;
//   };
//   setFormContextData: React.Dispatch<React.SetStateAction<any>>;
// }

interface FormContextType {
  formContextData: {};
  setFormContextData: React.Dispatch<React.SetStateAction<object>>;
}

interface FormProviderWrapperProps {
  children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

function FormProviderWrapper({ children }: FormProviderWrapperProps) {
  // const [formContextData, setFormContextData] = useState({
  //   assetForm: {
  //     street: "",
  //     number: "",
  //     postcode: "",
  //     city: "",
  //     country: "",
  //     plotArea: "",
  //     usableArea: "",
  //     yearlyRevenue: "",
  //     yearOfConstruction: "",
  //     yearOfRedevelopment: "",
  //     assetClass: "",
  //     objectStatus: "",
  //     energyClass: "",
  //     monumentProtection: false,
  //     mainTenant: "",
  //     walt: "",
  //   } as AssetFormData,

  //   dateTimeForm: {
  //     date: "",
  //     time: "",
  //     seller: "",
  //     owner: "",
  //     salesPrice: "",
  //     commission: "",
  //     revenuesActual: "",
  //     revenuesTarget: "",
  //     usableSpace: "",
  //     grossFloorArea: "",
  //   } as DateTimeData,

  //   internalNote: {
  //     internalNote: "",
  //   } as InternalNoteData,
  // });

  const [formContextData, setFormContextData] = useState<object>({});

  useEffect(() => {
    console.log("FormContext has been changed!!!: ", formContextData);
  }, [formContextData]);

  return (
    <FormContext.Provider value={{ formContextData, setFormContextData }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormProviderWrapper, FormContext };
