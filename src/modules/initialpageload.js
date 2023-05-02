const menuOptions = ['All', 'Today', 'Week'];


function createHeader(){
    const header = document.createElement('div');
    header.setAttribute('id', 'headerContainer');
    const titleText = document.createElement('h1');
    titleText.setAttribute('id', 'titleText')
    titleText.textContent = "To Do List";
    header.appendChild(titleText);

    return header;
}

function createBtn(id, input){

    const btn = document.createElement('button');
    btn.setAttribute('id', id+'Btn');
    btn.textContent = input;


    return btn;
}

function createSideBar(){
    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'sideBarContainer');
    let i = 0;
    for (i in menuOptions){
        const newBtn = createBtn(menuOptions[i], menuOptions[i]);
        sideBar.appendChild(newBtn);
    }
    return sideBar;
}

function createProjectList(){
    const projectListContainer = document.createElement('div');
    projectListContainer.setAttribute = ('id', 'projectListContainer');
    const projectHeading = document.createElement('h2');
    projectHeading.setAttribute('id', 'projectHeading');
    projectHeading.innerHTML='Projects (put a drop down thing here)';
    projectListContainer.appendChild(projectHeading);
    const projectList = document.createElement('ol');
    projectList.setAttribute = ('id', 'projectList');
    projectListContainer.appendChild(projectList);
    const addProject = createBtn('addProject', '+ New Project')
    projectListContainer.appendChild(addProject);

    return projectListContainer;
}


function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id', 'mainContainer');
    const mainHeader = document.createElement('h2');
    mainHeader.setAttribute('id', 'mainHeader');
    main.appendChild(mainHeader);
    const empty = document.createElement('div');
    empty.setAttribute('id', 'empty');
    empty.innerHTML = 'No tasks to complete';
    main.appendChild(empty);
    return main;
}

function createTable(){
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', 'tableContainer');
    const tableBody = document.createElement('table');
    tableBody.setAttribute('id', 'itemTable');
    tableContainer.appendChild(tableBody)
    const row = document.createElement('tr');
    tableBody.appendChild(row);
    row.style.display = 'none';
    const title = document.createElement('th');
    // title.setAttribute('id', 'title');
    row.appendChild(title);
    const dueDate = document.createElement('th');
    // dueDate.setAttribute('id', 'dueDate');
    row.appendChild(dueDate);
    const project = document.createElement('th');
    // project.setAttribute('id', 'project');
    row.appendChild(project);
    const status = document.createElement('th');
    // status.setAttribute('id', 'status');
    row.appendChild(status);

    return tableContainer
}

function createFooter(){
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footerContainer');

    return footer;
}

function loadPage(){
    const content = document.getElementById('content');
    //header
    const header = createHeader();
    content.appendChild(header);  
    //create sidebar
    const sideBar = createSideBar();
    content.appendChild(sideBar); 
    //create project list
    const projects = createProjectList();
    sideBar.appendChild(projects);
    // main
    const main = createMain();
    content.appendChild(main);
    //create table
    const table = createTable()
    main.appendChild(table)
    //add btn
    const addBtn = createBtn('add', '+');
    main.appendChild(addBtn);  
    //footer
    const footer = createFooter();
    content.appendChild(footer);

    console.log(document.querySelector("#empty"))
}


export default loadPage;