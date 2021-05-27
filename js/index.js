var data = moment("2021-05-27");
var duration = moment.duration(data.diff("1986-09-10"));
console.log(Math.floor(duration.asYears()));