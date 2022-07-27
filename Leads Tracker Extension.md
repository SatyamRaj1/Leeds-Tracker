- create input with type text and id input-el
`<input id = 'input-el' type = 'text'>`
		-  input tag is empty tag so no closing tag
<input id = 'input-el' type = 'text'> <button id = 'input-btn' >SAVE INPUT</button>
- create save button
### Event Listner
- used in javascript to find any event like button clicked
- used by professionals
- example
`let btn = document.getElementById("button")`
`btn.addEventListner("click", function() { ... body of function	}`		
***for double click use dblclick***
- syntax 
`element.addEventListner(event_to_be_listen, action_to_be_taken(what_we_do))`
### Getting value from input field of HTML in Javascript
#### using InnerHTML
- use `document.getElementById("element_id").value`
- after getting value set it's value to "" to clear input field after saving
### displaying value in list form on Webpage
- make a unordered/ordered list tag in HTML with a id (here use "ul-el")
- store element in JS from getElementById (here in ulEl)
##### adding \<li> element using innerHTML
- replace textcontent property with innerHTML and then add \<li> as a string
`ulEL.innerHTML += "<li> Apple </li>"`
#### using createElement
- create element li
- set textcontent
- append to main(superior tag)
`const li = document.createElement("li")
li.textContent = inputEl.value
ulEl.append(li)`

### \<a\> tag with \<li\>
- making each list itm a link
- use `<li><a href = '#'>link1</a></li> `
- to open a new page upon clicking use `target = _blank` attribute in \<a\> tag

## CSS Design
- to design links desigh through `a {..}`
- if we want to specify design of only listed links use `li a {..}`

# Deployement
#### JSON
- Javascript object notation
- way to store and send data eg. from a server to a client
- here in object use keys in double quotes
`{
    "manifest_version": 3,
    "version": "1.1",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    }
}`
- manifest_version -> version of JSON
- version -> our object/extension/app version
- name -> name of extension
- action -> configure what happens to our application when user clicks on it (meets of our application)
		- default_icon -> icon shown at extension mark(when we click on extension from puzzle bar icon show near it)
		- default_popup -> what to popup (web page name)

### Developer Mode Chrome
- open chrome extension
- enable developer mode option
- click on load unpacked and select folder which contains code
- extension is at chrome

# Storing data after each refresh
- each time we close our pop up box our data gets cleaned bcoz it's equivalent to refresh page so our data is lost
- so we need to store data locally 
# Local Storage
- every web page stores data in personal(local browser) that is unique for all 
- go yo `Inspect -> Applications(OR Storage) -> Local Storage` we will find some key value pairs i.e our data stored in our local browser by website
- to clear data use `localStorage.clear()`
- to insert value use `localStorage.setItem(key,value)` both key and value in quotes
- we can use it in JS
- if in javascript we do `localStorage.setItem(key,value)` and then run then if we even if we remove from JS our browser remembers it so we can use `localStorage.getItem(key) to get that item`
### Storing data in local storage as array
- use `JSON.stingify(array_name)` and `JSON.parse(string_value)`
-  code :
			var names = [];
			names[0] = prompt("enter your name");
			localStorage.setItem("names", JSON.stringify(names));
			JSON.parse(localStorage.getItem("names"))
- this can be used to convert strings to arrays and vice versa
- also can convert JSON objects to JS objects and vice versa
- JSON objects have keys also in strings
## getting items from local storage
- upto above after refreshing we won't get data stored before refreshing but it is saved in local Storage
- so using localStorage.getItem() we can get them
- if there is no key it will return null

# Arguements
using function - function(parameter1,para2)
declaring - function function_name(arg,arg2) -> no need of data type
### when don't know no. of arguements
- use `arguements` inside function to get all arguements(parameter can be of any no.)
-*** eg.*** function add(nums) { console.log(arguments); }
add(4, 5, 7, 8, 12)
- `arguements` will have all arguements as object with their index as keys
#### ES6 Method
- in ES6 we can use rest(...) operator to get all arguements as array
- ***eg.***  function add(...nums) { console.log(nums); }
add(4, 5, 7, 8, 12)
# Grabbing current tab(url) in chrome
- use chrome API
- add permission for tabs in manifest.json
	- in object add key `"permission" : [ "tabs" ], `
- in JS in eventListener of saveTab button (used to save current url) add `chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//functions to be performed
// url in tabs[0].url
})` 

- meaning of line is as follows
	- chrome.tabs.query   -> it will query some of the tabs of the chrome(those tabs which will meet condition mentioned in object inside as arguement)
	- {active refers to current tab (if many tabs are open then select current one if it is mentioned true)}
	- currentWindow if many chrome windows are open then current winfow
	- then a callback function with arguement `tabs`
	- structure of tabs is`tabs = [ { url : current_tab_url } ]`