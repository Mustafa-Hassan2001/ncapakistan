// =============================FIREBASE CONFIG=================================
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
  import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-IFWItu-1JbakAWNBRonELXzXXlzMEl0",
    authDomain: "ncapproject-5f959.firebaseapp.com",
    projectId: "ncapproject-5f959",
    storageBucket: "ncapproject-5f959.appspot.com",
    messagingSenderId: "901964349194",
    appId: "1:901964349194:web:96bea04139c502aa0004f3",
    measurementId: "G-7YDWXCJ3ZD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();











// =============================VOLUNTEER CODE=================================



 
var submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click",function(event){
  var obj = {};
  event.preventDefault();
  obj.fullName = document.getElementById('fullName').value;
  obj.emailAddress = document.getElementById('emailAddress').value;
  obj.phoneNumber = document.getElementById('phoneNumber').value;
  obj.cnic = document.getElementById('cnic').value;
  obj.dob = document.getElementById('dob').value;
  var radioList = document.getElementsByName("gender");
  for (var i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      obj.gender = radioList[i].value;
    }
  }

  obj.volunteerOpt = document.getElementById('volunteerOpt').value;
  obj.date = new Date();
  const volunteerRef = ref(db, "volunteers");
  const newPostRef = push(volunteerRef);
  set(newPostRef,obj)
  .then(function () {
    console.log("success");
  })
  .catch(function (err) {
    console.log(err);
  });
 console.log(obj);
});

