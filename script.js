var div = document.querySelector(".form")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var submit = document.querySelector(".submit")
var tab = document.querySelector(".a")
var s = document.querySelector(".s")
var o=document.querySelector(".o")


submit.addEventListener("click", function (event) {
    event.preventDefault()
    var tr = document.createElement("tr")
    tr.setAttribute=("id","forValidation")
    tr.innerHTML = `<td>${one.value}</td>
    <td>${two.value}</td>
    <td>${three.value}</td>
    <button onclick="dlt(event)">Del</button>`


    if (one.value.trim() === "" || two.value.trim() == "" || three.value.trim() === "") {
        alert("No blank values allowed")
        tr.remove()
        }
    
    
    else {
        valid()
        valid1()
        tab.append(tr) 
        one.value = ""
        two.value = ""
        three.value = ""
    }
})

function cancel(event) {
    event.preventDefault()
    one.value = ""
    two.value = ""
    three.value = ""
    s.style.display = "none"
    o.style.display = "none"
}

function valid() {
    
    if (two.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        s.style.display = "none"}
    
    else {
        s.style.display = "block"
        tr.remove()
    }
}



function valid1() {
    if(three.value.length==10)
    {
        o.style.display = "none"   
    }
    else{
        o.style.display = "block"
        tr.remove()
    }
}

function dlt(event){
    event.target.parentElement.remove()
}



 