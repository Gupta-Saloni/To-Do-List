let input=document.getElementById('data');
let add=document.getElementById('add');
let con=document.getElementById('con');

add.addEventListener('click',function(){
    if(input.value!=""){
    let temp=document.createElement('div');
    let p=document.createElement('p');
    let edit=document.createElement('button');
    let del=document.createElement('button');

    p.innerText=input.value;
    input.value="";
    edit.innerHTML="edit";
    del.innerText="delete";
    del.id="btn";
    temp.appendChild(p);
    temp.appendChild(edit);
    temp.appendChild(del);
    temp.id="temp";
    con.appendChild(temp);
    del.addEventListener('click',function(){
        con.removeChild(this.parentElement);
    });
    edit.addEventListener('click',function(){
       let x=prompt('Enter name');
	  
       p.innerHTML=x;
    });
   }
   else{
      alert("Field is empty");
   }
});