// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.images);
// console.log(document.links);

//getElementById
// var headeTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// var headeTitle1=document.getElementById('header-title1');
// //console.log(headeTitle);
// //headeTitle.textContent='hello';
// //headeTitle.innerText='hello';
// //headeTitle.innerHTML='<h3>hello</h3>';
// header.style.borderBottom='solid 2px #000';
// headeTitle1.style.color='green';
// headeTitle1.style.fontWeight='bold';

//getElementByClass

//  var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello';
// items[1].style.fontWeight='bold';
// items[2].style.backgroundColor='green';

// //gives error
// //items.style.fontWeight-'bold';

// for (var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//getElementByTagName
// var li=document.getElementsByTagName('li');
// console.log(li);
// for (var i=0;i<li.length;i++){
//      li[i].style.backgroundColor='yellow';
//  }


 //queryselector

//  var header=document.querySelector('#main-header');
//  header.style.borderBottom="solid 4px #000";

//  var input=document.querySelector('input');
//  input.value='hello world';

//  var submit=document.querySelector('input[type="submit"');
//  submit.value='send';

// var item=document.querySelector('.list-group-item');
 //item.style.color='red'; 
//  var lastItem=document.querySelector('.list-group-item : last-child');
//  lastItem.style.color='yellow';

 //queryselectorall

 //var titles=document.querySelectorAll('.title');
//  console.log(titles);
//  titles[0].textContent='hello';

//  var odd=document.querySelectorAll('.li:nth-child(odd)');
//  var evev=document.querySelectorAll('.li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
// }
// for(var i=0;i<even.length;i++){
//     even[i].style.backgroundColor='#ccc';
// }
// var items=document.querySelectorAll('.list-group-item');
// items[1].style.backgroundColor='green';

// items[2].style.display='none';

//TRAVERSE THE DOM

var itemList=document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
console.log(itemList.childNodes);

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello 1';

//lastChild
console.log(itemList.lastChild);

//lastChildElement
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previuosElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';

//create div
var newDiv=document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title','hello world!');

//create textNode
var newDivText=document.createTextNode('HELLO WORLD!');

//add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

var newItem=document.createElement('li');
var newItemText=document.createTextNode('hello world');
newItem.appendChild(newItemText);
// console.log(newItem);

var list=document.getElementById('items');
// var list=document.querySelector('.list-group-item');
list.insertBefore(newItem,list.children[0]);


