//variables declared******

var buildButton = document.getElementById("buildButton");
var clearButton = document.getElementById("clear");
var treeElements = document.getElementById("treeHolder");
var line = "";

//**********FUNCTION TO BUILD TREE TIED TO VALIDATE FUNCTION TO ENSURE NO TREE WILL BUILD IF BOTH BOXES AREN'T FILLED IN WITH VALUES*****


function buildTree() {
  var treeStuff = validateInputs();
 tree(treeStuff) }

//TREE OBJECT INPUT INTO TREE FUNCTION, RUNS FOR LOOPS SO THAT THE FORMULA FOR BUILDING THE TREE SHAPE IS EXECUTED AND IS ADJUSTED BASED ON HEIGHT INPUT*****
  function tree(myTreeObject){
    for (var i = 1; i <= myTreeObject.height; i ++) {
       line=""; 
      for (var j = 0; j <= myTreeObject.height-i-1; j++) {
        line += " ";
      }
    for (var j = 1; j<= 2*i - 1; j++) {
      line += myTreeObject.character;
    }
    //LINE IS ENTERED TO BREAK THE LOOP AND HAVE THE FORUMLA CONTINUE ON THE NEXT CONSOLE LINE TO MAKE TREE SHAPE*****
      console.log(line);
    }
    
  }

//*****************FUNCTION VALIDATES INPUT FROM USER TO ENSURE THERE ARE VALUES IN BOTH INPUT BOXES IN HTML*******

function validateInputs() {
  if (((document.getElementById("height").value).length == 0) || ((document.getElementById("char").value).length == 0)) {
    alert("Please enter both a height and a character!")
    // return false;
  }

  // IF THERE IS A VALUE IN BOTH BOXES NO ALERT IS SHOWN AND THE TREE IS READY TO BE BUILT AND WILL BE RETURNED

  else {
    var treeHeight = document.getElementById("height").value;
    var treeChar = document.getElementById("char").value;
  // var n = treeChar.toString();
    var treeObject = {
    height: treeHeight,
    character: treeChar
  }
  return treeObject;
  }
  




}
//submitButton.addEventListener("click", validateInputs);
buildButton.addEventListener("click", buildTree);


