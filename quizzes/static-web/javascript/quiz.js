var tree = { };

var treeHeight = document.getElementById("height");
  console.log(treeHeight);
var addCharacter = document.getElementById("char"); 
  console.log(addCharacter);
var buildButton = document.getElementById("buildButton");
var myTree = document.getElementById("myTree");
var div = ' ';
// 


  //

buildButton.addEventListener("click", buildTree);
function buildTree(event){
  event.preventDefault();
  tree.height = treeHeight.value;
  tree.char = addCharacter.value;
  for (var i = 0; i < tree.height; i++) {
    myTree.innerHTML += tree.char;
    myTree.innerHTML += "<br>";
  }
console.log("I clicked it", tree);
}
  //   treeHeight = makeProductString(myArray[i]);
  //   var productElement = document.getElementById(myId);
  //   productElement.innerHTML += productString;
  //   console.log(productElement);
 //};