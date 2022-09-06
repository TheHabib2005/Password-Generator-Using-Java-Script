let numbervalue = document.querySelector("#pass-length-input");
const slider = document.querySelector("#pass-range-input")


slider.addEventListener("input",() =>{
    numbervalue.value = slider.value
    getpassword()
})

numbervalue.addEventListener("input", () =>{
    getpassword()
})

const upperset = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const lowerset = "acdefghijklmnopqrstuvwxyz";
const numbres = "0123456789";
const upper_chack_box = document.querySelector("#uppercase-checkbox");
const lower_chack_box = document.querySelector("#lowercase-checkbox");
const number_chack_box = document.querySelector("#number-checkbox");
const symbols_chack_box = document.querySelector("#symbols-checkbox");


const stmbols = "!#$%^*(_+)"
function random(data){
    return data[Math.floor(Math.random() * data.length)]
}


 function getpassword(password = ''){

    if(upper_chack_box.checked){
        password = password +  random(upperset)
    }

    if(lower_chack_box.checked){
        password = password +  random(lowerset)

    }
    if(number_chack_box.checked){
        password = password +  random(numbres)

    }
    
    if(symbols_chack_box.checked){
        password = password +  random(stmbols)

    }
    

    
    console.log(password)
    if(password.length < numbervalue.value){
        return getpassword(password)
    }

    document.querySelector(".result").value = password
 }

 getpassword()

 var cp_text = document.querySelector(".result");

 function copy_password(){
 
   if(cp_text.value === ''){
    document.querySelector(".copy-text").textContent = ""  ;
   }
   else{
    cp_text.select();
    document.execCommand("copy")
  document.querySelector(".copy-text").textContent = "Copy"  ;
  document.querySelector(".copy-text").style.color = 'red'
 window.getSelection().removeAllRanges();
   }
 }

 
 cp_text.addEventListener("keyup", () =>{
    if(cp_text.value === ''){
        document.querySelector(".copy-text").textContent = ""  ;
    }
 })


 function truncatestring(str, num){
    if(str.length > num){
        let substr = str.substring(0, num);
        return substr;

    }
    else{
        return str
    }
 }