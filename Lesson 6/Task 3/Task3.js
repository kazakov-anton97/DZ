var salaries = {
	Alex: 350,
	Sam: 750,
	Mark: 890,
	maxSalary: function () {
		var max = 0;
		for (salary in salaries) {
			if (max < salaries[salary]) {
					max = salaries[salary];
			}
		}
		console.log(max);
	}
};
salaries.maxSalary();
