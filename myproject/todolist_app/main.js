let toDoList = [];

let localString = localStorage.getItem("toDoListData");
if (localString !== null) {
  toDoList = JSON.parse(localString);
};

const textInput = document.getElementById("text-input");
const container = document.getElementById("container");
const count = document.getElementById("count");

function addToList() {
  let inpt = textInput.value;
  inpt = inpt.trim();
  if (inpt == "") {
    alert("Input Field is Empty");
  } else {
    toDoList.push({"text": inpt, "done": false, "priority": 0});
    textInput.value = "";
    saveToLocal();
    render(q);
  };
};

function clearList() {
  toDoList = [];
  saveToLocal();
  render(q);
};

const searchInput = document.getElementById("search-input");
let q = searchInput.value.toLowerCase();
searchInput.addEventListener("input", () => {
  q = searchInput.value.toLowerCase();
  render(q);
});

function render(q) {
  if (toDoList.length == 0) {
    document.querySelector(".tooltip").style.display = "block";
  } else {
    document.querySelector(".tooltip").style.display = "none";
  };
  
  if (container.children.length > 2) {
    document.querySelectorAll(".list-item").forEach((e) => {
      e.remove();
    });
  };
  
  let displayList = toDoList.slice();
  if (sortOrder === "highToLow") {
    displayList.sort(function(a,b){return(b.priority-a.priority)});
  } else if (sortOrder === "lowToHigh") {
    displayList.sort(function(a,b){return(a.priority-b.priority)});
  };
  
  
  for (let i = 0; i < displayList.length; i++) {
    const originalIndex = toDoList.indexOf(displayList[i]);
    if (displayList[i].text.toLowerCase().includes(q) || q=="") {
      const box = document.createElement("div");
      const info = document.createElement("div");
      const menuBtn = document.createElement("button");
      const dragBtn = document.createElement("button");
      const optionBox = document.createElement("div");
      const checkBtn = document.createElement("button");
      const delBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      const editBox = document.createElement("div");
      const inputBox = document.createElement("input");
      const editDone = document.createElement("button");
      const highBtn = document.createElement("button");
      const midBtn = document.createElement("button");
      const lowBtn = document.createElement("button");
      if (displayList[i].done === true) {
        box.classList.add("done");
      };
      if (displayList[i].priority === 2) {
        box.classList.add("high");
      } else if (displayList[i].priority === 1) {
        box.classList.add("medium");
      } else {
        box.classList.add("low");
      };
      info.textContent = displayList[i].text;
      checkBtn.addEventListener("click", () => {
        toDoList[originalIndex].done = !toDoList[originalIndex].done;
        saveToLocal();
        render(q);
      });
      delBtn.addEventListener("click", () => {
        if (confirm("Are you sure?")) {
          box.classList.add("delete");
          setTimeout(function() {
            toDoList.splice(originalIndex, 1);
            saveToLocal();
            render(q);
          }, 600);
        };
      });
      menuBtn.addEventListener("click", () => {
        optionBox.classList.toggle("active");
      });
      editBtn.addEventListener("click", () => {
        info.replaceWith(editBox);
        menuBtn.style.display = "none";
        inputBox.value = toDoList[originalIndex].text;
      });
      editDone.addEventListener("click", () => {
        toDoList[originalIndex].text = inputBox.value;
        saveToLocal();
        render(q);
      });
      highBtn.addEventListener("click", () => {
        toDoList[originalIndex].priority = 2;
        saveToLocal();
        render(q);
      });
      midBtn.addEventListener("click", () => {
        toDoList[originalIndex].priority = 1;
        saveToLocal();
        render(q);
      });
      lowBtn.addEventListener("click", () => {
        toDoList[originalIndex].priority = 0;
        saveToLocal();
        render(q);
      });
      box.classList.add("list-item");
      box.setAttribute("draggable", true);
      optionBox.classList.add("option-box");
      menuBtn.classList.add("material-icons", "menu");
      dragBtn.classList.add("material-icons");
      editDone.classList.add("material-icons");
      editBox.classList.add("edit-box");
      menuBtn.textContent = "arrow_drop_down";
      dragBtn.textContent = "drag_indicator";
      checkBtn.textContent = "Mark as done";
      delBtn.textContent = "Delete";
      editBtn.textContent = "Edit";
      editDone.textContent = "done";
      highBtn.textContent = "Set As High";
      midBtn.textContent = "Set As Medium";
      lowBtn.textContent = "Set As Low";
      editBox.append(inputBox, editDone);
      menuBtn.append(optionBox);
      optionBox.append(checkBtn, editBtn, delBtn, highBtn, midBtn, lowBtn)
      box.append(dragBtn, info, menuBtn);
      container.appendChild(box);
    };
  };
  count.textContent = displayList.length;
};

function saveToLocal() {
  let jsonData = JSON.stringify(toDoList);
  localStorage.setItem("toDoListData", jsonData);
};

const sortBtn = document.getElementById("sortBtn");
let sortOrder = "default";
sortBtn.onclick = function () {
  if (sortOrder === "default") {
    sortOrder = "highToLow";
    sortBtn.textContent = "High to Low";
    render(q);
  } else if (sortOrder === "highToLow") {
    sortOrder = "lowToHigh";
    sortBtn.textContent = "Low to High";
    render(q);
  } else {
    sortOrder = "default";
    sortBtn.textContent = "Default";
    render(q);
  };
};



render(q);