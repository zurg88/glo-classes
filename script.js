'use strict';

let headerInput = document.querySelector('.header-input');
let inputHeight = document.querySelector('.input-height');
let inputWidth = document.querySelector('.input-width');
let inputBg = document.querySelector('.input-bg');
let inputFontSize = document.querySelector('.input-fontSize');
let inputText = document.querySelector('.input-text');
let btn = document.querySelector('.header-button');
let bcreatedElementsSectiontn = document.querySelector('.created-elements-section');


function DomElement(selector, height, width, bg, fontSize) {
	this.selector = headerInput.value;
	this.height = inputHeight.value;
	this.width = inputWidth.value;
	this.bg = inputBg.value;
	this.fontSize = inputFontSize.value;
}
let magic = new DomElement();


DomElement.prototype.showElement = function() {
	if(this.selector.value[0] === '.') {
	console.log(this.selector.value)

	} else if(headerInput.value[0] === '#') {
		console.log(magic);
	}
};





btn.addEventListener('click', magic.showElement );
