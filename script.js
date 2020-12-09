$(document).ready(function () {
    myDateTime();
    changeDate();
    myStorage();
    saveButtons();
});

function myDateTime() {
    // today time format
    var today = moment().format('dddd, ');
    var date = moment().format('9,');
    //time interval incrementing
    setInterval(function () {
        var time = moment();
        $('#currentDay').text(today + " " + date + " " + time.format('hh:mm:ss a'));
    }, 100);
}

function changeDate() {
    var currentTime = Number(moment().hour());
    $('#myform').find(function () {
        var eventTime = parseInt($(this).val('text'));
        if (currentTime > eventTime) {
            $(this).addClass('past')
        } else if (currentTime < eventTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("prsent");
        }
    });

}

function myStorage() {
    for (let i = 0; localStorage.length; i++) {
        var element = localStorage.key[i];
    } if (element) {
        $('# + element').val(JSON.parse(localStorage.key(element)))

    }

}

function saveButtons() {
    const saveBtn = $(".saveBtn")
    saveBtn.each(function(index){
        // set attribute called data-hour to ??
        $(this).attr('data-hour',index + 9)
    })

    saveBtn.on("click", function (e) {
        var value = $(this).siblings(".form-control").val()
        var hour = e.target.dataset.hour

        localStorage.setItem(hour, value)

    });

}

// write a function that iterates over our text areas using jquery .each(index) 
//$( this).value(localstorage.getItem())

$("#clearDay").on("click", function () {
    if (localStorage.length < 9) {
        var clear = ("press Ok to clear daily events")
        if (clear) {
            localStorage.clear();
        }

    }

})
