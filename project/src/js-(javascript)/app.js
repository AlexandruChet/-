let btnBlock = document.getElementById("btnBlock");
let text = document.getElementById("text");

btnBlock.onclick = function () {
	if (text.textContent === '') {
		text.textContent =
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officia maxime excepturi dicta error accusamus totam quo. Eum corporis nulla aspernatur dolorum nisi, natus earum, recusandae illo, tenetur esse tempore?';
	} else {
		text.textContent = '';
	}
}
