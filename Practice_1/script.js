function quickSort(mas, left, right) {
	var pivot = mas[(left + right) / 2]; //выбор опорного элемента
	var tmp = 0;
	var i = left; //указатель на левую границу
	var j = right; //указатель на правую границу

		while (mas[i] < pivot) { //
			i++;
		}

		while (mas[j] > pivot) {
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
		quickSort(mas, left, j); //рекурсивный вызов

	if (right > i) 
		quickSort(mas, i, right); //рекурсивный вызов
}

var mas = [12, 7, -9, 0, 56, 104, 112];
console.log("Исходный массив:");
console.log(mas);
var left = 0;
var right = mas.length - 1;
quickSort(mas, left, right);
console.log("Отсортированный массив:")
for (var i = 0; i < mas.length; i++) {
	console.log(mas[i]);
}
