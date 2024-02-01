const modalButton = document.querySelector('.modal .right-section .cross-btn');
const modal = document.querySelector('.modal');

modalButton.addEventListener('click', () => {
	modal.classList.add('hide');
});

const addBtn = document.querySelector('.header .action-container .add-btn');

addBtn.addEventListener('click', () => {
	modal.classList.remove('hide');
});
