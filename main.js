const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
	var aInFirstRow = 0;
	var aInSecondRow = 0;
	for (var i = 0; i < firstRow.length; i++) {
		if (firstRow.charAt(i) == 'а') aInFirstRow++;
	}
	for (var j = 0; j < secondRow.length; j++) {
		if (secondRow.charAt(j) == 'а') aInSecondRow++;
	}
	if (aInFirstRow > aInSecondRow) return firstRow;
	else return secondRow;
}

console.log(getRow(firstRow, secondRow));