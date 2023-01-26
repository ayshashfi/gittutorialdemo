console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.images);
console.log(document.links);

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

 var items=document.getElementsByClassName('list-group-item');
console.log(items);
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
var li=document.getElementsByTagName('li');
console.log(li);
for (var i=0;i<li.length;i++){
     li[i].style.backgroundColor='yellow';
 }
