const debounce = function(func, delay){
	let timer;
	return function () {     //anonymous function
		const context = this;
		const args = arguments;
		clearTimeout(timer);
		timer = setTimeout(()=> {
			func.apply(context, args)
		},delay);
	}
}

export default debounce