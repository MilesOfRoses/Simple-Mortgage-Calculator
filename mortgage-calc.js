//the formula: MonthlyPayment = ((principal * rate) * Math.pow((1 + rate), numberOfYears)) / ( Math.pow((1 + rate), numberOfYears) - 1)

function calculateMortgage() {

	/*************** MONTHLY PAYMENTS INPUT SECTION ***************/


	let price = parseFloat(document.getElementById("inPrice").value); //save user input as a variable, convert it to a float
	let downPayment = parseFloat(document.getElementById("inDownPayment").value);
	let rate = parseFloat(document.getElementById("inRate").value);
	let numberOfYears = parseFloat(document.getElementById("numberOfYears").value);

	/*************** input validation ***************/
	if (price == 0) {
		alert("Please enter the Selling Price")
		return;
	} else if (rate == 0) {
		alert("Please enter the APR interest")
		return;
	} else if (numberOfYears == 0) {
		alert("Period (Years)")
		return;
	}



	/*************** MONTHLY PAYMENTS PROCESS SECTION ***************/


	//convert down payment from percentage to decimal
	downPayment = downPayment / 100;
	console.log("downPayment" + downPayment);

	//convert APR percentage to decimal
	rate = (rate / 12) / 100; //rate is divided by 12 because APR is the ANNUAL percentage rate, and we want to convert that to months.
	console.log("rate" + rate)

	//convert years to months
	let numberOfMonths = numberOfYears * 12;

	//subtract down payment from principal
	let principal = price * (1 - downPayment); // the down payment is a decimal

	let monthlyPayments = ((principal * rate) * Math.pow((1 + rate), numberOfMonths)) / ( Math.pow((1 + rate), numberOfMonths) - 1);
	let monthlyPaymentsCurrencyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD'}).format(monthlyPayments); //takes a float, converts it into USD currency

	/*************** MONTHLY PAYMENTS OUTPUT SECTION ***************/

	document.getElementById("monthlyPaymentOutut").innerHTML = "Monthly Payments: <b>" + monthlyPaymentsCurrencyFormat + "</b>";



}