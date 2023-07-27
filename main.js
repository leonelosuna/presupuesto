let btn = document.querySelector("#addbtn")
let ul = document.querySelector("#ulList")
let ul2 = document.querySelector("#ulList2")

let resultado = document.querySelector("#resultado")

let ingresos = 0
let egresos = 0
let total = 0


btn.addEventListener("click", function(){
    let task = document.querySelector("#inputinfo").value
    let money = document.querySelector("#money").value
    money = parseInt(money)
    
    if (task.trim() !== "") {
        let div = document.createElement("div")
        div.className = "solodataingreso"
        let li = document.createElement("li")
        let limoney = document.createElement("li")
        limoney.id = "precio"

        li.textContent = task
        limoney.textContent = money

        ul.appendChild(div)
        div.appendChild(li)
        div.appendChild(limoney)

        div.appendChild(addDeleteBtn()) // <li>  texto  <button> </li>
        div.appendChild(li)
        div.appendChild(limoney)

        ingresos += money
        console.log("Este es el ingreso: ", ingresos)

        total = ingresos - egresos
        console.log( "este es el total: ", total)
        resultado.innerHTML = "Total: Q"+total

    }
    else{
        alert("Error!");
    }
})
document.querySelector("#addbtn2").addEventListener("click", function(){
    let task = document.querySelector("#inputinfo2").value
    let money2 = document.querySelector("#money2").value
    money2 = parseInt(money2)
    
    if (task.trim() !== "") {
        let div2 = document.createElement("div")
        div2.className = "solodataingreso"
        let li = document.createElement("li")
        let limoney2 = document.createElement("li")
        limoney2.id = "precio"

        li.textContent = task
        limoney2.textContent = money2

        ul2.appendChild(div2)
        div2.appendChild(li)
        div2.appendChild(limoney2)

        div2.appendChild(addDeleteBtn2()) // <li>  texto  <button> </li>
        div2.appendChild(li)
        div2.appendChild(limoney2)

        egresos += money2
        console.log("Este es el egreso: ", egresos)

        total = ingresos - egresos
        console.log( "este es el total: ", total)
        resultado.innerHTML = "Total: Q"+total
    }
    else{
        alert("Error!");
    }
})



function addDeleteBtn(){
    let precio = document.querySelector("#precio").innerHTML
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul.removeChild(item)

        // total = total - precio
        // console.log( "este es el total: ", total)
        // resultado.innerHTML = "Total: Q"+total
    })
    return deleteBtn
}

function addDeleteBtn2(){
    let precio = document.querySelector("#precio").innerHTML
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul2.removeChild(item)

        // total = total + precio
        // console.log( "este es el total: ", total)
        // resultado.innerHTML = "Total: Q"+total
    })
    return deleteBtn
}
