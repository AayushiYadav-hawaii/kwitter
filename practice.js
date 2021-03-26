// Your web app's Firebase configuration
//  var firebaseConfig = {
//   apiKey: "AIzaSyAJ5h54jMlry-QmLfoWJ0mCWnqaMfiSubA",
//   authDomain: "qeteyf-1235f.firebaseapp.com",
//   projectId: "qeteyf-1235f",
//   storageBucket: "qeteyf-1235f.appspot.com",
//   messagingSenderId: "284874594441",
//   appId: "1:284874594441:web:5dc35850440189cb0d0e58"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Your web app's Firebase configuration



/*var firebaseConfig = {
  apiKey: "AIzaSyAWuN50u8EIGbUaXQrP1Xl5-BZlbGxy5zg",
  authDomain: "test-wdvo.firebaseapp.com",
  databaseURL: "https://test-wdvo-default-rtdb.firebaseio.com",
  projectId: "test-wdvo",
  storageBucket: "test-wdvo.appspot.com",
  messagingSenderId: "918882856552",
  appId: "1:918882856552:web:1ed5c554b16605d5d095dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/

// Your web app's Firebase configuration
/*var firebaseConfig = {
  apiKey: "AIzaSyBN8jczRJRCN2bOFQ1C_pi2xw7i3cz5KEQ",
  authDomain: "abcdef-8257f.firebaseapp.com",
  projectId: "abcdef-8257f",
  storageBucket: "abcdef-8257f.appspot.com",
  messagingSenderId: "203681621374",
  appId: "1:203681621374:web:2182b441a723355aa2bf2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/
var firebaseConfig = {
  apiKey: "AIzaSyAqu2DLOnUh1C_T5siz2JktKcy5GZlrrKg",
  authDomain: "anna12-3eea0.firebaseapp.com",
  databaseURL: "https://anna12-3eea0-default-rtdb.firebaseio.com",
  projectId: "anna12-3eea0",
  storageBucket: "anna12-3eea0.appspot.com",
  messagingSenderId: "311919121752",
  appId: "1:311919121752:web:4b0745d4a468fe1d0e012d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
  