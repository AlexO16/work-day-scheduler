//Select the existing elements on the page
var dateTimeDisplay = $('#display-time');
var saveBtn = $('.saveBtn');



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
    localStorage.setItem(count, schedule);
});

//On page reload retrieve items from local storage


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
    $(".event").val("");
});

colorCode();