let elList = document.querySelector(".list")
let mode = false
function handleOpen(){
    mode = !mode
    if(mode == true){
        elList.classList.add("active")
    } else {
        elList.classList.remove("active")
    }
}
