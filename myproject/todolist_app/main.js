let toDoList = ["Learn JavaScript", "Buy Milk", "Create Portfolio", "Make Progress Report", "Go to Marriage Function"];
const textInput = document.getElementById("text-input");
const container = document.getElementById("container");
const count = document.getElementById("count");

function addToList() {
  let inpt = textInput.value;
  inpt = inpt.trim();
  if (inpt == "") {
    alert("Input Field is Empty");
  } else {
    toDoList.push(inpt);
    textInput.value = "";
    render(q);
  };
};

function clearList() {
  toDoList = [];
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
    if (toDoList[i].toLowerCase().includes(q) || q=="") {
      const box = document.createElement("div");
      const info = document.createElement("div");
      const checkBtn = document.createElement("button");
      const delBtn = document.createElement("button");
      box.classList.add("list-item");
      info.textContent = (i+1) + ". " + toDoList[i];
      checkBtn.addEventListener("click", () => {
        box.classList.add("done");
      });
      delBtn.addEventListener("click", () => {
        toDoList.splice(i, 1);
        render(q);
      });
      checkBtn.classList.add("material-icons");
      delBtn.classList.add("material-icons");
      checkBtn.textContent = "done";
      delBtn.textContent = "delete";
      box.append(info, checkBtn, delBtn);
      container.appendChild(box);
    };
  };
  count.textContent = toDoList.length;
};

render(q);