// const infoTitle = document.querySelector('#infotitle');
// const infoAmount = document.querySelector('#infoamount');


// Declaring data where I will store json file
let data;

// Fetching JSON file and storing it in data
fetch('data.json')
.then(resp => resp.json())
.then(json => data = json);

// declaring buttons
const dailyBtn = document.querySelector('#Daily');
const weeklyBtn = document.querySelector('#Weekly');
const monthlyBtn = document.querySelector('#Monthly');

// Declaring the information i will be modifying
const previousAmount = document.querySelector('#infoprevious');
const cardTitle = document.querySelector('#infotitle');
const cardAmount = document.querySelector('#infoamount');

// Declaring my listeners
dailyBtn.addEventListener('click', daily);
weeklyBtn.addEventListener('click', weekly);
monthlyBtn.addEventListener('click', monthly);


// Apparently domcontentloaded happens before my fetch gets data so i just used onload, probably not a good solution :D
window.onload = daily;


// In this function we change the information in tiles 
function daily(e){
    e.preventDefault();
console.log(e.target);
    

weeklyBtn.classList.remove('clicked');
monthlyBtn.classList.remove('clicked');
    dailyBtn.classList.add('clicked');

    // This is where i loop through each item and
    // modify the tiles
    data.forEach(function(item, index){
        document.querySelector(`.tile-${index+1} #infotitle`).innerHTML = item.title;
        if(item.timeframes.daily.current > 1 ||item.timeframes.daily.current === 0 ){
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.daily.current} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.daily.current} hr`;
        }

        if(item.timeframes.daily.previous > 1 ||item.timeframes.daily.previous === 0 ){
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.daily.previous} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.daily.previous} hr`;
        }
    });
}

function weekly(e){
    e.preventDefault();
console.log(e.target);
  
// This is just so the buttons look clicked
    dailyBtn.classList.remove('clicked');
    monthlyBtn.classList.remove('clicked');
    e.target.classList.add('clicked');

    // This is where i loop through each item and
    // modify the tiles
    data.forEach(function(item, index){
        document.querySelector(`.tile-${index+1} #infotitle`).innerHTML = item.title;
        if(item.timeframes.weekly.current > 1 ||item.timeframes.weekly.current === 0 ){
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.weekly.current} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.weekly.current} hr`;
        }

        if(item.timeframes.weekly.previous > 1 ||item.timeframes.weekly.previous === 0 ){
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.weekly.previous} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.weekly.previous} hr`;
        }
    });
}

function monthly(e){
    e.preventDefault();
console.log(e.target);
 

dailyBtn.classList.remove('clicked');
weeklyBtn.classList.remove('clicked');
    e.target.classList.add('clicked');

    // This is where i loop through each item and
    // modify the tiles
    data.forEach(function(item, index){
        document.querySelector(`.tile-${index+1} #infotitle`).innerHTML = item.title;
        if(item.timeframes.monthly.current > 1 ||item.timeframes.monthly.current === 0 ){
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.monthly.current} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoamount`).innerHTML = `${item.timeframes.monthly.current} hr`;
        }

        if(item.timeframes.monthly.previous > 1 ||item.timeframes.monthly.previous === 0 ){
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.monthly.previous} hrs`;
        } else {
            document.querySelector(`.tile-${index+1} #infoprevious`).innerHTML = `${item.timeframes.monthly.previous} hr`;
        }
    });
}