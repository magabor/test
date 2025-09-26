//import log from "/funcs.js";

document.addEventListener("DOMContentLoaded", () => {
	//log("Hello World");
	const btn = document.getElementById("btn_hello");
	const hello = document.getElementById("hello");
	btn.addEventListener("click", () => {
		//log("Hello");
		import("/funcs.js").then((Module) => {
			Module.log("Hello");
			Module.display(hello,"Hello!");

		});
	});
	console.log("Hello Again");
});
