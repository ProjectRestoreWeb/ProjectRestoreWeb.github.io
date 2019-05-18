$("#submit_form").on('click', function() {
  email = $("#email").val();
  password = $("#password").val();
  
  console.log(email + " " + password);
  
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });


});