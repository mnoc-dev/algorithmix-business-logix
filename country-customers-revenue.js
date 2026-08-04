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

<<<<<<< HEAD:revenue.js
		let line = line.trim();
//		let country = line.split(",");
//		let line = line.trim();
//		console.log(line);

//		console.log(country[1]);
//		console.log(country[4]);

//		let  isoAndRevenue = new Map();
//		let iso = country[1];
//		let  customRev = country[4];
//		console.log(iso + customRev);
	}
=======
for await (const line of file.readLines()) {
	lineCount ++;
  		if (lineCount < 3){
			continue;
		}
		if (!line.trim()){
			continue;
>>>>>>> 34adca850b5e5d4fb5863a46efadccf86e2e7268:country-customers-revenue.js
	
		}
	

console.log(line);
}
