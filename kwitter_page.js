function Send(){
      var message = document.getElementById("msg").value;
      firebase.database().ref(room).push({
            name: user,
            message: message,
            like:0
      });
      document.getElementById("msg").value = "";
}
var user = localStorage.getItem("user_name");
var room = localStorage.getItem("room_name");
var firebaseConfig = {
      apiKey: "AIzaSyAC25aQnPuY2nRp9s1JQmLhxh9_OTTyPrw",
      authDomain: "kwitter-5892b.firebaseapp.com",
      databaseURL: "https://kwitter-5892b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5892b",
      storageBucket: "kwitter-5892b.appspot.com",
      messagingSenderId: "854933513829",
      appId: "1:854933513829:web:3169d1850551c0be35488c"
    };
            firebase.initializeApp(firebaseConfig);