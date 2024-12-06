const messageError = document.getElementsByClassName("error")[0];

document.getElementById('login-form').addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;

    const res = await fetch("http://localhost:4000/api/login",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,password
        })
    });
    if(!res.ok) return messageError.classList.toggle("escondido", false);

    const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
});