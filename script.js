//your code here

// Get the input field and button elements
var input = document.getElementById("newTodoInput");
var addButton = document.getElementById("addTodoBtn");

// Get the ordered list element
var todoList = document.getElementById("todoList");

// Add event listener to the button for adding todos
addButton.addEventListener("click", function() {
  // Get the value from the input field
  var todoText = input.value.trim();

  // Validate if the todo item is not an empty string
  if (todoText !== "") {
    // Create a new list item
    var listItem = document.createElement("li");

    // Set the text of the list item
    listItem.textContent = todoText;

    // Add the new list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    input.value = "";
  }
});

// Add event listener to the todo list for marking todos as completed
todoList.addEventListener("click", function(event) {
  var target = event.target;
  // Check if the clicked element is a list item
  if (target.tagName.toLowerCase() === "li") {
    // Toggle the completed class on the clicked list item
    target.classList.toggle("completed");
  }
});
