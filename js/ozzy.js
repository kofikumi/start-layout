(function () {
  var links = document.querySelectorAll("a");
  // looping through the links
  links.forEach(function (link) {
    // adding event listeners to each link
    link.addEventListener("click", function () {
      for (let index = 0; index < links.length; index++) {
        const element = links[index];
        //removes active class from link
        element.classList.remove("active");
      }
    });
  });
})();
