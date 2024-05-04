const btn = document.querySelector('button');
const inp = document.querySelector('input');
const ul = document.querySelector('ul');

btn.addEventListener('click', addTodo);

document.body.addEventListener('keydown', (e)=>{
    if(e.code == "Enter"){
        addTodo();
    }
})

function addTodo(){
        const inpVal = inp.value;
        if(!inpVal) return;
    
        const li = document.createElement('li');
        li.innerText = inpVal;
    
        const btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.classList.add('delete');
    
        li.appendChild(btn);
    
        ul.append(li);
        inp.value = '';
}


const delBtns = document.querySelectorAll('.delete')

ul.addEventListener('click', (e)=>{
    if(e.target.nodeName == "BUTTON"){
        e.target.parentElement.remove();
    }
});