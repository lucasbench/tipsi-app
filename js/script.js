// create function that receives 2 parameters (team member name, moneyTotal) 
// the function should return how much team member makes out of total money
// if the name doesn't exist in array return zero


// get the modal
var modal = document.getElementById("myModal");
//get the button that opens the modal
var btn = document.getElementById("newUserBtn");
//get the <span> element that closes the modal
var span = document.getElementById("close");
//when the user clicks on the btn , open modal
btn.onclick = function () {
    modal.style.display = "block";
}
// when the user clicks on span (x), close modal
// span.onclick = function () {
//     modal.style.display = "none";
// }
//when the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var team = [{
    name:'',
    tips:'',
    points:''
}];

function teamMember (name, tips, points) {
    this.name = name;
    this.tips = tips;
    this.points = points;
}
//document.getElementById("newUserBtn").addEventListener('click', );
document.getElementById('newUser-name').addEventListener('click', addTeamMember.selectName);
document.getElementById('newUser-tips').addEventListener('click', addTeamMember.selectTips);
document.getElementById('newUser-points').addEventListener('click', addTeamMember.selectPoimts);
document.getElementById('addInfo').addEventListener('click', tipsPerMemberOfTeam);

function addTeamMember () {
    var selectName = '';
    var selectTips = '';
    var selectPoints = '';
    var currentTeamMember = new teamMember(selectName, selectTips, selectPoints);
    console.log(currentTeamMember);
    console.log(team);
    return team.push(currentTeamMember);
}
// create a function that counts the tips
var tipsTotal = team.reduce(function(prev, cur) {
    return prev + cur.selectTips;
}, 0);
//display the tips 
var listItem = document.createElement('li');
listItem.innerHTML = 'Today Total Tips are $ : ' + tipsTotal;
        
var list = document.getElementById('tips-window');
list.appendChild(listItem);
 

// create a function that counts the points
var pointsTotal = team.reduce(function(prev, cur) {
    return prev + cur.selectPoints;
}, 0);
// display the amount of points
var listItem = document.createElement('li');
listItem.innerHTML = 'The Shift Total Points are : ' + pointsTotal;
            
var list = document.getElementById('tips-window');
list.appendChild(listItem);


//create a var that returns how much a team member makes out of each point

var pointValue = (tipsTotal/pointsTotal);
console.log('the point is $' , pointValue);// returns 46.875

var listItem = document.createElement('li');
listItem.innerHTML = 'The Point Value is $ : ' + pointValue;            

var list = document.getElementById('tips-window');
list.appendChild(listItem);


//  create a function that calculate the tips each team member makes.(name, tips) forEach?
function tipsPerMemberOfTeam () {
        
    for (var i = 0; i < team.length; i++){
        
        var item = team[i].selectPoints;
        }
        var listItem = document.createElement('li');
        listItem.innerHTML =  'your total tips are $ : ' + item*(pointValue);
    
        var list = document.getElementById('tips-window');
        list.appendChild(listItem);
        
    }
//tipsPerMemberOfTeam(selectPoints); 