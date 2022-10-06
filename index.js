let lengthslider=document.querySelector(".pass_length input")
let genpass=document.querySelector(".genpass")
let option=document.querySelectorAll(".option input")
let inputbox=document.querySelector('.input_box input');
let passindicator=document.querySelector('.pass_indicator');
let copyicon=document.getElementById('copyicon')


const characters={
    Lowercase:"abcdefghijklmnopqrstuvwxyz",
    Uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Numbers:"0123456789",
    Symbols:"!@#$%^&*(){}[]><,.|:;"
}

let generatepass=()=>{
    let staticpass="",
    randompass="",
    passlength=lengthslider.value;
    option.forEach(option=>{
        if(option.checked){
            
            staticpass+=characters[option.id]
            
        }
    })
    for(let i=0;i<passlength;i++){
        randompass+=staticpass[Math.floor(Math.random()*staticpass.length)]
    }
 
    inputbox.value=randompass;
}

let updatepassindicator=()=>{
    passindicator.id=lengthslider.value<13? "week":lengthslider.value<=16? "medimu" :"strong"
    

}
let updatelength=()=>{
    document.querySelector('.details span').innerHTML=lengthslider.value
    console.log(lengthslider.value)
    updatepassindicator()
}
let copyelement=()=>{
    navigator.clipboard.writeText(inputbox.value);
copyicon.innerText="check"
setTimeout(() => {
    copyicon.innerText="copy_all"
}, 1500);
}


copyicon.addEventListener('click',copyelement)
lengthslider.addEventListener('input',updatelength)
genpass.addEventListener('click',generatepass)