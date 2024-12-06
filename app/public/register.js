document.getElementById('register-form').addEventListener("submit", async(e) => {
    e.preventDefault();

    const user = document.getElementById('InputUser').value;
    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;
    const phone = document.getElementById('InputTel').value;

    console.log(phone)

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
    })
});