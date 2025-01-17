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

interface Option {
  label: string;
  value: string | number;
}

interface AssetConfig {
  type: string;
  name: string;
  placeholder: string;

  // for select fields
  id?: string;
  options?: Option[];
}

export const addressFields: AssetConfig[] = [
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

export const areaFields: AssetConfig[] = [
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

export const yearInformationFields: AssetConfig[] = [
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

export const assetClassFields: AssetConfig[] = [
  {
    id: "dropdown",
    type: "select",
    name: "objectStatus",
    placeholder: "Select Objekt Status",
    options: [
      { value: "objectStatus-1", label: "Objektstatus 1" },
      { value: "objectStatus-2", label: "Objektstatus 2" },
      { value: "objectStatus-3", label: "Objektstatus 3" },
    ],
  },
  {
    id: "dropdown",
    type: "select",
    name: "assetClass",
    placeholder: "Select Asset Class",
    options: [
      { value: "assetClass-1", label: "assetClass 1" },
      { value: "assetClass-2", label: "assetClass 2" },
      { value: "assetClass-3", label: "assetClass 3" },
    ],
  },
  {
    id: "dropdown",
    type: "select",
    name: "energyClass",
    placeholder: "Energy Class",
    options: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "C", label: "C" },
    ],
  },
];
