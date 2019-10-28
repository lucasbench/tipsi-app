//create variables to store the points given to each team member

// var position = ['bartender', 'captain', 'runner', 'busser'];
// var teamMembers = ['Luca', 'Sina', 'Gaby', 'Gigi', 'Era', 'Zeus'];
//create array of team members
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
// create function that receives 2 parameters (team member name, moneyTotal) 
// the function should return how much team member makes out of total money
// if the name doesn't exist in array return zero

// create a function that counts the tips
function tipTotal (totalTips) {
    
    for (var i = 0; i < team.length; i++){
        
        var tips = team[i].tips;
        var sum = 0;
        sum += tips; 

        return 'your total tips are' + sum;
        }
    }
tipTotal();


//create a function that return how much team member makes out of total money
// function nameTot (names, totalTips) {
//     for (var i = 0; i < team.length; i++){
//         if ( team[i].name == team[i].tips){
//             return team.name + team.tips }
//                 else {
//                     return 0;
//                 }
//             }
//         }
    
// nameTot();


// var totalPoints = teamMembers;
// var moneyTotal = 1000;

// function getPointValue (totalPoints, moneyTotal) {
//     return Math.floor(totalPoints/moneyTotal*100);
// }
// var pointValue = getPointValue(totalPoints,moneyTotal);

// tipCalc(teamName, tipTotal);
