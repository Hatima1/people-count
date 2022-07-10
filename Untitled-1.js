let s=document.getElementById("save2" )
let x= document.getElementById("con")
console.log(x)

let f=0
function one(){
 f=f+1
 x.innerText=f

}
function save(){
let counter=f+"--"
s.innerText+=counter
x.innerText=0
f=0


}

    

