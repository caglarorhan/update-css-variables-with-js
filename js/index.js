window.addEventListener('load',function(){totalLoad();});


function totalLoad(){
    const controls = document.querySelectorAll('.controls input');
    controls.forEach(input => input.addEventListener('mousedown',sync,true));
    controls.forEach(input => input.addEventListener('mouseup',unsync,true));
}


function sync(event){
    let input = event.target;
    console.log(`Syncing... Last value is ${input.value}`);
    input.addEventListener('mousemove',detector,true) ;
}


function detector(event){
    let input = event.target;
    console.log('sysnc done:'+ input.value);
    let sizing = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${input.value}${sizing}`);

}



function unsync(event){
    let input = event.target;
    console.log(`Unsyncing... Last value is ${input.value}`);
        input.removeEventListener('mousemove',detector,true);

}
