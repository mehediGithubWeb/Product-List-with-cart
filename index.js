var products = document.querySelectorAll(".product");

for (var i = 0; i < products.length; i++) {
  (function (currentIndex) {
    var numbers = 0; // Make numbers specific to each product

    var minus =
      '<svg class="minus" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>';
    var plus =
      '<svg class="plus" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>';

    function changeHTML() {
      var newTexts = document.querySelectorAll(".addCart")[currentIndex];
      newTexts.innerHTML = minus + "      " + numbers + "      " + plus;

      // Add event listener to the new plus button

      newTexts.querySelector(".plus").addEventListener("click", function () {
        numbers++;
        console.log("Product " + currentIndex + ": " + numbers);
        changeHTML(); // Update the HTML again to reflect new number
      });

      // Add event listener to the new minus button
      newTexts.querySelector(".minus").addEventListener("click", function () {
        if (numbers > 0) numbers--;
        console.log("Product " + currentIndex + ": " + numbers);
        changeHTML(); // Update the HTML again to reflect new number
      });
    }
    document
      .querySelectorAll(".addCart")
      [currentIndex].addEventListener("click", function () {
        changeHTML();
        document
          .querySelectorAll(".addCart")
          [currentIndex].classList.add("pressed");
      });
  })(i); // IIFE FUNCTION
}
