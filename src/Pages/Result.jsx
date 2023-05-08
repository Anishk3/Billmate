import React, { useState, useEffect } from 'react';
import receipts from '../output2.json'


function Result() {
  // const [receipts, setReceipts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../output2.json');
  //       console.log(response)
  //       const data = await response.json();
  //       setReceipts(data.receipts);
  //     } catch (error) {
  //       console.error('Error fetching JSON data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Receipt Information</h1>
      <table id="receipt-table">
        <thead>
          <tr>
            <th>Merchant Name</th>
            <th>Merchant Address</th>
            <th>Merchant Phone</th>
            <th>Mall</th>
            <th>Receipt No.</th>
            <th>Date</th>
            <th>Time</th>
            <th>Currency</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {receipts.receipts.map((receipt) => (
            <tr key={receipt.receipt_no}>
              <td>{receipt.merchant_name}</td>
              <td>{receipt.merchant_address}</td>
              <td>{receipt.merchant_phone}</td>
              <td>{receipt.mall}</td>
              <td>{receipt.receipt_no}</td>
              <td>{receipt.date}</td>
              <td>{receipt.time}</td>
              <td>{receipt.currency}</td>
              <td>{receipt.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
