// var shapes = ["triangle" , "sqare","pentagon","circle"];
// console.log(shapes[3]);

// var topics = " HTML, CSS, Git, JavaScriptefgrg ";
// console.log(topics);

var randomtopic = ['Himali','CSS','JavaScript','Git'];
var topic = randomtopic[Math.floor(Math.random() * randomtopic.length)];



function selectTopic(){


if (topic === 'Himali') {
  console.log("HIMALIIIII");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}}
var shapes = ["triangle", "square", "pentagon", "circle","oval"];
// console.log(shapes[0]);
// console.log(shapes[1]);
// console.log(shapes[2]);
// console.log(shapes[3]);
function listShapes(){
for(var x=0; x < shapes.length; x++){
  console.log(shapes[x]);
}
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
