

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




function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  

username=localStorage.getItem("user_name");
roomname=localStorage.getItem("room_name");

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(roomname).push({
    name:username, 
    message:msg,
    like: 0
  });

document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
 childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey; 
   message_data = childData;
   console.log(firebase_message_id);
   console.log(message_data);
   namee=message_data['name'];
   message=message_data['message'];
 like=message_data['like'];
 nt="<h4> "+ namee+"<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
 like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row=nt+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML+=row;
  }
});
});
}
getData();

function updateLike(message_id){
  console.log("Liked" +message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updateLikes=Number(likes) +1;
  console.log(updateLikes);
  firebase.database().ref(roomname).child(message_id).update({
    like: updateLikes
  });
}