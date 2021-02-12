let slides= document.querySelectorAll('.slide-single');
let slider= [];
 for (var i = 0; i <slides.length; i++) {
 slider[i]=slides[i].src;
 slides[i].remove()
 }
 console.log(slider);

 let step= 0;
 let offset= 0;

 function draw() {
 	let img = document.createElement('img');
 	img.src=slider[step];
 	img.classList.add('slide-single'); 
 	img.style.left = offset*1900+ 'px';
 	document.querySelector('.header').appendChild(img);
 	step++;
 	if (step+1 == slider.length){
 		step=0
 	} 
 	else {
 		step++;
 	}
 	offset=1;
 }
 function left(){
 	document.onClick = null;
 	let slides2 = document.querySelectorAll('.slide-single');
 	let offset2 = 0;
 	for (let i=0; i<slides2.length; i++){
 		slides2[i].style.left = offset2*1900 + 'px';
 		offset2++
 	}
 setTimeout(function() {
 	slides2[0].remove();
 	drow();
 	document.onClick = left;
 },1000);
 }
 draw();draw();
 document.onClick = left;