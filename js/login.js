$("#submit_form").on('click', function() {
  email = $("#email").val();
  password = $("#password").val();
  
  console.log(email + " " + password);
  
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
    //user signed
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });


});

$("#signup").onlick("click", function() {
  email = $("#email").val();
  password = $("#password").val();
  
  console.log(email + " " + password);
  
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    //created user successfully 
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
  });
  
})