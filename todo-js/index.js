const todoList = [
	{
		id: 1,
		text: 'Buy groceries',
		isCompleted: false,
	},
	{
		id: 2,
		text: 'Get milk',
		isCompleted: true,
	},
	{
		id: 3,
		text: 'complete lecture',
		isCompleted: false,
	},
	{
		id: 4,
		text: 'Bike repair',
		isCompleted: true,
	},
	{
		id: 5,
		text: 'attend meeting',
		isCompleted: false,
	},
];

const itemsSection = document.querySelector('.items-section');

function renderList() {
	const list = todoList.map((todo) => {
		const newItem = document.createElement('li');
		newItem.classList.add('item');
		newItem.innerText = todo.text;
		itemsSection.appendChild(newItem);
	});
	return list;
}

renderList();

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const input = document.querySelector('#todo-input');
// 	const newItem = document.createElement('li');
// 	newItem.classList.add('item');
// 	newItem.innerText = input.value;
// 	itemsSection.appendChild(newItem);
// });

const input = document.querySelector('#todo-input');

input.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		const newItem = document.createElement('li');
		newItem.classList.add('item');
		newItem.innnerText = e.target.value;

		todoList.push({
			id: todoList.length + 1,
			text: e.target.value,
			isCompleted: false,
		});

		itemsSection.innerHTML = '';
		input.value = '';
		renderList();
	}
});
