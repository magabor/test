const log = str => {
	console.log(str)
}

const display = (elem,str) => {
	const text = document.createTextNode(str);
	//document.body.insertBefore(text,elem);
	elem.innerHTML = str;
};

export {log,display};
