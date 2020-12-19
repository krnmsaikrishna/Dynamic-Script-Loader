function filesattacher(){
//variables declaration
var s="";var l="filesattacher.js";var flag=(1*(-1));var sc="script";
var h=document.getElementsByTagName("head")[0];
var sl=document.getElementsByTagName(sc).length;

//searching for filesattacher script
for(var c=0;c<sl;c++){
s=document.getElementsByTagName(sc)[c].src;
var m=s.search("filesattacher.js");
if(m>=0){o=c;}}

//element creation array
var elem=new Array();
//javascript urls array
var js=new Array();
//stylesheets href array
var css=new Array();
var i,j=0;

//scripts urls here
js[0]="one.js";
js[1]="two.js";

//styles urls here
css[0]="one.css";
css[1]="two.css";

//creating script tags until array size.
for(i=0;i<js.length;i++){ elem[i]=document.createElement("script");
elem[i].setAttribute("type","text/javascript");
elem[i].setAttribute("src",js[i]);
document.getElementsByTagName("head")[0].appendChild(elem[i],h.childNodes[o]);}

//creating link tags until array size.
for(j=0;j<css.length;j++){
elem[j]=document.createElement("link");
elem[j].setAttribute("type","text/css");
elem[j].setAttribute("rel","stylesheet");
elem[j].setAttribute("href",css[j]);
document.getElementsByTagName("head")[0].appendChild(elem[j],h.childNodes[o]);}
};