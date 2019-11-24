
// get the modal
var modal = document.getElementById("myModal");
//get the button that opens the modal
var btn = document.getElementById("newUserBtn");

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
//creatre an array of user name , tips, points

var names = [];
var tips = [];
var points = [];

var User = {};
var team = [];
 
//get the input fields from DOM




// get the reference to the display div
var messageBox = document.getElementById('display');
//create a function that gets the values of eacxh input field, once done it calls the cleaAndShow function
function insert() {

    var nameInput = document.getElementById('userName');
    var tipsInput = document.getElementById('userTips');
    var pointsInput = document.getElementById('userPoints');


    User.name = nameInput.value;
    User.tips = tipsInput.value;
    User.points = pointsInput.value;
    team.push(User);
    for(var i = 0; i < team.length; i++){
        alert(team[i].name + team[i].tips + team[i].points);
    }
}

//create a function that clears the display after each time insert is completed
function clearAndShow() {
    nameInput.value = " ";
    tipsInput.value = " ";
    pointsInput.value = " ";

    messageBox.innerHTML = " ";

    messageBox.innerHTML += "name: " + names.join (", ") + "<br/>";
    messageBox.innerHTML += "tips: " + tips.join (", ") + "<br/>"
    messageBox.innerHTML += "points: " + points.join (", ");

}

function updateTotal() {
    var total = 0;
    var list = document.getElementsByClassName("input");
    var values = [];
    for(var i = 0; i < list.length; ++i) {
        values.push(parseFloat(list[i].value));
    }
    total = values.reduce(function(previousValue, currentValue, index, array){
        return previousValue + currentValue;
    });
    document.getElementById("total").value = total;    
}

//display the tips 
var tipsTotal = team.reduce(function(prev, cur) {
    return prev + cur.tips;
}, 0);

var listItem = document.createElement('li');
listItem.innerHTML = 'Today Total Tips are $ : ' + tipsTotal;
        
var list = document.getElementById('tips-window');
list.appendChild(listItem);

// create a function that counts the points
var pointsTotal = team.reduce(function(prev, cur) {
    return prev + cur.points;
}, 0);
// display the amount of points
var listItem = document.createElement('li');
listItem.innerHTML = 'The Shift Total Points are : ' + pointsTotal;
            
var list = document.getElementById('tips-window');
list.appendChild(listItem);

//create a var that returns how much a team member makes out of each point

var pointValue = (tipsTotal/pointsTotal);
//console.log('the point is $' , pointValue); // returns 46.875

var listItem = document.createElement('li');
listItem.innerHTML = 'The Point Value is $ : ' + pointValue;            

var list = document.getElementById('tips-window');
list.appendChild(listItem);

//  create a function that calculate the tips each team member makes.(name, tips) forEach?
 
function tipsPerMemberOfTeam (name, tips, points) {
        nameInput = name;
        tipsInput = tips;
        pointsInput = points;

        for (var i = 0; i < team.length; i++){
            var listItem = document.createElement('li');
            listItem.innerHTML = 'Today you made $ : ' + team[i].points*(pointValue);            

            var list = document.getElementById('tips-window');
            list.appendChild(listItem);
        } 
            //return ( 'Hi ' + team[i].name + ' today you made $ ' + team[i].points*(pointValue)); 
            
        }            
tipsPerMemberOfTeam(tips);
