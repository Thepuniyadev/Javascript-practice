
// This function clear all the values
var dis =document.getElementById("screen"); 
function clearScreen() {
document.getElementById("screen").value = "";
	}

	// This function display values
	function display(value) {
document.getElementById("screen").value += value;
	}

	// This function evaluates the expression and returns screen
	function calculate() {
var p = document.getElementById("screen").value;
var q = eval(p);
document.getElementById("screen").value = q;
	}

	function deletechar()
	{
var r = document.getElementById("screen").value;
document.getElementById("screen").value = r.substring(0, r.length - 1);
	}

	// percentage

	
	// sin
	function sin(value) {
		document.getElementById("screen").value = Math.sin(document.getElementById("screen").value);
}

// cos

function cos(value) {
	document.getElementById("screen").value = Math.cos(document.getElementById("screen").value);
}

// tan
function cos(value) {
	document.getElementById("screen").value = Math.tan(document.getElementById("screen").value);
}

function sqrt(value) {
	document.getElementById("screen").value= Math.sqrt(document.getElementById("screen").value);
}

function ln(value) {
	document.getElementById("screen").value= Math.log(document.getElementById("screen").value);
}

function xpow2(value) {
	document.getElementById("screen").value = eval(document.getElementById("screen").value) * eval(document.getElementById("screen").value);
}

//
// percent
function percentage() {
	document.getElementById("screen").value = document.getElementById("screen").value / 100;
  }
// Fact

			function factorial() {
				var number = 1;
				if (document.getElementById("screen").value === 0) {
				  document.getElementById("screen").value = "1";
				} else if (document.getElementById("screen").value < 0) {
				  document.getElementById("screen").value = "undefined";
				} else {
				  var number = 1;
				  for (var i = document.getElementById("screen").value; i > 0; i--) {
					number *=  i;
				  }
				  document.getElementById("screen").value = number;
				}
			  }


			  