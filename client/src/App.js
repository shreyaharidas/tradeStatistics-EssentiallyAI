import React from "react";
import Display from "./components/Display";
import StockForm from "./components/StockForm";
import StockProvider from "./context/StockProvider";

//haven't used any libraries for styling since I was unsure if we can download libraries

const App = () => {
  return (
    <div>
      <StockProvider>
        <StockForm />
        <Display />
      </StockProvider>
    </div>
  );
};

export default App;
