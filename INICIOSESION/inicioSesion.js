document.addEventListener('DOMContentLoaded', () => {
    let Usuarios = [
        { email: "laura@gmail.com", password: "111" },
        { email: "juan@gmail.com", password: "222" }
    ];

    const Form = document.getElementById('loginForm');

    Form.addEventListener("submit", e => {
        e.preventDefault(); //evitar que se sobrecargue la pagina

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userExists = Usuarios.find(user => user.email === email);
        if (userExists && userExists.password === password) {
            alert("cuenta encontrada");
            window.location.href = '/COMPRA/w1.html'//para que el boton me diriga al vinculo deseado si se cumple la funcion

} else {
    alert("cuenta no encontrada vuelve a intertarlo de nuevo");
}
    });
});
