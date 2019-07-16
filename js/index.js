//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

var element = document.createElement('div'); // create element
element.innerHTML = 'Hello, DOM!';  // set properties
element.style.backgroudColor = '#f9f9f9';

document.body.appendChild(element); // referene element 
element.style.textAlign = 'center'; // add style to that element

var ul = document.createElement('ul');
for (let i = 0; i < 3; i++){
    let li = document.createElement('li');
    li.innerHTML = (i+1).toString();
    ul.appendChild(li);
}
element.appendChild(ul);
ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)')); // delete 2nd li element
ul.remove(); // remove all