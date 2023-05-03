
import './style.css';
import loadPage from './modules/initialpageload';
import loadTable from './modules/maketable';



function openForm(ContainerID) {
    console.log('hey')
    document.getElementById(ContainerID).style.display = "block";
    console.log(document.getElementById(ContainerID))
}

function closeForm(formID) {
    let form = document.getElementById(formID);
    form.reset();
    console.log(form.parentNode);
    form.parentNode.style.display = "none";
}


function navClick(){
    const addItemBtn = document.getElementById('addItemBtn');
    const addProjectBtn = document.getElementById('addProjectBtn');
    // const closeItemBtn = document.getElementById('itemCloseBtn')
    // const closeProjectBtn = document.getElementById('projectCloseBtn')


    addItemBtn.addEventListener('click', () => {
        document.getElementById('itemFormContainer').style.display = "block";
    });
    addProjectBtn.addEventListener('click', () => {
        document.getElementById('projectFormContainer').style.display = "block";
    });
    // closeItemBtn.addEventListener('click', closeForm('itemForm'));
    // closeProjectBtn.addEventListener('click', closeForm('projectForm'));
    
}

init();

function init() {
    loadPage();
    document.getElementById("itemFormContainer").style.display = "none";
    document.getElementById("projectFormContainer").style.display = "none";
    navClick();
    loadTable();

}