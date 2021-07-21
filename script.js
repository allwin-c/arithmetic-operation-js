let uservalue = 5;
let subvalue = 10;
let mul = 2;


const add = () => {

	const h1 = document.getElementById('head');
	const value = document.getElementById('head').textContent;
	var v = parseInt(value);
	var add = v + uservalue;
	h1.innerText = add;
	console.log(add); 
	// alert(value);
};

const sub = () => {
	const h1 = document.getElementById('head');
	const value = document.getElementById('head').textContent;
	var v = parseInt(value);
	var add = v - subvalue;
	if (v == 5) {
		return h1.innerText = 0;
	}
	else
	{
		return h1.innerText = add;
	}
	console.log(add);
	alert(value);
};

const multiply = () => {
	const h1 = document.getElementById('head');
	const value = document.getElementById('head').textContent;
	var v = parseInt(value);
	var add = v * mul;
	h1.innerText = add;
	console.log(add);

};

const reset = () => {
	const h1 = document.getElementById('head');
	const value = document.getElementById('head').textContent;
	var v = parseInt(value);
	var add = '5'
	h1.innerText = add;
	console.log(add);
};



