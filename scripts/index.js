// var circle = document.querySelector('circle');
// var radius = circle.r.baseVal.value;
// var circumference = radius * 2 * Math.PI;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent, circumference, circle) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

// const input = document.querySelector('input');
// setProgress(input.value);

// input.addEventListener('change', function(e) {
//   if (input.value < 101 && input.value > -1) {
//     setProgress(input.value);
//   }  
// })
const langs = [
    {lang: 'wordpress', value: 70}, 
    {lang: 'php', value: 65},
    {lang: 'py',value: 60},
    {lang: 'js',value: 80},
    {lang: 'html',value:80},
    {lang: 'angular', value: 60}
]
langs.forEach(function(lang){
    var circle = document.getElementById(lang.lang);
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
console.log(circumference)
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;
const val = lang.value
document.getElementById(`${lang.lang}-value`).innerHTML = val
setProgress(val,circumference, circle)
}) 