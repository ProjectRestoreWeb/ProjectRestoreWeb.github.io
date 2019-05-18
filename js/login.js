$("#submit_form").on('click', function() {
  email = $("#email").val();
  password = $("#password").val();
  
  console.log(email + " " + password);
  
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
    //user signed
    
    uid = firebase.auth().currentUser.uid
    
    localStorage.set("uid", uid)
    
    window.location.href = "home-page.html";

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  });
});

$("#signup").on("click", function() {
  email = $("#email").val();
  password = $("#password").val();
  
  console.log(email + " " + password);
  
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    //created user successfully 
    
    console.log("Created user successfully")
    
    uid = firebase.auth().currentUser.uid

    localStorage.set("uid", uid)
    
    window.location.href = "home-page.html";
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
  });
  
})