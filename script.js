// this function checks for negative numbers and if the input fields are empty 
function isEmpty() {
  // the three variables are set to equal the value that was inputted into the fields 
  var emptyPercentage = document.getElementById("input_percentage").value;
  var emptySum = document.getElementById("input_sum").value;
  var emptyTax = document.getElementById("input_tax").value;
  // this checks to see if the three input fields are not empty and do not include any negative numbers. 
  if (emptyPercentage && emptySum && emptyTax !== "" && Math.sign(emptyPercentage && emptySum && emptyTax) !== -1) {
      onSubmit()
      return false; } else {
        // if either the two 
        popUp();
      }}

      function onSubmit() {
        // grabs the user inputs
        var percentageI = document.getElementById("input_percentage").value;
        var sumI = document.getElementById("input_sum").value;
        var taxI = document.getElementById("input_tax").value;
          
          // This does math operation to calculate tip percentage  
          var tip = sumI * (percentageI / 100);
      
          // This does math operation to calculate tax percentage
          var tax = sumI * (taxI / 100);
      
          // converts the variable to a float number so we can add them together 
          var total = parseFloat(tip) + parseFloat(sumI) + parseFloat(tax);

          // making variables that equal the calculated user inputs. then the decimal place is fixed at 2 IE $3.69
          var fixedNumber = tip.toFixed(2);
          var fixedNumberTwo = tax.toFixed(2);
          var fixedNumberThree = total.toFixed(2);
      
          // this template literal grabs the tip, tax, and total amount from the
          // tax, tip, and total variables 
          const sumy = `
          <br>
          <p> The tip amount is: ${"$" + fixedNumber}</p>
          <br>
          <p> The Sales tax amount is: ${"$" + fixedNumberTwo}<p>
          <br>
          <p> Your total including tip and tax is: ${"$" + fixedNumberThree}</p>
          `;
          // this gets the element "user_sum" and then injects the template literal so it displays to the user. 
          document.getElementById("user_sum").innerHTML = sumy;
          };

// this hides the input percentage field when the alt_fun id button is clicked
function startAltFun() {
  document.getElementById("input_percentage").style.display = "none";
  }

// this does the same the thing as the isEmpty function but with out the percentage field input and if statement checks 
function altIsEmpty() {
var emptySum = document.getElementById("input_sum").value;
var emptyTax = document.getElementById("input_tax").value;
if (emptySum && emptyTax !== "" && Math.sign(emptySum && emptyTax) !== -1) {
  altOnSubmit();
  } else {
    popUp();
  }
}

  function altOnSubmit() {
  // grabs the user inputs
  var sumI = document.getElementById("input_sum").value;
  var taxI = document.getElementById("input_tax").value;

    // This does math operation to calculate tax percentage
    var tax = sumI * (taxI / 100);

    // converts the variable to a float number so we can add them together 
    var total = parseFloat(sumI) + parseFloat(tax);

    // making variables that equal the calculated user inputs. then the decimal place is fixed at 2 IE $3.69
    var fixedNumberTwo = tax.toFixed(2);
    var fixedNumberThree = total.toFixed(2);

    // this template literal grabs the tip, tax, and total amount from the
    // tax, tip, and total variables 
    const sumy2 = `
    <br>
    <p> The Sales tax amount is: ${"$" + fixedNumberTwo}<p>
    <br>
    <p> Your total with tax is: ${"$" + fixedNumberThree}</p>
    `;
// this gets the element "user_sum" and then injects the template literal so it displays to the user. 
document.getElementById("user_sum").innerHTML = sumy2;
  }

      // this checks if the input field is empty or not and then runs one of two functions as seen below
    function launch() {
      if (document.getElementById("input_percentage").style.display == "none") {
        altIsEmpty();
      }
      else if ((document.getElementById("input_percentage").style.display !== "none")) {
        isEmpty();
    }
  }

function refreshPage() {
  window.location.reload();
}


// we are making a variable and giving it the value of input_sum 
var input = document.getElementById("input_sum");
// now we add the event listener
input.addEventListener("keypress", function(event) {
  // then we check if the user has pressed the enter key. If so we run the onSubmit function.
  if (event.key == "Enter") {
    launch();
  } 
});

//*****************************************************************************************

// POPUP SECTION 

//******************************************************************************************/

function popUp() {
  document.getElementById("dialog").style.display = "block";
}

function closePopUp() {
  document.getElementById("dialog").style.display = "none";
}

// we are making a variable and giving it the value of element id hide
  var closePopEn= document.getElementById("hide");
// now we add the event listener
closePopEn.addEventListener("keypress", function(event) {
  // then we check if the user has pressed the enter key. If so we close the dialog box. 
  if (event.key == "Enter") {
  document.getElementById("dialog").style.display = "none";
  } 
});
