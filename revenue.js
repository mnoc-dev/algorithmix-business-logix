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



const {open} = require('node:fs/promises');

(async () => {
	const data = await open('./data.csv');

	for await (const line of data.readLines()){

		console.log(line);
	}
})();
