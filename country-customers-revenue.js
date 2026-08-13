//Aggregate customer data by country, in euros,
// taking into account the rate provided for each customer.
// rounded to two decimal places. 
//calculate the percentage of revenue by country. 
//calculate the total amount of revenues 

//customer_id: a (unique) identifier
//customer_country: the country ISO-2 code of the customer
//customer_currency: the currency code of the customer
//rate_to_eur: the rate to convert revenues from customer's currency to EUR
//customer_revenues: the revenues expressed in the customer's currency

//Read the file line by line asynchronously
//Do not confuse formatting with rounding

//Use a Map (data structure)
//	for...of	[key value]	set, has, get, delete

//Use template literals for the output
//	`${}+`	\n\t

//fsPromises.chmod(path, mode) Change permission	Need more info

import { open } from 'node:fs/promises';

const file = await open('./data.csv');

let lineCount = 0;




//		let  isoAndRevenue = new Map();
//		let iso = country[1];
//		let  customRev = country[4];
//		console.log(iso + customRev);

for await (const line of file.readLines()) {
	lineCount ++;
  		if (lineCount < 3){
			continue;
		}
		if (!line.trim()){
			continue;
		}
		
		//console.log(line);
	const lineSplit = line.split(",");
	const rate = lineSplit[3];
	const revenue = lineSplit[4]; 
	const revenueEuro = rate * revenue;
		//console.log(revenueEuro + " €");
	const isoCode = lineSplit[1];
	let frSumRevenue = 0;
	let gbSumRevenue = 0;
	let usSumRevenue = 0;
	let jpSumRevenue = 0;
		
		console.log(isoCode);
		while(line === undefined){
		if (isoCode === "FR"){
			frSumRevenue += revenueEuro;
		}
		if (isoCode === "GB"){
			gbSumRevenue += revenueEuro;
			console.log(gbSumRevenue);

		}
		if (isoCode === "US"){
			usSumRevenue += revenueEuro;
			console.log(usSumRevenue);

		}
		if (isoCode === "JP"){
			jpSumRevenue += revenueEuro;
			console.log(jpSumRevenue);

		}
		}
			console.log(frSumRevenue + "");

}
