/*  Задание №3. Замыкания
Напишите код для "безопасного" вычисления периметра и площади
прямоугольника.
Сторонами прямоугольника может быть только число (тип данных Number,
значения других типов данных нельзя устанавливать), значение которого, строго
больше 0.  */

function Pr() {
	var a = 0;
	var b = 0;
	var arr = [];
	arr[0] = function (newA, newB) {
		if ((newA > 0) && (typeof newA === Number) && (newB > 0) && (typeof newB === Number)) {
			a = newA;
		    b = newB; 
		} //else console.log('error');
	};
	arr[1] = function () {
		return ((a + b) / 2);
	};
	arr[2] = function () {
		return (a * b);
	};
	return arr;
}
var v = Pr();
v[0] (4, 8);
console.log (v[1] () ); 
v[0] (2, 'o');
console.log (v[2] () );
