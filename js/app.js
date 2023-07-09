let nav=document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.scrollY == 0){
       nav.style.boxShadow= "";
    }else{
        nav.style.boxShadow="0 10px 6px -6px #777";
    }
})

let dropdownToggle = document.querySelector("a.dropdown-toggle");
console.log(dropdownToggle);
dropdownToggle.addEventListener("click", dropDown);

function dropDown(e){
    let dropdownMenuC = document.querySelector("ul.dropdown-menu-c");
    dropdownMenuC.style.display = "block";
};

let dropdownItem = document.querySelector("a.dropdown-item");
console.log(dropdownItem);
dropdownItem.addEventListener("click", cancelDropDown);

let main = document.querySelector("main");
main.addEventListener("click", cancelDropDown);
function cancelDropDown(){
    let dropdownMenuC = document.querySelector("ul.dropdown-menu-c");
    if(dropdownMenuC.style.display == "block"){
        dropdownMenuC.style.display = "none";
    }
};