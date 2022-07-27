const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputText = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"));
console.log(JSON.stringify(LeadsFromLocalStorage));
const tabBtn = document.getElementById("tab-btn");
const clearBtn = document.getElementById("clear-btn")
if(LeadsFromLocalStorage){
    myLeads = myLeads.concat(LeadsFromLocalStorage);
    render(myLeads);
}
function render(arr){
    ulEl.innerHTML = ""
    for(let i = 0; i< arr.length; i++){
        ulEl.innerHTML += `<li>
        <a target = '_blank' href = ${arr[i]} >
         ${arr[i]} 
        </a>
        </li>`
        //M2 to add elements in HTML via JS
        // const li = document.createElement("li");
        // li.textContent = inputText.value;
        // ulEl.append(li);
    }
}

function Save(val){
    myLeads.push(val)
    console.log(myLeads);
    render(myLeads);
    localStorage.setItem("Leads",JSON.stringify(myLeads));
}
inputBtn.addEventListener("click", function (){
    Save(inputText.value);
    inputText.value = "";
})
clearBtn.addEventListener("click", function (){
    ulEl.innerHTML = '';
    myLeads = [];
    localStorage.clear();
})
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    Save(tabs[0].url)
    })
    
})
