// ================ async vs defer ================
// async => js loads synchronously with html(by the Browser) parsing but after js is loaded it 
// stops html parsing & starts executing html.

// gives js representation of 'document' object
// console.dir(document);

// (1) i. document.querySelectorAll() => returns a 'NodeList'
// ii. document.getElementByClassName()/TagName() => returns 'HTMLCollection'(array like object)
// => we can't use forEach loop to iterate 'HTMLCollection'(for & for of can be used)
// => Array.from(HTMLCollection/NodeList) => changes HTMLCollection to array

// (2) document.textContent => displays hidden text as well(display: none)
// => document.innerText => doesn't display hidden text.
// (3) mainHeading.style.backgroundColor = "blue"

// => getAttribute()/setAttribute() => returns/sets the attribute (href="", type="" etc.) of a tag.
//  getAttribute("type"), getAttribute("href")

// 
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(`this is ${rootNode}`);
// console.log(`this is ${htmlElementNode}`);

const head = htmlElementNode.childNodes[0];
const textNode = htmlElementNode.childNodes[1];
const body = htmlElementNode.childNodes[2];
console.log(head);
console.log(textNode);
console.log(body);

// 
// const h1 = document.querySelector("h1");
// console.log(h1.parentNode);

// NodeList(5) [ #text, h1.heading, #text, p.paragraph, #text ]
const container = document.querySelector(".container");
console.log(container.childNodes);
// 
console.log(container.children);

// ======== oct 27 ==========
const h1 = document.querySelector('.container');
// DOMTokenList(3) [ "container", "d-flex", "box" ]
// console.log(h1.classList);

// To add/remove classes => classList.add(' ')/remove(' ')/toggle(' ')
h1.classList.add('new-box');
// console.log(h1.classList);

// document.createElement() => creates a new element
const newItem = document.createElement('h2');
console.log(newItem);

// i. append() => appends at end   ii. prepend() => appends at starting
const div = document.querySelector('.container');
div.append('This is append');
div.prepend('This is prepend');

// i. querySelectorAll() => gives static list(NodeList)
// ii. getElementBytagName/className/id => gives live list(HTMLCollection)

// =========== Events ==============
// (1) in case of 'function declaration' value of 'this' keyword will be the selected 
// html element(on which event is applied) & in case of 'arrow functions' it will be the 
// window object(one level above). 