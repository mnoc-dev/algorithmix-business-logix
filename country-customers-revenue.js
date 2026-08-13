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
	let frSumRevenue = 0;
	let gbSumRevenue = 0;
	let usSumRevenue = 0;
	let jpSumRevenue = 0;

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
	const revenueEuro = revenue / rate;
		//console.log(revenueEuro + " €");
	const isoCode = lineSplit[1];
	
		//console.log(isoCode);
		
		if (isoCode === "FR"){
			frSumRevenue += revenueEuro;

		}
		else if (isoCode === "GB"){
			gbSumRevenue += revenueEuro;

		}
		else if (isoCode === "US"){
			usSumRevenue += revenueEuro;

		}
		else {
			jpSumRevenue += revenueEuro;

		}
		

}
		let total = frSumRevenue + gbSumRevenue + usSumRevenue + jpSumRevenue;
			console.log("fr : " + frSumRevenue + " €/ " + Math.round(frSumRevenue * 100) / 100  + " €");
			console.log("gb : " + gbSumRevenue + " €/ " + Math.round(gbSumRevenue * 100) / 100  + " €");
			console.log("us : " + usSumRevenue + " €/ " + Math.round(usSumRevenue * 100) / 100  + " €");
			console.log("jp : " + jpSumRevenue + " €/ " + Math.round(jpSumRevenue * 100) / 100  + " €\n\t");
			console.log("total : " + total + " €/ " + Math.round(total * 100) / 100 +" €\n");

		let frPercent = (frSumRevenue * 100) / total;
		let gbPercent = (gbSumRevenue * 100) / total;
		let usPercent = (usSumRevenue * 100) / total;
		let jpPercent = (jpSumRevenue * 100) / total;
			console.log("Fr Percent : " + frPercent + " %");
			console.log("Gb Percent : " + gbPercent + " %");
			console.log("Us Percent : " + usPercent + " %");
			console.log("Jp Percent : " + jpPercent + " %");
			

