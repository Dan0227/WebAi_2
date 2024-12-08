const messageError = document.getElementsByClassName("error")[0];

document.getElementById('register-form').addEventListener("submit", async(e) => {
    e.preventDefault();

    const user = document.getElementById('InputUser').value;
    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;
    const phone = document.getElementById('InputTel').value;

    const res = await fetch("http://localhost:4000/api/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            user: user,
            email: email,
            password: password,
            phone: phone,
        })
    });
    if(!res.ok) return messageError.classList.toggle("escondido", false);

    const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
});