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

let img = document.getElementsByClassName("myImg")
img.alt = "Якщо ви ще захочите зайти і купити чудові картини то пропоную залишитись на цьому сайті"

function toggleAnswer(questionNumber) {
	const answer = document.getElementById(`answer${questionNumber}`)
	if (answer.style.display === "none" || answer.style.display === "") {
		answer.style.display = "block"
	}
	else {
		answer.style.display = "none"
	}
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("modalOverlay").style.display = 'block';
});

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

let newBtn = document.getElementById("newBtn");
let myNewText = document.getElementById("myNewtext");

newBtn.onclick = function () {
	if (myNewText.textContent === '') {
		myNewText.textContent =
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officia maxime excepturi dicta error accusamus totam quo. Eum corporis nulla aspernatur dolorum nisi, natus earum, recusandae illo, tenetur esse tempore?';
	} else {
		myNewText.textContent = '';
	}
}