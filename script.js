

let count = 0

let item = "item"

let row = 0
let arr = []

let add = ''

const  clear1 = ()=>{
  localStorage.clear()
  let t = document.getElementsByClassName("trs")
  let x = Array.from(t)
  x.forEach((e)=>{
    e.remove()
  })
   let Table = document.getElementsByClassName("table")[0].hidden = true
  // let f1 = document.getElementsByClassName("finish")[0].hidden = true
  
  
  
}
let clr = document.getElementById("clr")
clr.addEventListener('click',clear1)














//Created a function that will removed the item to the table
function deleteRow(r){
  row = row-1
  let i = r.parentNode.parentNode.rowIndex;
   let t = document.getElementsByClassName("table")[0].deleteRow(i)
  console.log(t)
  console.log(i)
  let r1 = document.getElementsByClassName("rows")
  r1 = Array.from(r1)
  arr.pop()
  r1.forEach((e,index)=>{
    e.innerHTML = `${arr[index]}`
    if(i == 0){
       let Table = document.getElementsByClassName("table")[0].hidden = true
    }
    
  
  })
  // r1.innerHTML = `${row}`
  
  let id1 = r.id;
  
  let a = localStorage.removeItem(`${id1}`)
  console.log(`${id1}`)
  
  
}


















//Created a function that will add the item to the table
const x = ()=>{
  let todo = document.getElementById("todo").value;
  let demo = document.getElementById("demo")
  let body = document.getElementById("body")
  
  
  row = row +1
  
  arr.push(row)
  localStorage.setItem(`${row}`,todo)
   
  body.insertAdjacentHTML('beforeend',` <tr class="trs">
      <th scope="row" class= "rows">${row}</th>
      
      <td >${todo}</td>
      <td><button type="button" class="btn btn-danger " id = '${row}' onclick = "deleteRow(this)">Delete</button></td>
    </tr>
   `)
  let r1 = document.getElementsByClassName("rows")
  r1 = Array.from(r1)
  r1.forEach((e,index)=>{
    e.innerHTML = `${arr[index]}`
  
  
  })
  // console.log("arr ",arr)
  
  
  // demo.insertAdjacentHTML('afterend',`<div class='l1' >${todo}</div>`)
  console.log("Hello")
  let t = document.getElementsByClassName("table")[0].hidden = false
  // t.SetAttribute("hidden","false")
  // let f1 = document.getElementsByClassName("finish")[0].hidden = false
}


let submit = document.getElementById("submit")

submit.addEventListener('click',x)
  



// let delete_item = ()=>{

//   return this.
// }
// let d = document.getElementsByClassName("btnDelete")

// d.addEventListener('click',delete_item)

// let r1 = document.getElementsByClassName("r")
//   r1 = Array.from(r1)
//   r1.forEach((e,index)=>{
//     // e.innerHTML = `${arr[index]}`
  
//   console.log(e,index)
//   })
