document.getElementById("button").addEventListener("click", addTask);
document.getElementById("text-area").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
function addTask() {
    let taskText = document.getElementById("text-area").value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    let newElement = document.createElement("div");
    newElement.className = "element";
    newElement.innerHTML = `${taskText} <div class="element-button"><img src="x-thin.svg" height="20px"></img></div>`;

    newElement.addEventListener("click", function () {
        newElement.classList.toggle("completed");
    });

    newElement.querySelector(".element-button").addEventListener("click", function () {
        event.stopPropagation();
        newElement.remove();
    });

    document.getElementById("list-element").appendChild(newElement);

    document.getElementById("text-area").value = "";
}