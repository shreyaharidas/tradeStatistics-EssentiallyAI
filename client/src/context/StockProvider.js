import React, { createContext, useEffect, useState } from 'react'
import postStockData from '../api/postStockData';



export const StockDataContext = createContext({
    setDate: () => { },
    setSymbol: () => { },
    stockData: {
        close: undefined,
        high: undefined,
        low: undefined,
        open: undefined,
        volume: undefined
    },
    error:undefined,
});

const StockProvider =  (props) => {

    
    const [date, setDate] = useState();
    const [symbol, setSymbol] = useState();
    const [stockData, setStockData] = useState({});
    const [hasError, setHasError] = useState();



    useEffect( () => {

        const getData = async () => {

            if (symbol && data) {
                try {
                    
                    const stockdata = await postStockData(symbol, date);
                   
                    setStockData(stockdata);
                    setHasError();
                    
                }
                catch (error)
                {
                    setHasError(error.message);
                    
                }
                
            }
            
        }
        getData();
 },[date, symbol, hasError])


    const data = {
        setDate,
        setSymbol,
        stockData,
        hasError,
    }


  return (
      <StockDataContext.Provider value={data}>{props.children}</StockDataContext.Provider>
  )
}

export default StockProvider;