
let totall: string | number = 200
totall = '688'

function isNumber(value: string | number){
    if(typeof value === "number"){
        return true
    }else{
        return false
    }
}

console.log(isNumber("900"))

const button = document.querySelector('button')

button?.click()





