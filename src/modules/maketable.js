function loadTable(){
let myList = [];
let tableStatus = "";
let tableStatusClass = "";

const $title = document.querySelector("#title");
const $dueDate = document.querySelector("#dueDate");
const $project = document.querySelector("#project");
const $status = document.querySelector("#status");
const $table = document.querySelector("#itemTable");
const $empty = document.querySelector("#empty");
const $formSubmit = document.querySelector("#form").addEventListener('submit', (e) => {
    e.preventDefault();
    addItemToList();
    makeTable();
    document.getElementById("form").reset();
    console.log(myList[0].title)
});
const $formClose = document.querySelector("#closeBtn").addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("form").reset();
    document.getElementById("formContainer").style.display = "none";
});
const $tableButtons = $table.addEventListener('click', (e) =>{
    if (e.target.innerHTML === "Delete"){
        let currentTargetTitle = e.target.parentNode.parentNode.childNodes[1].innerText
        deleteItem(findItem(myList, currentTargetTitle))
    }
    else {
        let currentTargetTitle = e.target.parentNode.parentNode.parentNode.childNodes[1].innerText
        console.log(myList)
        changeStatus(findItem(myList, currentTargetTitle))
    }

    makeTable();

})
class Item {
    constructor(title, dueDate, project, status){
    this.title = title
    this.dueDate = dueDate
    this.project = project
    this.status = status
}
};


function addItemToList() {
    const newItem = new Item($title.value, $dueDate.value, $project.value, $status.value);

    myList.push(newItem);

}


function changeStatus(currentItem){
    console.log(currentItem)
    if (myList[currentItem].status.checked === true){
       return myList[currentItem].status.checked =false;
    }
    if (myList[currentItem].status.checked=false){
        return myList[currentItem].status = true;
    };
}

function deleteItem(currentItem){
    console.log(currentItem)
    myList.splice(currentItem, 1)
}


function makeTable(){
    
    if (myList.length > 0){
        $empty.style.display = "none";
    }
    else {$empty.style.display = "inherit"}

    
    document.querySelector("#itemTable").innerHTML = "";
    
    myList.forEach(item => {
        if (item.status.checked === true){
            tableStatus = "complete"
            tableStatusClass = "complete"
        }
        else {
            tableStatus = "incomplete"
            tableStatusClass = "incomplete"
        }
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

    function findItem(array, titleToFind){

        for (let element of array)
        if (element.title === titleToFind){
            return array.indexOf(element)
            }
    }
}

export default loadTable;