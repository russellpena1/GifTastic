$(document).ready(function(){



var topics = ["Cheetah", "Flamingo", "Panda", "Tiger"];

function renderButtons() {

        // Deleting the movie buttons prior to adding new animal buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#animalButtons").empty();

        // Looping through the array of animals
        for (var i=0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each animal in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          
          // Adding a class
          a.addClass("animal");
          // Adding a data-attribute with a value of the animal at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the animal at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#animalButtons").append(a);
        }
      }

       // This function handles events where a animal button is clicked
      $("#addAnimal").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val().trim();

        // Adding animal from the textbox to our array
        animal.push(animal);

        // Calling renderButtons which handles the processing of our animal array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "animal"
      $(document).on("click", ".animal", displayAnimalInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

});