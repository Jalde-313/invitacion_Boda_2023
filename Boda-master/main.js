document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});


