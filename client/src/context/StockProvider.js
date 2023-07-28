import React, { createContext, useEffect, useState } from "react";
import postStockData from "../api/postStockData";

export const StockDataContext = createContext({
  stockData: {
    close: null,
    high: null,
    low: null,
    open: null,
    volume: null,
  },
  hasError: "",
  setDate: () => {},
  setSymbol: () => {},
});

const StockProvider = (props) => {
  const [date, setDate] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState({
    close: null,
    high: null,
    low: null,
    open: null,
    volume: null,
  });
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (symbol && date) {
        try {
          const stockdata = await postStockData(symbol, date);

          setStockData(stockdata);
          setHasError();
        } catch (error) {
          setHasError(error.message);
        }
      }
    };
    getData();
  }, [date, symbol, hasError]);

  const data = {
    stockData,
    hasError,
    setDate,
    setSymbol,
  };

  return (
    <StockDataContext.Provider value={data}>
      {props.children}
    </StockDataContext.Provider>
  );
};

export default StockProvider;
