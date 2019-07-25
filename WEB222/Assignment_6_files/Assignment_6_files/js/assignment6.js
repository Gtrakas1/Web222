// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1


window.onload=function(){
	makeRequest(1);
}


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	var url= "https://reqres.in/api/users?page="+pageNum;


	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var tbody=document.querySelector("#data");
			tbody.innerHTML="";
			
			for(var i=0;i<jsData.data.length;i++)
			{
				var row=document.createElement("tr");
				var cell=document.createElement("td");
				var id= document.createTextNode(jsData.data[i].id);
				cell.appendChild(id);
				row.appendChild(cell);
				
				var cell1=document.createElement("td");
				var fname=document.createTextNode(jsData.data[i].first_name);
				cell1.appendChild(fname);
				row.appendChild(cell1);
				
				var cell2=document.createElement("td");
				var lname=document.createTextNode(jsData.data[i].last_name);
				cell2.appendChild(lname);
				row.appendChild(cell2);
				
				var cell3=document.createElement("td")
				var avatar=document.createElement("img");
				avatar.setAttribute("src",jsData.data[i].avatar);
				cell3.appendChild(avatar);
				row.appendChild(cell3);
				
				
				tbody.appendChild(row);
			}




			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			var pages=document.getElementsByClassName("#pgbtn");
			for(var i=0;i < jsData.pages.length; i++){
			   pages[i].classList.remove("active");
			   
			}
			
			
			
			
			
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			var pagbtn=jsData.page;
			  pages[pagbtn-1].classList.add("active")
			
			
			
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	