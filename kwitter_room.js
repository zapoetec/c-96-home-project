var firebaseConfig = {
      apiKey: "AIzaSyAC25aQnPuY2nRp9s1JQmLhxh9_OTTyPrw",
      authDomain: "kwitter-5892b.firebaseapp.com",
      databaseURL: "https://kwitter-5892b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5892b",
      storageBucket: "kwitter-5892b.appspot.com",
      messagingSenderId: "854933513829",
      appId: "1:854933513829:web:3169d1850551c0be35488c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name = " +Room_names);
      row = "<div class = 'room_name' id = "+Room_names+"onclick='redirecttoroomname'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      }
      function logOut()
      {
            localStorage.removeItem("room_name");
            localStorage.removeItem("user_name");
            window.location = "index.html";
      }
