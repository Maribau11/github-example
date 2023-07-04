let apiKey = `85bbd3d16a2dfe0ecf253c7ae1e8fe03`;
// creating functionality behind the button
//creating the searchCity function
function searchCity(response) {
  //this prevents the button from reloading the page
  response.preventDefault();
  //this gets the input from the form and stores it in a variable
  let city = document.querySelector("#city-input");
  //this allows you to manipulate the data in the h1 element
  let h1 = document.querySelector("#city");
  console.log(city.value);
  h1.innerHTML = `${city.value}`;

  function getTemp(response) {
    let temp = response.data.main.temp;
    temp = Math.round(temp);
    console.log(temp);
    let displayTemp = document.querySelector(".temperature");
    displayTemp.innerHTML = temp;
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}

//create a variable to link the button to
let btnSearch = document.querySelector(".btn");
//adding an event to the button so that it will call a function when the buttion is clicked.
btnSearch.addEventListener("click", searchCity);
