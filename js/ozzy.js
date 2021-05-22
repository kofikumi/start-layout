(function () {
  var links = document.querySelectorAll("a");
  // looping through the links
  links.forEach(function (link) {
    // adding event listeners to each link
    link.addEventListener("click", function () {
      links.forEach(function (list) {
        list.classList.remove("active");
      });
      //get the cliked link and add a class of active to the link
      if (link) {
        this.classList.add("active");
      }
    });
  });
})();
