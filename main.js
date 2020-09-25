const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function amountA(array) {
	let aInArray = 0;
	for (let i = 0; i < array.length; i++) {
		if (array.charAt(i) === 'а') aInArray++;
	}
	return aInArray;
}

function getRow(firstRow, secondRow) {
	if (amountA(firstRow) > amountA(secondRow)) return firstRow;
	else return secondRow;
}

console.log(getRow(firstRow, secondRow));

function formattedPhone(phone) {
	let newPhone = "";
	for (let i = 0; i < phone.length; i++) {
		newPhone += phone.charAt(i);
		if (i === 1) newPhone += " (";
		else if (i === 4) newPhone += ") ";
		else if (i === 7 || i === 9) newPhone += "-";
	}
	return newPhone;
}

console.log(formattedPhone('+71234567890'));