const input = document.getElementById("input")
const result =document.getElementById("result")
function reverseString(str){
    return  str.split("").reverse().join("")
}

function check() {
    const value =input.value
    const revers = reverseString(value)
    
    if(value.tolowerCase() === reverse.tolowerCase()){
        result.textContent =`"${value}"is a palindrome`;
        result.style.color="green";
    }else{
        result.textContent =`"${value}"is not a palindrome`;
        result.style.color ="red";
    }
    
    

}