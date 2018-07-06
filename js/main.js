window.onload = () => {
  //item login
  const btnLogin = document.getElementById('btnLoginIn').addEventListener('click', () => {
    //input email
    const email = document.getElementById('inputEmail').value;
    //guardar localmente el email
    window.localStorage.setItem('emailpo', email);
    //input pass
    const pass = document.getElementById('inputPass').value;
    //condiciones para pasar el login, mejorar la de email
    if (pass.length <= 8 || email === 'hola@ble.cl') {
      document.getElementById('navbar').style.display = 'block';
      document.getElementById('home').style.display = 'block';
      document.getElementById('login').style.display = 'none';

    } else {
    document.getElementById('passError').innerHTML = 'Datos inválidos, intenta nuevamente.';
    }
  }) 
  //navbar 

}
