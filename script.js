$(document).ready(function () {
    myDateTime();
   changeDate();
myStorage();
   saveButtons();
});

function myDateTime() {
    // today time format
    var today = moment().format('dddd, ');
    var date = moment().format(' ll, ');
    //time interval incrementing
    setInterval(function () {
        var time = moment();
        $('#currentDay').text(today + " " + date + " " + time.format('hh:mm:ss a'));
    }, 1000);
}

function changeDate() {
    var currentTime = Number(moment().hour());
    $('.form-control').each(function () {
        var eventTime = parseInt($(this).attr('id'));
        console.log(currentTime,eventTime)
        if (currentTime > eventTime) {
            $(this).addClass('past')
        } else if (currentTime < eventTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

function myStorage() {
    //creating var called element local storage for every hours input
    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage.key(i);
        //console.log(element);
        if(element){
            // parse that input as element and assign it the that id 
            $('#' + element).val(localStorage.getItem(element));
        }
    }
} 

function saveButtons() {
    const saveBtn = $(".saveBtn")
    saveBtn.each(function(index){
        // set attribute called data-hour. 
        $(this).attr('data-hour',index + 9)
    })
    saveBtn.on("click", function (e) {
        var value = $(this).siblings(".form-control").val()
        var hour = e.target.dataset.hour
        localStorage.setItem(hour, value)
    });
}

$("#clearDay").on("click", function () {
    // clear day event if confirming yes.
    if (localStorage.length < 9) {
        var clear = confirm ("Press OK if you want to clear today's events?")
        if (clear) {
            for (let i = 9; i <= 17; i++) {
            
                    $('#' + i).val('');
                
            }
                
            
            
            localStorage.clear();
        }

    }

})

