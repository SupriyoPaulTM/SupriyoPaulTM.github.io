const formContainer = document.getElementById('form-container');
document.getElementById('add-btn').onclick = function() {
  formContainer.classList.toggle('active');
}
document.getElementById('back-btn').onclick = function() {
  formContainer.classList.toggle('active');
}

const containerItems = document.getElementById('container-items');
const pupup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

let myHTML = "";
let localString = localStorage.getItem('localData');
let localStudentData = [];
if (localString !== null) {
  localStudentData = JSON.parse(localString);
}

function saveToLocal() {
  let localString = JSON.stringify(localStudentData);
  localStorage.setItem ('localData', localString);
  render();
}

function render() {
  if (localStudentData.length < 1 ) {
    containerItems.innerHTML = '<div class="tooltip">No records found, Add now!</div>';
  } else {
    myHTML = '<table><tr><th>Sl No</th><th>Name</th><th>Class</th><th>Action</th>';
    let n = 1;
    for (let i in localStudentData) {
      myHTML += `
      <tr class="itemRow">
      <td>${n}</td>
      <td>${localStudentData[i].firstName} ${localStudentData[i].lastName}</td>
      <td>${localStudentData[i].classNumber}</td>
      <td>
      <button class="material-icons btn edit" onclick="editstudent(${i})">edit</button>
      <button class="material-icons btn del" onclick="delstudent(${i})">delete</button>
      </td>`;
      n++;
      }
      myHTML += '</table>'
      containerItems.innerHTML = myHTML;
  }
}

document.getElementById('submit-btn').onclick = function() {
  let fName = document.getElementById('fname').value.trim();
  let lName = document.getElementById('lname').value.trim();
  let clsNum = document.getElementById('class').value;
  localStudentData.push({"firstName" : fName, "lastName" : lName, "classNumber" : clsNum});
  saveToLocal();
  render();
}

function editstudent(n) {
  popup.classList.add('active');
  overlay.classList.add('active');
  document.getElementById('editfname').value = localStudentData[n].firstName;
  document.getElementById('editlname').value = localStudentData[n].lastName;
  document.getElementById('editclass').value = localStudentData[n].classNumber;
  document.getElementById('saveEdit').onclick = function() {
    localStudentData[n].firstName = document.getElementById('editfname').value;
    localStudentData[n].lastName = document.getElementById('editlname').value;
    localStudentData[n].classNumber = document.getElementById('editclass').value;
    saveToLocal();
    closeMenu();
    render();
  }
}

overlay.onclick = closeMenu;
function closeMenu() {
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

function delstudent(n) {
  if (confirm('Are you sure you want to delete?')) {
    localStudentData.splice(n,1);
    saveToLocal();
    render();
  }
}

render();