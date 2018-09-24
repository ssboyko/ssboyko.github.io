  var link = document.querySelector(".booking-form-title");
  var popup = document.querySelector(".booking-form");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
  });
