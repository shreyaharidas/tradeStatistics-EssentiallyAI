import http from "./apibase";

const postStockData = (symbol, date) => {
  return http
    .post(`/api/fetchStockData?symbol=${symbol}&date=${date}`)
    .then((data) => data.data);
};

export default postStockData;
