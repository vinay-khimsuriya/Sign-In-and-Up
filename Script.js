let btnsignup = document.getElementById('btnsignup');
let btnsignin = document.getElementById('btnsignin');
let usrname = document.getElementById('usrname');
let title = document.getElementById('title');
let underline = document.getElementById('underline');

    
    btnsignin.addEventListener('click',()=>{
        // console.log('Button clicked!');    
        usrname.style.maxHeight = '0';
        title.innerHTML = "Sign In";
        btnsignup.classList.add('disable');
        btnsignin.classList.remove('disable');
        underline.style.transform = 'translateX(150%)'
    });

    btnsignup.addEventListener('click',()=>{
        console.log('Button clicked!');    
        usrname.style.maxHeight = '60px';
        title.innerText = 'Sign up';
        btnsignup.classList.remove('disable');
        btnsignin.classList.add('disable');
        underline.style.transform = 'translateX(0)'
    });



