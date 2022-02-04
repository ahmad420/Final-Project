const userName = document.getElementById("userName")
const userpass = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    const name = userName.value 
    const userPass = userpass.value 

        localStorage.setItem("name",name)
        localStorage.setItem("password",userPass)
        location.reload()
        if(localStorage.name && localStorage.password ){
       window.location.href="../pages/profile.html";
        }else{
            window.alert("one feild or more is empty ,plaese try again ")
        }
    }) 


    

    const userName2 = document.getElementById("userName2")
    const email = document.getElementById("email2")
    const userpass2 = document.getElementById("password2")
    const checkBox = document.getElementById("checkbox")
    const submitBtn2 = document.getElementById("submitBtn2")

    submitBtn2.addEventListener("click", (e) =>{
        e.preventDefault()
        const name = userName2.value 
        const userPass = userpass2.value 
        const email2 = email.value 
        const checkbox = checkBox.value 

            localStorage.setItem("name",name)
            localStorage.setItem("email",email2)
            localStorage.setItem("password",userPass)
            localStorage.setItem("checkbox",checkbox)
            location.reload()
            if(localStorage.name && localStorage.password && localStorage.email&& localStorage.checkbox){
           window.location.href="../pages/profile.html";
            }else{
                window.alert("one feild or more is empty ,plaese try again ")
            }
        }) 
    