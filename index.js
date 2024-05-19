let roll = document.getElementById('Roll');
roll.addEventListener('click',function(){
    let A=document.querySelector('#A')
    A.textContent=Math.floor(Math.random()*6)+1;
    let a=A.textContent;
    let B=document.querySelector('#B')
    B.textContent=Math.floor(Math.random()*6)+1;
    let b=B.textContent

    let C=document.querySelector('#C')
    C.textContent=Math.floor(Math.random()*6)+1;
    let c=C.textContent


    if(a>b && b>c){
        A.style.backgroundColor = 'green';       
        B.style.backgroundColor = 'yellow';
        C.style.backgroundColor = 'red';
    }
    else if(a>c  &&  c>b ){
        A.style.backgroundColor = 'green';       
        C.style.backgroundColor = 'yellow';
        B.style.backgroundColor = 'red';        
    }
    else if(b>a && a>c ){
        B.style.backgroundColor = 'green';       
        A.style.backgroundColor = 'yellow';
        C.style.backgroundColor = 'red';
    }
    else if(b>c && c>a ){
        B.style.backgroundColor = 'green';       
        C.style.backgroundColor = 'yellow';
        A.style.backgroundColor = 'red';
    }
    else if(c>a && a>b ){
        C.style.backgroundColor = 'green';       
        A.style.backgroundColor = 'yellow';
        B.style.backgroundColor = 'red';
    }
    else if(c>b && b>a ){
        C.style.backgroundColor = 'green';       
        B.style.backgroundColor = 'yellow';
        A.style.backgroundColor = 'red';
    }
    else if(a==b && a>c && b>c){
        A.style.backgroundColor = 'blue';
        B.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'red';
    }
    else if(a==c && c>b && a>b){
        A.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'blue';
        B.style.backgroundColor = 'red';
    }
    else if(b==c && b>a && c>a){
        B.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'blue';
        A.style.backgroundColor = 'red';
        }


    else if(a==b && a<c && b<c){
        A.style.backgroundColor = 'blue';
        B.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'green';
    }
    else if(a==c && c<b && a<b){
        A.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'blue';
        B.style.backgroundColor = 'green';
    }
    else if(b==c && b<a && c<a){
        B.style.backgroundColor = 'blue';
        C.style.backgroundColor = 'blue';
        A.style.backgroundColor = 'green';
        }
   })

let reset = document.querySelector('#res');
res.addEventListener('click',function(){
    let A=document.querySelector('#A')
    A.textContent='A'
    A.style.backgroundColor='white'
    let B=document.querySelector('#B')
    B.textContent='B'
    B.style.backgroundColor='white'

    let C=document.querySelector('#C')
    C.textContent='C'
    C.style.backgroundColor='white'
})
