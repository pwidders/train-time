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

    // Step 1- Submitting train admin information to database

    // Setting up local time
    

    // Global variables
    var database = firebase.database();
   
        // Click listener for submit button
        $('#submit-button').on('click', function() {
            var trainName = $('#train-name').val();
            var destination = $('#destination').val();
            var firstTrainTime = $('#first-train-time').val();
            var frequency = $('#frequency').val();
            var ref = database.ref('trains');
            var trainData = {
                name: trainName,
                destination: destination,
                firstTrainTime: firstTrainTime,
                frequency: frequency
            }
            console.log(trainData);
            //  Store data in database
            ref.push(trainData);
        })
    
    // Retrieving information from database
    var reference = database.ref('trains');
    reference.on('value', gotData, errorData);   
    
    function gotData(data) {
        // Clear all current times
        $('#train-times').each(function() {
            $('#train-times').empty();
        })
        var trains = data.val(); 
        // Turn object into iterable array with individual keys
        var keys = Object.keys(trains); 
        // for loop to index through keys
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i]; 
            var trainNameDisplay = trains[k].name; 
            var destinationDisplay = trains[k].destination;
            var firstTrainTimeDisplay = trains[k].firstTrainTime;
            var frequencyDisplay = trains[k].frequency;

            // Append train data to table on page
            // create td's and append to tr
            // tr append to tbody
            var row = $('<tr>');
            var td = $('<td>').text(trainNameDisplay);
            var td1 = $('<td>').text(destinationDisplay);
            var td2 = $('<td>').text(frequencyDisplay);
            $("#train-times").append(row).append(td, td1, td2);
            
        }

    }

    function errorData(error) {
        console.log("Error!", error);
    }

})