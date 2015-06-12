var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleBy3 = function(number) {
	return number % 3 === 0;
};

Fizzbuzz.prototype.isDivisibleBy5 = function(number) {
	return number % 5 === 0;
};

Fizzbuzz.prototype.sayNumber = function(number) {
	if(this.isDivisibleBy3(number) && this.isDivisibleBy5(number)) {
		return 'FizzBuzz';
	}
	else if(this.isDivisibleBy3(number)) {
		return 'Fizz';
	}
	else if(this.isDivisibleBy5(number)) {
		return 'Buzz';
	}
	else {
		return number
	};
};

Fizzbuzz.prototype.count = function(first, last) {
	var i = first;
	for (i; i <= last; i++) {
		console.log(this.sayNumber(i));
	};
};