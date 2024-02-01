const input = document.querySelector('input');

function debounce(cb, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}

const debounceFn = debounce((value) => {
	console.log(value);
}, 500);

input.addEventListener('keyup', (e) => {
	debounceFn(e.target.value);
});
