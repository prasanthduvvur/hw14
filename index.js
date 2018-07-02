// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#date_time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");

var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredSightings to dataSet initially
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current address object and its fields
    var sighting = filteredSightings[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the sighting object, create a new cell at set its inner text to be the current value at the current sighting's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $datetimeInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();


  // Set filteredSightings to an array of all sightings whose "date/time" matches the filter
  if (filterDateTime !== "") {
    filteredSightings = dataSet.filter(function(sighting) {
      var dateTimedata = sighting.datetime.toLowerCase();


      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      console.log("filter");
      return dateTimedata === filterDateTime;
    });
  }
  console.log("filtered sightings:"+filteredSightings)
  if (filterCity !== "") {
    //console.log(dataSet)
    filteredSightings = filteredSightings.filter(function(sighting) {
      var dataSet = sighting.city.toLowerCase();

      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      //return dataSet === filteredSightings;
      console.log("city filter")
      return dataSet === filterCity;

    });
  }
  if (filterState !== "") {

    filteredSightings = filteredSightings.filter(function(sighting) {
      var dataSet = sighting.state.toLowerCase();

      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      //return dataSet === filteredSightings;
      console.log("state filter")
      return dataSet === filterState;

    });
  }
   renderTable();
 }

// Render the table for the first time on page load
renderTable();
