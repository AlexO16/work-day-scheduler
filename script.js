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
    var timeNow = moment().hours();
    $(".log").each(function () {
        var hour = parseInt($(this).attr("class"));

        if (hour > timeNow) {
            $(this).addClass("future");
        } else if (hour === timeNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};