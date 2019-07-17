var element = document.createElement('div')

element.innerHTML = 'Hello, DOM'

document.body.appendChild(element)
element.style.textAlign = 'left'

var element2 = document.createElement('div')
element2.innerHTML = "This is another element I am trying to add"

element2.remove()


// you can also do removeChild(element.querySelector('div')) --> if you have a child to remove within a parent element
