import "./App.scss";
// import FormPage from "./pages/FormPage";
import TestPage from "./pages/TestPage/TestPage";
import "../src/context/form.context";
import { FormProviderWrapper } from "../src/context/form.context";

function App() {
  return (
    <>
      <FormProviderWrapper>
        {/* <FormPage /> */ <TestPage />}
      </FormProviderWrapper>
    </>
  );
}

export default App;
