const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
	let aInFirstRow = 0;
	let aInSecondRow = 0;
	for (let i = 0; i < firstRow.length; i++) {
		if (firstRow.charAt(i) == 'а') aInFirstRow++;
	}
	for (let j = 0; j < secondRow.length; j++) {
		if (secondRow.charAt(j) == 'а') aInSecondRow++;
	}
	if (aInFirstRow > aInSecondRow) return firstRow;
	else return secondRow;
}

console.log(getRow(firstRow, secondRow));

function formattedPhone(phone) {
	let newPhone = "";
	for (let i = 0; i < phone.length; i++) {
		newPhone += phone.charAt(i);
		if (i == 1) newPhone += " (";
		else if (i == 4) newPhone += ") ";
		else if (i == 7 || i == 9) newPhone += "-";
	}
	return newPhone;
}

console.log(formattedPhone('+71234567890'));