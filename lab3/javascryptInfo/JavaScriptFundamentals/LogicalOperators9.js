let a = prompt("Who's there?", "")
if(a=="Cancel"){
    alert("Canceled")
}else if(a == "Admin"){
    let pass = prompt("Password?", "")
    if(pass == "Cancel") {
        alert("Canceled")
    }else if(pass == "TheMaster") {
        alert("Welcome!")
    }else{
        alert("Wrong password")
    }
}else{
    alert("I don't know you")
}