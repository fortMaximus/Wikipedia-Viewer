$(document).ready(function() {
  addVal();
});

// Add typed val to the url and get the JSON response from Wiki API
function addVal() {
  var sVal = "";
  var aVal = "";
  // On clicking the s-button, get the value the user entered and get the JSON response
  $("#s-button").on("click", function() {
    sVal = document.getElementById("s-val").value;

    aVal = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + sVal + "&callback=?";

    $.getJSON(aVal, function(response) {
      console.log(response);
      
      render(response);
    });
  });
}

//edit stuff on page using recieved response/JSON object 
function render(response) {
  var output = $("#output");

  output.empty();

  var pages = response[3];

  for (var key in pages) {
    //append each value from object
    output.append(
      '<div id="result"><a id="r-link" href =' + response[3][key] + ' target="_blank">' + response[1][key] + '</a> <br>'
    );

    output.append('<p id="r-decreption">' + response[2][key] + '</p></div>');
  }
}
