//your code here
const parent = document.getElementById("parent");
const images = document.querySelectorAll(".image");
images.forEach(image => {
	image.addEventListener("dragstart", function (e) {
		e.dataTransfer.setData("text", e.target.id);
	})

	image.addEventListener("dragover", function(e) {
		e.preventDefault();
	})

	image.addEventListener("drop", function (e) {
		e.preventDefault();
		const dragId = e.dataTransfer.getData("text");
		const dragElement = document.getElementById(dragId);
		const nextToDragEle = dragElement.nextElementSibling;
		parent.insertBefore(dragElement, image);
		if(nextToDragEle){
			parent.insertBefore(image, nextToDragEle);
		} else {
			parent.append(image);
		}
	})
})