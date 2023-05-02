
import './style.css';
import loadPage from './modules/initialpageload';
import loadTable from './modules/maketable';


function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function navClick(){
    const addBtn = document.getElementById('addBtn')
    
    
    addBtn.addEventListener('click', openForm);
    
    
}

init();

function init() {
    loadPage();
    navClick();
    document.getElementById("formContainer").style.display = "none"
    loadTable();

}