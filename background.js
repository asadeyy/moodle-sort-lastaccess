window.onload = function () {
  var body = document
    .getElementsByClassName("card-body")[1]
    .getElementsByClassName("card-text")[0]
    .getElementsByClassName("dropdown")[1]
    .getElementsByClassName("dropdown-menu");

  body[0].getElementsByClassName("dropdown-item")[1].click();

  setTimeout(function () {
    body[0].getElementsByClassName("dropdown-item")[1].click();
  }, 500);
  setTimeout(function () {
    body[0].getElementsByClassName("dropdown-item")[1].click();
  }, 2000);
};
