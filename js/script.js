// alert("Hello, Laravel I'm Vaibhav");
// console.log(10+20);
// console.error("this is Wrong?");
// console.warn("I Think this is Right");
// console.debug("This is a debug message");

// let user = { name: 'John', role: 'Admin' };
// console.debug('User data:', user);

// const users = [
//   { id: 1, name: 'Alice', email: 'a@test.com' },
//   { id: 2, name: 'Bob', email: 'b@test.com' }
// ];
// console.table(users);



document.getElementById("sign_up").addEventListener("click", function () {
     document.getElementById("sign_up-block").style.display="block";
     document.getElementById("sign_in-block").style.display="none";
  });

  document.getElementById("sign_in1").addEventListener("click", function () {
     document.getElementById("sign_up-block").style.display="none";
     document.getElementById("sign_in-block").style.display="block";
  });


function signup(){
   let a = document.getElementById('conf_pass').value;
   let b = document.getElementById('pass').value;
   let c = document.getElementById('mail').value;
   let d = document.getElementById('user').value;
   if (a != "" && b != "" && c != "" && d != ""){
      if (a == b){
         alert("Sign Up Succesfully...!")
      }
      else if(a != b){
         alert("Confirm Password Not Matched...!")
      }
      else{
         alert("Please Enter Passwords...!")
      }
   }
   else{
      alert("please Enter All Fields...")
   }
}

function signin(){
   let a = document.getElementById('user1').value;
   let b = document.getElementById('pass1').value;
   let c = document.getElementById('mail1').value;
   if (a != "" && b != "" && c != ""){
      alert("Thanks for SIGN IN, We need to check Username and passwords are matches in our records or not, Sorry for inconvinience...!")
   }
   else{
      alert("please Enter All Fields...")
   }
}