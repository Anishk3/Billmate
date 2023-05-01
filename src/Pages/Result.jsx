import React from 'react'

function Result() {

    // Define the JSON file URL
const url = 'output2.json';

// Fetch the JSON data from the URL
fetch(url)
	.then(response => response.json())
	.then(data => {
		// Access the "receipts" array from the JSON data
		const receipts = data.receipts;

		// Loop through each receipt and create a table row for it
		const tableBody = document.querySelector('#receipt-table tbody');
		receipts.forEach(receipt => {
			const row = tableBody.insertRow();

			row.insertCell().innerHTML = receipt.merchant_name;
			row.insertCell().innerHTML = receipt.merchant_address;
			row.insertCell().innerHTML = receipt.merchant_phone;
			row.insertCell().innerHTML = receipt.mall;
			row.insertCell().innerHTML = receipt.receipt_no;
			row.insertCell().innerHTML = receipt.date;
			row.insertCell().innerHTML = receipt.time;
			row.insertCell().innerHTML = receipt.currency;
			row.insertCell().innerHTML = receipt.total;
		});
	})
	.catch(error => {
		console.error('Error fetching JSON data:', error);
	});
    
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
		<tbody></tbody>
	</table>

    </div>
  )
}

export default Result