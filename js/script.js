// create function that receives 2 parameters (team member name, moneyTotal) 
// the function should return how much team member makes out of total money
// if the name doesn't exist in array return zero

var team = [
    {
    name : 'Luca',
    points : 10,
    position : 'bartender',
    tips : 500
    },
    {
    name : 'Sina',
    points : 10,
    position : 'captain',
    tips : 500
    },
    {
    name : 'Gaby',
    points : 7,
    position : 'runner',
    tips : 500
    },
    {
    name : 'Gigi',
    points : 5,
    position : 'busser',
    tips : 0
    },
];

// create a function that counts the tips
var tipsTotal = team.reduce(function(prev, cur) {
    return prev + cur.tips;
}, 0);
//display the tips 
var listItem = document.createElement('li');
listItem.innerHTML = 'Today Total Tips are $ : ' + tipsTotal;
        
var list = document.getElementById('tips-window');
list.appendChild(listItem);
//console.log('your total tips are', tipsTotal);// should return 1500

// create a function that counts the points
var pointsTotal = team.reduce(function(prev, cur) {
    return prev + cur.points;
}, 0);
// display the amount of points
var listItem = document.createElement('li');
listItem.innerHTML = 'The Shift Total Points are : ' + pointsTotal;
            
var list = document.getElementById('tips-window');
list.appendChild(listItem);
//console.log('today total points are', pointsTotal);// should return 32


//create a var that returns how much a team member makes out of each point

var pointValue = (tipsTotal/pointsTotal);
console.log('the point is $' , pointValue);// returns 46.875

var listItem = document.createElement('li');
listItem.innerHTML = 'The Point Value is $ : ' + pointValue;            

var list = document.getElementById('tips-window');
list.appendChild(listItem);


//  create a function that calculate the tips each team member makes.(name, tips) forEach?
function tipsPerMemberOfTeam (name, tips) {
        
    for (var i = 0; i < team.length; i++){
        var item = team[i];
        
        //console.log( 'Hi ' + team[i].name + ' today you made $ ' + team[i].points*(pointValue)); 
        }
        var listItem = document.createElement('li');
        listItem.innerHTML =  'your total tips are $ : ' + item.points*(pointValue);
    
        var list = document.getElementById('tips-window');
        list.appendChild(listItem);
        
    }
tipsPerMemberOfTeam(name); 

//document.getElementById("tips").innerHTML = tipsPerMemberOfTeam;
// create a function that add users to the array onclick
// function addUser() {
//     team.push(document.getElementById("signUp"));
//     console.log(team);
// }