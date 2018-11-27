$(document).ready( function() {
    console.log("We in here");

    // Requirements Overview: Must incorporate Firebase to host arrival and departure data. App will retrieve and manipulate this data with Moment.js. Website will provide up-to-date info on train arrival times and how many minutes remain until they arrive at their station.

    // Required basic specifications: 
        // Admins should be able to submit train name, destination, first-train time (in military hours) and frequency (in minutes).
        // App will calculate when the next train will arrive - relative to current time
        // Users from different machines must be able to view same train times

    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyANRBqX8PBuS5FWpxm-02Px3juJsE-eAYk",
    authDomain: "train-time-52b2c.firebaseapp.com",
    databaseURL: "https://train-time-52b2c.firebaseio.com",
    projectId: "train-time-52b2c",
    storageBucket: "train-time-52b2c.appspot.com",
    messagingSenderId: "819093715905"
    };
    firebase.initializeApp(config);
    console.log(firebase);

    // Submitting train admin information

    // Global variables
    var database = firebase.database();
   
        // Click listener for submit button
        $('#submit-button').on('click', function() {
            var trainName = $('#train-name').val();
            var destination = $('#destination').val();
            var firstTrainTime = $('#first-train-time').val();
            var frequency = $('#frequency').val();
            console.log(frequency);
        })
        // Function to save data 






})