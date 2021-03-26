var firebaseConfig = {
  apiKey: "AIzaSyAqu2DLOnUh1C_T5siz2JktKcy5GZlrrKg",
  authDomain: "anna12-3eea0.firebaseapp.com",
  databaseURL: "https://anna12-3eea0-default-rtdb.firebaseio.com",
  projectId: "anna12-3eea0",
  storageBucket: "anna12-3eea0.appspot.com",
  messagingSenderId: "311919121752",
  appId: "1:311919121752:web:4b0745d4a468fe1d0e012d"
};

firebase.initializeApp(firebaseConfig);



 user_name = localStorage.getItem("user_name");

document.getElementById("use").innerHTML ="Welcome "+ user_name +"!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      
  
      Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
