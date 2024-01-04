
        var ul = document.getElementById("listcontainer");
        var input = document.getElementById("inputbox");

        function add() {
            var inputVal = input.value.trim();
            if (inputVal !== "") {
                var creation = document.createElement("li");
                creation.innerHTML = `
                    <input type="checkbox" onchange="toggleCheckbox(this)">
                    <span>${input.value}</span>
                    <button onclick="deleteI(event)">x</button>`;
                ul.append(creation);
                input.value = ""; // Clear the input after adding the task
            } else {
                alert("Please add any item");
            }
        }

        function deleteI(event) {
            event.target.parentElement.remove();
        }

        function toggleCheckbox(checkbox) {
            var span = checkbox.nextElementSibling; // Get the span element next to the checkbox
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
                span.style.color = "#888";
            } else {
                span.style.textDecoration = "none";
                span.style.color = "#000";
            }
        }
   