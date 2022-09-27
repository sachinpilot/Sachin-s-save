// function nikeproduct(n,p,r){
//     this.name=n,
//     this.price=p,
//     this.rating=r

// }
// let ans=new nikeproduct("shirt",500,4)

// console.log(ans)
let data=[]
function studentData(sn,sr,scls){
    this.name=sn,
    this.rollnumber=sr,
    this.class=scls
}
let ans= studentData("Rohit","BS-16",5)
let ans2=new studentData("Mangal","BS-18",6)
let ans3=new studentData("Sikhya","BS-20",4)
data.push(ans,ans2,ans3)
console.log(data);