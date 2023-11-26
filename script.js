$('.open-btn').on('click', function () {
  $('.sidebar').addClass('active');
});

$('.close-btn').on('click', function () {
  $('.sidebar').removeClass('active');
});

// Toggle dropdown when the button is clicked
function toggleDropdown(btnId, contentId) {
  var dropdownContent = document.getElementById(contentId);
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
}

document.getElementById("dropdown1").addEventListener("click", function() {
  toggleDropdown("dropdown1", "content1");
});

document.getElementById("dropdown2").addEventListener("click", function() {
  toggleDropdown("dropdown2", "content2");
});

document.getElementById("dropdown3").addEventListener("click", function() {
  toggleDropdown("dropdown3", "content3");
});

document.getElementById("dropdown4").addEventListener("click", function() {
  toggleDropdown("dropdown4", "content4");
});

// dropdown active the another active button
 