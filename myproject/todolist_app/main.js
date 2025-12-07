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
    toDoList.push({"text": inpt, "done": false});
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
  
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].text.toLowerCase().includes(q) || q=="") {
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
      if (toDoList[i].done === true) {
        box.classList.add("done");
      };
      info.textContent = toDoList[i].text;
      checkBtn.addEventListener("click", () => {
        toDoList[i].done = !toDoList[i].done;
        saveToLocal();
        render(q);
      });
      delBtn.addEventListener("click", () => {
        toDoList.splice(i, 1);
        saveToLocal();
        render(q);
      });
      menuBtn.addEventListener("click", () => {
        optionBox.classList.toggle("active");
      });
      editBtn.addEventListener("click", () => {
        info.replaceWith(editBox);
        menuBtn.style.display = "none";
        inputBox.value = toDoList[i].text;
      });
      editDone.addEventListener("click", () => {
        toDoList[i].text = inputBox.value;
        saveToLocal();
        render(q);
      });
      box.classList.add("list-item");
      optionBox.classList.add("option-box");
      menuBtn.classList.add("material-icons", "menu");
      dragBtn.classList.add("material-icons");
      checkBtn.classList.add("material-icons");
      delBtn.classList.add("material-icons");
      editBtn.classList.add("material-icons");
      editDone.classList.add("material-icons");
      editBox.classList.add("edit-box");
      menuBtn.textContent = "arrow_drop_down";
      dragBtn.textContent = "drag_indicator";
      checkBtn.textContent = "done";
      delBtn.textContent = "delete";
      editBtn.textContent = "edit";
      editDone.textContent = "done";
      editBox.append(inputBox, editDone);
      menuBtn.append(optionBox);
      optionBox.append(checkBtn, editBtn, delBtn)
      box.append(dragBtn, info, menuBtn);
      container.appendChild(box);
    };
  };
  count.textContent = toDoList.length;
};

function saveToLocal() {
  let jsonData = JSON.stringify(toDoList);
  localStorage.setItem("toDoListData", jsonData);
};

render(q);