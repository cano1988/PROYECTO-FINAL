
function login(){
  var email, pass;

  email = document.getElementById("email").value;
  pass = document.getElementById("password").value;

  if(email == "userti@cesde.com" && pass == "cesde123" || email == "adminti@cesde.com" && pass == "admin123"){
   
      window.location= "carga_indicadores_TI.html";  
  }

   else{
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'email or user incorrect',      
    });

   }
}

function login2(){
  var email, pass;

  email = document.getElementById("email").value;
  pass = document.getElementById("password").value;

  if(email == "cliente@cesde.com" && pass == "123" ){
  
      window.location= "cliente.html";  
  }

   else{
    swal({
      icon: 'error',
      title: 'Oops...',
      text: 'email or user incorrect',      
    });

   }
}