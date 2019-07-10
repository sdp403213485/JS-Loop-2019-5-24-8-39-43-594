
var a=1; 

label1:for(var i=1;i<=9;i++){
document.write("<br>");
for(var j=1;j<=9;j++){
if(j>i){
continue label1;
}
document.write(i+"*"+j+"="+i*j+" ");
}
}
