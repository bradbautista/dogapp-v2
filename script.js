let doggos;

function getDogImage() {
    fetch(`https://dog.ceo/api/breeds/image/random/${doggos}`)
        .then(response => response.json())
        .then(responseJson => 
          displayResults(responseJson))
        .catch(error => alert('Ruh-roh! Romething rent wrong!'));
}

function displayResults(responseJson) {

  // Clear the previous results
  $('.results-area').text("");

  // Loop through the returned array of URLs, and append appropriate HTML
  // to our results area for each section
  for (i = 0; i < doggos; i++) {
    $('.results-area').append(
      `<img src="${responseJson.message[i]}" class="results-img">`  
    );
  }
  
  // Show the results
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    doggos = $('#selector').val();
    getDogImage();
  });
}

$(function() {
  console.log('Ruff! Waiting for submit!');
  watchForm();
});