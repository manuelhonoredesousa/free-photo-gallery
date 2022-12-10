const $searchTxt = document.querySelector("#searchTxt")

$searchTxt.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchingFor()
    }
  });
  
  function searchingFor(){
    const originURL = window.location.origin
    window.location.href = `${originURL}/image?search=${$searchTxt.value}&startIndex=1`;
  }

