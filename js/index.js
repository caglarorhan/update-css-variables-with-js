window.addEventListener('load',function(){totalLoad()});


function totalLoad(){
    const controls = document.querySelectorAll('.controls input');

    controls.forEach(input => input.addEventListener('change',function(){

        console.log('sysnc done:'+ input.value);
        let sizing = input.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`,`${input.value}${sizing}`);


    }));


}
