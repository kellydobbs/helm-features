function processSurvey() {
  let partnersSelect = document.getElementById("partners");
  let keyEmployees = document.getElementById("keyEmployees");
  let insurance = document.getElementById("insurance");
  let results = document.getElementById("results");
  let button = document.getElementById("submit");

  //button.addEventListener("click", function() {
    document.getElementById("errors").innerHTML = "";

    let partners = partnersSelect.options[partnersSelect.selectedIndex].value;
    keyEmployees = document.querySelector('input[name="keyEmployees"]:checked').value;        
    insurance = document.querySelector('input[name="insurance"]:checked').value;

//calculation 
      if (keyEmployees === "null" || insurance === "null") {
          document.getElementById("errors").innerHTML = "Please answer all of the questions";
      } else if (partners === "4" || keyEmployees === "yes") {
          results.innerHTML = "At a high-level, a redemption arrangement may be the best fit.";
        } else {
          results.innerHTML = "At a high-level, a cross-purchase arrangement may be the best fit.";
        }
      //});
}