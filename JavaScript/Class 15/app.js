console.log("JavaScript Connected!");


// var d = new Date();

// console.log(d);


// var now = new Date();

// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());
// console.log(Date.now());


// var now = new Date();

// var year = now.getFullYear();
// console.log("Year",year);
// var month = now.getMonth(); // 0 = jan , 11 = dec
// console.log("Month",month);
// var day = now.getDay(); // 0 = Sun , 6 = Sat
// console.log("Day",day);
// var hours =  now.getHours(); // 0-23
// console.log("Hours",hours);
// var minutes = now.getMinutes();
// console.log("Minutes" , minutes);
// var seconds = now.getSeconds();
// console.log("Seconds", seconds);
// var ms = now.getMilliseconds();
// console.log("Millieseconds" , ms);

// var dayNames = ["Sun", "Mon" , "Tuesday" , "Wed" , "Thu" , "Fri" , "Sat"];

// var now = new Date();

// var theDay = now.getDay();

// var nameOfTheDay = dayNames[theDay];

// console.log(nameOfTheDay);


// var nameOfMonths = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

// var now = new Date();

// var theMonth = now.getMonth();

// var nameOfTheMonth = nameOfMonths[theMonth];

// console.log(nameOfTheMonth);


// var date1 = new Date("June 30, 2035");
// console.log(date1);


// var d1 = new Date(2025,0,31,9,30);

// console.log(d1.toString());


// var today = new Date();

// var doomsDay = new Date("June 30,2035");

// var msToday = today.getTime();
// var msDoomsDay = doomsDay.getTime();

// var msDifference = msToday - msDoomsDay;

// var dDif = msDifference / (1000 * 60 * 60 * 24);

// dDif = Math.floor(dDif);


// console.log(msToday);
// console.log(msDoomsDay);
// console.log(msDifference);
// console.log(dDif);


// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();

// var daysTilDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));

// console.log(daysTilDoom);


// var today = new Date();

// var birthday = new Date("November 26, 2025");

// var msDiff = birthday.getTime() - today.getTime();

// var daysLeft = Math.floor(msDiff / (1000 * 60 * 60 * 24));

// console.log("Days left for the birthday " + daysLeft);




// var today = new Date();

// var newYear = new Date("January 1, 2026");

// var msDiff = newYear.getTime() - today.getTime();

// var daysLeft = Math.floor(msDiff / (1000* 60 * 60 * 24));

// console.log(daysLeft);


// var today = new Date();

// var future = new Date("August 30, 2026 18:00:00");

// var msDiff  = future.getTime() - today.getTime();

// var hoursLeft = Math.floor(msDiff / (1000 * 60 * 60));

// console.log(hoursLeft);


var d = new Date();
console.log(d);

d.setFullYear(2050);
console.log(d);

d.setMonth(11);
console.log(d);

d.setDate(15);
console.log(d);

d.setHours(13);
console.log(d)

d.setMinutes(49);
console.log(d);

d.setSeconds(55);
console.log(d);

d.setMilliseconds(578);
console.log(d);
























