import moment from "moment";
function loadTable() {
  let myList = [];
  let projectList = [{ projectTitle: "none" }];
  let tableStatus = "";
  let tableStatusClass = "";
  let filterOn = "all";

  const $title = document.querySelector("#title");
  const $dueDate = document.querySelector("#dueDate");
  const $project = document.querySelector("#project");
  const $status = document.querySelector("#status");
  const $table = document.querySelector("#itemTable");
  const $empty = document.querySelector("#empty");
  const $projectTitle = document.getElementById("projectFormInputTitle");

  //add task Btn
  document.querySelector("#itemForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addItemToList();
    makeTable();
    closeItemForm();
  });

  document.querySelector("#projectSubmitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    addProjectToList();
    makeProjectList();
    closeProjectForm();
  });
  //Close Btns
  document
    .querySelector("#itemCloseBtn")
    .addEventListener("click", closeItemForm);
  document
    .querySelector("#projectCloseBtn")
    .addEventListener("click", closeProjectForm);

  //Table Btns
  $table.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Delete") {
      let currentTargetTitle =
        e.target.parentNode.parentNode.childNodes[1].innerText;
      deleteItem(findItem(myList, currentTargetTitle));
    } else {
      return;
    }
    makeTable();
  });

  $table.addEventListener("click", (e) => {
    if (e.target.id === "status") {
      let currentTargetTitle =
        e.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
      deleteItem(findItem(myList, currentTargetTitle));
    } else {
      return;
    }

    makeTable();
  });

  document.querySelector("#projectList").addEventListener("click", (e) => {
    if (e.target.innerHTML === "Delete") {
      let currentTargetTitle =
        e.target.parentNode.parentNode.childNodes[1].innerText;
      deleteProject(findProject(projectList, currentTargetTitle));
    } else {
      let currentTargetTitle = e.target.parentNode.childNodes[1].innerText;
      filterOn = `${currentTargetTitle}`;
    }
    console.log(filterOn);
    makeProjectList();
    makeTable();
    filterTable();
  });
  document.querySelector("#sideBarContainer").addEventListener("click", (e) => {
    if (e.target.innerHTML === "Today") {
      filterOn = "today";
    } else if (e.target.innerHTML === "Week") {
      filterOn = "week";
    } else if (e.target.innerHTML === "All") {
      filterOn = "all";
    }
    makeProjectList();
    makeTable();
    filterTable();
  });
  class Item {
    constructor(title, dueDate, project, status) {
      this.title = title;
      this.dueDate = dueDate;
      this.project = project;
      this.status = status;
    }
  }

  function closeItemForm() {
    $title.value = "";
    $dueDate.value = "";
    document.querySelector("#dueDate").reset;
    document.querySelector("#itemFormContainer").style.display = "none";
  }

  function closeProjectForm() {
    $projectTitle.value = "";
    document.querySelector("#projectFormContainer").style.display = "none";
  }

  function addItemToList() {
    const newItem = new Item($title.value, $dueDate.value, $project.value);

    myList.push(newItem);
  }

  function changeStatus(currentItem) {
    //   if(myList[currentItem].status === 'complete')
    //      {return myList[currentItem].status = 'incomplete'}
    //      else{
    //         return myList[currentItem].status = 'complete'
    //     }
  }

  function deleteItem(currentItem) {
    myList.splice(currentItem, 1);
  }

  function filterTable() {
    let checkArray = document.querySelectorAll("#itemTable input:nth-child(1)");
    if (filterOn === "all") {
      for (const element of checkArray) {
        if (element.checked) {
          element.parentNode.parentNode.parentNode.style.display = "none";
        } else {
          element.parentNode.parentNode.parentNode.style.display = "inherit";
        }
      }
      return;
    } else if (filterOn === "today") {
      const today = moment(new Date()).format("YYYY-MM-DD");

      let array = document.querySelectorAll("#itemTable td:nth-child(2)");

      for (const element of array) {
        if (element.innerHTML !== today) {
          element.parentNode.style.display = "none";
        }
      }
    } else if (filterOn === "week") {
      const week = moment(new Date()).add(7, "days").format("YYYY-MM-DD");
      let array = document.querySelectorAll("#itemTable td:nth-child(2)");

      for (const element of array) {
        if (!moment(String(element.innerHTML)).isBefore(String(week))) {
          element.parentNode.style.display = "none";
        }
      }

      moment(new Date()).add(7, "days").format("YYYY-MM-DD");
    } else {
      let array = document.querySelectorAll("#itemTable td:nth-child(3)");
      console.log(array);
      for (const element of array) {
        console.log(element.innerHTML);
        if (element.innerHTML !== filterOn) {
          element.parentNode.style.display = "none";
        }
      }
    }
  }

  function makeTable() {
    if (myList.length > 0) {
      $empty.style.display = "none";
    } else {
      $empty.style.display = "inherit";
    }

    document.querySelector("#itemTable").innerHTML = "";

    myList.forEach((item) => {
      // if (item.status.checked === true){
      //     tableStatus = "complete"
      //     tableStatusClass = "complete"
      // }
      // else {
      //     tableStatus = "incomplete"
      //     tableStatusClass = "incomplete"
      // }
      const itemData = `
        <tr>
        <td>${item.title}</td>
        <td>${item.dueDate}</td>
        <td>${item.project}</td>
        <td><form><input type="checkbox" name="status" id="status" class="changeStatusBox ${tableStatusClass}"></td>
        <td><button class="deleteBtn btn">Delete</td>
        </tr>
        `;
      $table.insertAdjacentHTML("afterbegin", itemData);
    });
  }

  function findItem(array, titleToFind) {
    for (let element of array)
      if (element.title === titleToFind) {
        return array.indexOf(element);
      }
  }

  class Project {
    constructor(projectTitle) {
      this.projectTitle = projectTitle;
    }
  }

  function addProjectToList() {
    const newProject = new Project($projectTitle.value);
    projectList.push(newProject);
  }

  function makeProjectList() {
    document.querySelector("#projectList").innerHTML = "";
    document.querySelector("#project").innerHTML = "";

    projectList.forEach((project) => {
      const itemData = `
        <tr>
            <td>${project.projectTitle}</td>
            <td><button class="deleteBtn btn">Delete</td>
        </tr>`;
      document
        .querySelector("#projectList")
        .insertAdjacentHTML("afterbegin", itemData);
      const dropDown = `
        <option value = "${project.projectTitle}">${project.projectTitle}</option>
        `;
      document
        .querySelector("#project")
        .insertAdjacentHTML("afterbegin", dropDown);
    });
  }

  function findProject(array, titleToFind) {
    for (let element of array)
      if (element.projectTitle === titleToFind) {
        return array.indexOf(element);
      }
  }
  function deleteProject(currentItem) {
    projectList.splice(currentItem, 1);
  }

  makeProjectList();
}
export default loadTable;
