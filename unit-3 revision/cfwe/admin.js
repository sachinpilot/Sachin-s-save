
let form=document.querySelector("#my_form")
form.addEventListener("submit",prodfun)
let pData=JSON.parse(localStorage.getItem("Products")) || [] ;

function productdetail(name,category,image,price,gender,sell){
   this.name=name;
   this.category=category;
   this.image=image;
   this.price=price;
   this.gender=gender
   this.sold=sell

}

function prodfun(event){
    event.preventDefault()

    name=document.querySelector("#name").value;
    category=document.querySelector("#category").value;
    image=document.querySelector("#image").value;
    price=document.querySelector("#price").value;
    gender=document.querySelector("#gender").value;
    sold=false;
    uid=document.querySelector("#uid").value;
    
    if(name=="" || category=="" || image=="" || price=="" || gender==""){
   alert("please fill all detail")
   return
    }
  let product=new productdetail(name,category,image,price,gender,sold)
   pData.push(product)
   localStorage.setItem("Products",JSON.stringify(pData))
   //To clear Input box After submit
form.reset()
   alert("Product Added sucessfully")
  
}
