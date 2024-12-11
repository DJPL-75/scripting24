console.log("it do");

function hideDiv() {
    var x = document.getElementById("options");
    x.style.display = "none";
}
function revealDiv() {
    var x = document.getElementById("story");
    x.style.display = "block";


}
function hidestory() {
        var x = document.getElementById("story");
    x.style.display = "none";
}


function write() {
console.log("writing works")
var nm = document.getElementById('name').value;
var sin = document.getElementById('sin').value;
var ch = document.getElementById('character').value;
var adj = document.getElementById('adjective').value;
var noun = document.getElementById('noun').value;
var place = document.getElementById('place').value;
var noise = document.getElementById('noise').value;
var soft = document.getElementById('soft').value;
var pro = document.getElementById('pro').value;
var obj = document.getElementById('obj').value;

var gnd = document.querySelector('input[name="gender"]:checked').value;

console.log(adj)
console.log(noun)
console.log(ch)
console.log(nm)
console.log(gnd)

var gndMessage;
if (gnd == "man") {
    gndMessage = "man"
} else if (gnd == "women") {
    gndMessage = "women"
}

document.getElementById('story').innerHTML = "this is the story of "+nm+", a "+ch+" "+gnd+" who has been banished from their "+noun+" in the city of Jackson for "+sin+". During they're journey through a very dense and tall pine forest they would stumble upon a "+adj+" "+place+" about 10 feet up a sheer cliff that they would climb to and set up camp in for the night. Setting up a small campfire using "+soft+" as kindling and using it to roast some "+pro+" while eating "+nm+" would here a loud "+noise+" eminating from the trees below. Looking out to the forest they would see a pair of glowing red eyes staring at them from the ridge of the cliff before slinking back into the forest with another loud "+noise+". Whatever it was, it was gone for only a few minutes before a "+obj+" flew out of the forest pinning "+nm+" to the ground and knocking them unconsious."  ;
}




