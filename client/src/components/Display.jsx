import React from "react";
import { useContext } from "react";
import { StockDataContext } from "../context/StockProvider";
import "../components/css/Display.css";

const Display = () => {
  const stockContext = useContext(StockDataContext);
  let { close, high, low, open, volume } = stockContext.stockData;

  if (stockContext.hasError) {
    return (
      <table className="display-table">
        <tbody>
          <tr>
            <td> {stockContext.hasError}</td>
          </tr>
        </tbody>
      </table>
    );
  } else if (!close && !high && !low && !open && !volume)
    return (
      <table className="display-table">
        <tbody>
          <tr>
            <td> Please fetch data to display</td>
          </tr>
        </tbody>
      </table>
    );
  else
    return (
      <table className="display-table">
        <tbody>
          <tr>
            <td>
              <div>
                <p>close : {close} </p>
                <p>high : {high} </p>
                <p>low : {low} </p>
                <p>open :{open}</p>
                <p>volume: {volume}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default Display;
