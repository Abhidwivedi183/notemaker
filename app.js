const cont = document.querySelector('.container');
const notc = document.querySelector('.notescontainer');

const btn = document.querySelector('#btn')

btn.addEventListener('click',function(e){
  //run my function called creation

  addmore();
})

function addmore(){
  let hole = document.createElement('p');
  hole.id = 'inptext'
  hole.setAttribute("contenteditable","true");
  
  let nl = document.createElement('img');
  nl.setAttribute("src","https://cdn-icons-png.flaticon.com/128/10336/10336279.png");
  hole.appendChild(nl);
  notc.appendChild(hole);
  updatestorage();
}
//deletion code

notc.addEventListener('click',function(e){
if(e.target.tagName === 'IMG'){
  let x= e.target.parentNode;
  x.remove();
  updatestorage();
}
else if(e.target.tagName === 'p'){
notes = document.querySelectorAll("#inptext");
notes.forEach(el => {
  el.onKeyup = function(){
    updatestorage();
  }
});
}
})

function showitem(){
  notc.innerHTML = localStorage.getItem("notes");
}

showitem();
function updatestorage(){
  localStorage.setItem("notes",notc.innerHTML);
}


