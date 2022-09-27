// function returnobj(n,p,t){
//     let obj={
//      name:n,
//      price:p,
//      type:t
//     }
//     console.log(obj)
// }
// returnobj("shoe",2000,"dailywear")

function nikeproduct(n,p){
    this.name=n,
    this.price=p
}

document.querySelector("form").addEventListener("submit",myfun)
let pData=JSON.parse(localStorage.getItem("prodLS")) || [] ;

function myfun(event){
    event.preventDefault()
    let name=document.querySelector("#name").value;
    let price=document.querySelector("#price").value;
if(name==="" || price===""){
    alert("Fill All detail")
}
    let ans=new nikeproduct(name,price)
    pData.push(ans)
    localStorage.setItem("prodLS",JSON.stringify(pData))
   
}

