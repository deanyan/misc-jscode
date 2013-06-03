/**
 * Prince William & Kate Middleton wedding ticker
 * Version 0.0.3
 * Dean Yan and Jeffrey Barke
 */
(function() {
    var domRoot = document.getElementById('pwkmWedTicker'),
        s, domDays, domHours, domMinutes, timer = false,
        DAYUNIT = 1000 * 60 * 60 * 24,
        HOURUNIT = 1000 * 60 * 60,
        MINUTEUNIT = 1000 * 60,
        toDate = Date.UTC(2011, 3, 29, 11, 0, 0, 0),
        calcDiff = function() {
            var fromDate = Date.parse(new Date().toUTCString()),
                diff = toDate - fromDate,
                days = Math.floor(diff / DAYUNIT),
                hours = Math.floor((diff - (days * DAYUNIT)) / HOURUNIT),
                minutes = Math.floor((diff - ((days * DAYUNIT) + (hours * HOURUNIT))) / MINUTEUNIT);
            if (days >= 0) {
                domDays.innerHTML = days;
                domHours.innerHTML = hours;
                domMinutes.innerHTML = minutes;
            } else {
                if (timer) {
                    clearInterval(timer);
                }
                domDays = null;
                domHours = null;
                domMinutes = null;
            }
        };
    if (domRoot) {
        s = domRoot.style;
        s.margin = '0 auto';
        s.textAlign = 'center';
        s.width = '250px';
        domRoot.innerHTML = '<a href="http://wedding.theknot.com/special-wedding-features/prince-william-kate-middleton-wedding.aspx" style="display: block; text-decoration: none; outline: 0;"><div style="position: relative; margin: 0 auto; width: 250px; height: 178px; background-repeat: no-repeat; background-image: url(http://media.theknot.com/sitelets/prince-william-kate-middleton-wedding-ticker/img/royal_countdown_250x178.png); background-position: left top; outline: 0; cursor:pointer;"><div style="left: 10px; position: absolute; padding-top: 17px; vertical-align: middle; text-align: center; height: 39px; width: 71px; top: 54px;"><span id="pwkmDays" style="font-family: Times New Roman; font-size: 30px; color: #4f3e32; text-decoration: none;">0</span></div><div style="left: 90px; position: absolute; padding-top: 17px; vertical-align: middle; text-align: center; height: 39px; width: 71px; top: 54px;"><span id="pwkmHours" style="font-family: Times New Roman; font-size: 30px; color: #4f3e32; text-decoration: none;">0</span></div><div style="left: 170px; position: absolute; padding-top: 17px; vertical-align: middle; text-align: center; height: 39px; width: 71px; top: 54px;"><span id="pwkmMinutes" style="font-family: Times New Roman; font-size: 30px; color: #4f3e32; text-decoration: none;">0</span></div></div></a>';
        domDays = document.getElementById('pwkmDays');
        domHours = document.getElementById('pwkmHours');
        domMinutes = document.getElementById('pwkmMinutes');
        if (domDays && domHours && domMinutes) {
            calcDiff();
            timer = setInterval(calcDiff, MINUTEUNIT);
        }
        s = null;
    }
    domRoot = null;
}());