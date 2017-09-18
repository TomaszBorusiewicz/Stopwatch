$(document).ready(function () {
    "use strict";
    // start function StopWatch.
    function stopWatch() {
        var min, sec, milisec, time, self, timeSave;
        min = 0;
        sec = 0;
        milisec = 0;
        timeSave = "";
        this.odpal = function () {
            if (keepGoing === true) {
                milisec += 1;
                if (milisec === 100) {
                    milisec = 0;
                    sec += 1;
                }
                if (sec === 60) {
                    sec = 0
                    min += 1;
                }
                if (min === 59 && sec === 59 && milisec === 99) {
                    milisec = 0;
                    sec = 0;
                    min = 0;
                }
                time = min + ":" + sec + ":" + milisec;
                self = this;
                $("#timer").text(time);
                setTimeout(function () {
                    self.odpal();
                }, 10);
            }
        };
        this.pause = function () {
            keepGoing = false;
        };
        this.reset = function () {
            keepGoing = false;
            min = 0;
            sec = 0;
            milisec = 0;
            time = min + ":" + sec + ":" + milisec;
            $("#timer").text(time);
        };
        this.save = function () {
           // if(time === undefined || "0:0:0" )
            //return;
            timeSave += "<p>" + time + "</p>";
            $(".save").html(timeSave)
        };
        this.removeSave = function () {
            timeSave = "";
            $(".save > p").remove();
        };
    } // End function stopWatch.
    
    var keepGoing = false;
    var stoper = new stopWatch();
    
    //clicking buttons
    $("#start").on("click", function () {
        keepGoing = true;
        stoper.odpal();
    });
    $("#pause").on("click", stoper.pause);
    $("#reset").on("click", stoper.reset);
    $("#save-record").on("click", stoper.save);
    $("#remove-records").on("click", stoper.removeSave);
    // clicking buttons end
});
