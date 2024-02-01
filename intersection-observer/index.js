const cardsRef = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('show', entry.isIntersecting);
			if (entry.isIntersecting) observer.unobserve(entry.target);
		});
	},
	{ threshold: 0.5 }
);

cardsRef.forEach((card) => {
	observer.observe(card);
});
