function salaries (name, salary) {
	return {
		name : name,
		salary: salary,
		maxSalary: function () {
			var max = salary;
			for (salary in salaries) {
				if (max < salaries[salary]) {
					max = salaries[salary];
				}
			}
			console.log(max);
		}
	}
};

var salaries = {
	John: 100,
	Bill: 300,
	Mike: 250,
};

salaries.maxSalary();