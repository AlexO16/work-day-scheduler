//Select the existing elements on the page
var dateTimeDisplay = $('#display-time');
var saveBtn = $('.saveBtn');
var events =[]


//Display current date and time in the header
function displayTime() {
    var currentDate = moment().format('LLLL');
    dateTimeDisplay.text(currentDate);
}

setInterval(displayTime, 1000);

//Jquery save button to local storage
saveBtn.on("click", function () {
    var count = $(this).siblings(".hour").text();
    var schedule = $(this).siblings(".event").val();
    events.push({hour:count, event:schedule});
    localStorage.setItem("events", JSON.stringify(events));
});

//On page reload retrieve items from local storage
function retrieve() {
   events = JSON.parse(localStorage.getItem("events"));
        for( i=0; i < events.length; i++) {
            var hour = events[i].hour
            var event = events[i].event
            var hours = $(".hour")
        for(j=0; j < hours.length; j++) {
            if (hour === $(hours[j]).text()){
                    $(hours[j]).siblings(".event").val(event)}
                }
        
    }
};

//Function color code 
function colorCode() {
    var hourCurrent = moment().hour();
    $(".event").each(function () {
        var hour = parseInt($(this).attr("id"));

        if (hour > hourCurrent) {
            $(this).addClass("future");
        } else if (hour === hourCurrent) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//Clear schedule button
clearSchedule.addEventListener("click", function(event) {
    event.preventDefault;
    localStorage.clear();
    events = [];
    $(".event").val("");
});

colorCode();
retrieve();