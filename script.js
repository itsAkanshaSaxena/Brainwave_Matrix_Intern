// when i add the work then only task should get displayed
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
        alert("You must write something!!");
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
// adding functionality that if i click on circle task should be ticked and when i click on the cross button task shold get cutt
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();

    }
},false);
//store the tasks in the browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();