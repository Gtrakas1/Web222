// Data for the "HTML Lists" Page
window.onload= function(){
var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

var fruitContainer=document.querySelector("#outputfruit");
    var FruitList="<ol>";
    for (var i=0;i <fruits.length;i++)
    {
        FruitList+="<li>"+fruits[i]+"</li>";
    }
    FruitList+="</ol>";
    fruitContainer.innerHTML = FruitList;

var directlistContainer=document.querySelector("#outputdir")
//start nested list
var dirlist= "<ul>";
//loop nested list name property
for (var i=0;i<directory.length;i++)
{
    dirlist += "<li>"+directory[i].name;
//if statement to point to directory
if(directory[i].type === 'directory')
{
    dirlist+= '<ul style="list-style-type: square">';
    //for loop to point to files within directory
    for (var j=0;j<directory[i].files.length;j++)
    {
        dirlist+="<li>"+directory[i].files[j].name +"</li>";
}
//end directory property loop
dirlist += "</ul>";
}
//end directory name loop
dirlist += "</li>";
}
//end object loop
dirlist +="</ul>";
//point toward the directory list
directlistContainer.innerHTML=dirlist;
};
    