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
console.log('your total tips are', tipsTotal);// should return 1500

// create a function that counts the points
var pointsTotal = team.reduce(function(prev, cur) {
    return prev + cur.points;
}, 0);
console.log('today total points are', pointsTotal);// should return 32


//create a var that returns how much a team member makes out of each point

var pointValue = (tipsTotal/pointsTotal);
console.log(pointValue);
