'use strict';

let headerInput = document.querySelector('.header-input');
let btn = document.querySelector('.btn');
let createdElementsSectiontn = document.querySelector('.created-elements-section');


const DomElement = function ( height, width, bg, fontSize, text) {
	this.selector = headerInput;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.btn = btn;
	this.text = text;
};


DomElement.prototype.showElement = function() {
	
	if(this.selector.value[0] === '.') {
		let block = document.createElement('div');
		let blockClass = this.selector.value.slice(1);
		block.classList.add(blockClass);
		createdElementsSectiontn.append(block);
		block.style.cssText= `height: ${this.height};
			width: ${this.width};
			background-color: ${this.bg};      						
			font-size: ${this.fontSize};
			border: 1px solid #000;
			  `;
			  
		block.innerHTML = this.text;
		
	} else if(this.selector.value[0] === '#') {
		let paragraph = document.createElement('p');
		let paragraphId = this.selector.value.slice(1);
		paragraph.setAttribute('id', paragraphId);
		createdElementsSectiontn.append(paragraph);
		paragraph.style.cssText= `height: ${this.height};
			width: ${this.width};
			background-color: ${this.bg};      						
			font-size: ${this.fontSize};
			border: 1px solid #000;
			  `;
			  
			  paragraph.innerHTML = this.text;
		
	} else {
		alert('Вводите название элемента корректно');
		
	}

};

DomElement.prototype.eventListeners = function() {
	btn.addEventListener('click', this.showElement.bind(this));
};

let magic = new DomElement('200px', '400px', 'tomato', '30px', 'добрый вечер, блин!' );
magic.eventListeners();
