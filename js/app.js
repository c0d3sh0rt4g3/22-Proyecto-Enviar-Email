const affairTextBox = document.querySelector("#asunto")
const emailTextBox = document.querySelector("#email")
const msgTextBox = document.querySelector("#mensaje")
const submitButton = document.querySelector(".bg-pink-600")
const resetButton = document.querySelector(".bg-gray-800")

const emailObj ={
    email: "",
    asunto: "",
    mensaje: ""
}
const validate = (e) =>{
    if (e.target.id === "email"){
        if (!validateEmail(e.target.value)){
            emailObj[e.target.id] = ""
            showError(`The email introduced it's not valid`, e.target.parentElement)
        }else {
            cleanseAlert(e.target.parentElement)
            emailObj[e.target.id] = e.target.value
        }
    }else if (e.target.value.trim() === ""){
        showError(`The field ${e.target.id} is mandatory`, e.target.parentElement)
        emailObj[e.target.id] = ""
    }else {
        cleanseAlert(e.target.parentElement)
        emailObj[e.target.id] = e.target.value
    }
    enableSubmitButton()
}
const reset = () =>{
    emailObj.email = ""
    emailObj.asunto = ""
    emailObj.mensaje = ""

    emailTextBox.value = ""
    affairTextBox.value = ""
    msgTextBox.value = ""
}
emailTextBox.addEventListener("blur", validate)
affairTextBox.addEventListener("blur", validate)
msgTextBox.addEventListener("blur", validate)
resetButton.addEventListener("click", reset)
const validateEmail = (emailToValidate) =>{
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    if (emailToValidate.match(emailRegex)){
        console.log(emailToValidate)
        return true
    }else {
        return false
    }
}

const showError = (errorMsg, reference) =>{
    cleanseAlert(reference)
    const error = document.createElement("P")
    error.textContent = errorMsg
    error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
    reference.appendChild(error)
}

const cleanseAlert = (reference) =>{
    const alert = reference.querySelector(".bg-red-600")
    if(alert){
        alert.remove()
    }
}

const enableSubmitButton = (qualifiedName, value) =>{
    if (emailObj.email !== "" && emailObj.asunto !== "" && emailObj.mensaje !== ""){
        submitButton.removeAttribute("disabled")
        submitButton.classList.remove('opacity-50')
    }else {
        submitButton.setAttribute("disabled", value)
        submitButton.classList.add('opacity-50')
    }
}