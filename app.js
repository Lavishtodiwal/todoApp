let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";//blank rakhne ke liye
});

inp.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        let item = document.createElement("li");
        item.innerText = inp.value;


        let delBtn = document.createElement("button");
        delBtn.innerText = "delete";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";//blank rakhne ke liye
    }
});
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }
});





//this will only work on the existing elements not
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
