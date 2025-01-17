export interface InputFieldConfig {
  id: string;
  name: string;
  label: string;
  type: "text" | "checkbox" | "switch";
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string | number }[]; // For switches
}
