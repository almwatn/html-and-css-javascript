let burg = document.getElementById('burger');

let sideLeft = document.getElementById('sideleft');

let sideRight = document.getElementById('sideright');


let hid = document.getElementById('hidden');

let vi = document.querySelectorAll('.content-main video');




for(i=0; i < vi.length;i++){
    vi[i].onmouseover = control;

    vi[i].onmouseout = removecontrol;

    function removecontrol(){
        this.removeAttribute('controls','')
    }
    

    function control(){
        this.setAttribute('controls','')
        
    }
    
}



function burgActive(){
    burg.classList.toggle('active');
    sideLeft.classList.toggle('activeLeft')
    sideRight.classList.toggle('open');

    checker();
};


burg.onclick = burgActive;

function remove(){
    burg.classList.remove('active');
    sideLeft.classList.remove('activeLeft')
    sideRight.classList.remove('open')
    checker();
}



checker();

function checker(){
    if(burg.classList.contains('active')){
       sideLeft.onclick = remove;
      

    }else{
        return false;
    }
};
