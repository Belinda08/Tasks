let tasks = []; // Array to store tasks with their rankings

function addTask() {
  // Get values from input fields
  var Plan = document.getElementById("plan").value;
  var Ranking = parseInt(document.getElementById("ranking").value); // Make sure it's a number
  
  // Validate input
  if (!Plan || isNaN(Ranking)) {
    alert("Please enter a valid activity and ranking");
    return;
  }

  // Add the new task to the tasks array
  tasks.push({ rank: Ranking, task: Plan.toUpperCase() });

  // Sort the tasks array by rank
  tasks.sort((a, b) => a.rank - b.rank);

  // Clear the existing list in the DOM
  var plansList = document.getElementById("planList");
  plansList.innerHTML = ""; // Clear the list

  // Rebuild the sorted list in the DOM
  tasks.forEach(function(item) {
    var newItem = document.createElement("li");
    newItem.textContent = item.rank + ". " + item.task;
    plansList.appendChild(newItem);
  });

  // Clear input fields
  document.getElementById("plan").value = "";
  document.getElementById("ranking").value = "";
}

function removeTask() {
  // Get the ranking to remove from the input field
  var rankingToRemove = parseInt(document.getElementById("removal").value);
  
  // Validate input
  if (isNaN(rankingToRemove)) {
    alert("Please enter a valid ranking to remove.");
    return;
  }

  // Find the index of the task with the given ranking
  const index = tasks.findIndex(task => task.rank === rankingToRemove);

  // If the task is found, remove it
  if (index !== -1) {
    tasks.splice(index, 1);  // Remove the task from the array

    // Re-sort the tasks array
    tasks.sort((a, b) => a.rank - b.rank);

    // Clear the list in the DOM and rebuild it
    var plansList = document.getElementById("planList");
    plansList.innerHTML = ""; // Clear the list

    // Rebuild the sorted list in the DOM
    tasks.forEach(function(item) {
      var newItem = document.createElement("li");
      newItem.textContent = item.rank + ". " + item.task;
      plansList.appendChild(newItem);
    });

    // Clear the removal input field
    document.getElementById("removal").value = "";
  } else {
    alert("Task with the specified ranking not found.");
  }
}