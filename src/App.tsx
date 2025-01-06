import "./App.scss";
import FormPage from "./pages/FormPage";
import "../src/context/form.context";
import { FormProviderWrapper } from "../src/context/form.context";

function App() {
  return (
    <>
      <FormProviderWrapper>
        <FormPage />
      </FormProviderWrapper>
    </>
  );
}

export default App;
