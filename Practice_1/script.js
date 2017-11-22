function qSort(mas, left, right) {
	var op = mas[(left + right) / 2]; //выбор опорного элемента
	var tmp = 0;
	var i = left; //указатель на левую границу
	var j = right; //указатель на правую границу

		while (mas[i] < op) { //
			i++;
		}

		while (mas[j] > op) {
			j--;
		}

		if (i <= j) {
			if (mas[i] > mas[j]) { //меняем местами
				tmp = mas[i];
				mas[i] = mas[j];
				mas[j] = tmp;
			}
		i++;
		j--;
	 	}

	if (left < j)  
		qSort(mas, left, j); //рекурсивный вызов

	if (right > i) 
		qSort(mas, i, right); //рекурсивный вызов
}

var mas = [12, 7, -9, 0, 56, 104, 112];
console.log("Исходный массив:");
console.log(mas);
var left = 0;
var right = mas.length - 1;
qSort(mas, left, right);
console.log("Отсортированный массив:")
for (var i = 0; i < mas.length; i++) {
	console.log(mas[i]);
}