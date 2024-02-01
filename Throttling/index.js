const buttonRef = document.querySelector('button');

let lastExecutionTime = 0;
function throttle(cb, delay) {
	return function () {
		const currentTime = new Date().getTime();
		if (currentTime - lastExecutionTime >= delay) {
			cb();
			lastExecutionTime = currentTime;
		}
	};
}

let count = 0;
const throttleFn = throttle(() => {
	console.log('Pay!', ++count);
}, 1000);

buttonRef.addEventListener('click', throttleFn);

// Another method to throttle

// const buttonRef = document.querySelector('button');

// let flag = true;
// function throttle(cb, delay) {
// 	return function () {
// 		if (flag) {
// 			flag = false;
// 			setTimeout(() => {
// 				cb();
// 				flag = true;
// 			}, delay);
// 		}
// 	};
// }
// let count = 0;
// const throttleFn = throttle(() => {
// 	console.log('Pay!', ++count);
// }, 1000);

// buttonRef.addEventListener('click', throttleFn);
