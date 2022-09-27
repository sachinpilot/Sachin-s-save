

let productData=JSON.parse(localStorage.getItem("Products")) || [] ;
let grip=document.querySelector("#main")
let totalproduct=document.querySelector("#total")

let cartData=JSON.parse(localStorage.getItem("Mycart")) || []

displayTable(productData)
function displayTable(data){
    grip.innerHTML=null
    let total=0;
    totalproduct.innerText=0;
    data.forEach(function(el,index){
        total+=Number(el.price)
    let box=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image;
    let name=document.createElement("h3")
    name.textContent=el.name;
    let price=document.createElement("p")
    price.textContent=`₹ ${el.price}`;
    let category=document.createElement("p")
    category.textContent=el.category;
    let gender=document.createElement("p")
    gender.innerText=el.gender;
    let status=document.createElement("p")
    status.txc=el.sold
   let btn1=document.createElement("button")
   btn1.textContent="Sell"
   btn1.id="btn1"
   let btn2=document.createElement("button")
   btn2.textContent="Delete"
   btn2.addEventListener("click",function(){
     deletefun(index)
   })

   let btn3=document.createElement("button")
   btn3.textContent="Add to cart"
   btn3.addEventListener("click",function(){
     cartfun(el)
   })

 box.append(image,name,price,category,gender,status,btn1,btn2,btn3)
   grip.append(box)
   totalproduct.textContent=total
})

}

function deletefun(el,index){
  productData.splice(index,1);
  displayTable(productData)
  
}


function cartfun(el){
  let flag=false;
  for(let i=0;i<=cartData.length-1;i++){
    if(cartData[i].image===el.image){
      flag=true
      alert("product exist")
      break;
    }
  }
  if(flag===false){
    cartData.push(el)
    localStorage.setItem("Mycart",JSON.stringify(cartData))
    alert("add sucess")
  }
}