var img=['https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80','https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80','https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80','https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80','https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80']
var arr=[]
var clicks=0
var checkarr=[]
function load(){
const itag=document.getElementsByTagName("img")
while(itag.length!=0){
  itag[0].remove()
}
for(let i=1;i<=5;i++){
    var d
    do{
        d=Math.floor(Math.random()*5)
    }while(arr.includes(d))
    arr.push(d)
}
//console.log(arr)
var k=0;
var s=Math.floor(Math.random()*6)
var n=document.getElementsByClassName('img')
for(let i=0;i<6;i++){
if(i==s){
const imagetag=document.createElement("img")
imagetag.src=img[arr[0]]
imagetag.setAttribute('data-ns-test',`img${arr[0]+1}`)
n[i].append(imagetag)
}
else{
  // n[i].style.backgroundImage="url("+img[arr[k]]+")" 
  const imagetag=document.createElement("img")
imagetag.src=img[arr[k]]
imagetag.setAttribute('data-ns-test',`img${arr[k]+1}`)
n[i].append(imagetag)
  k++
}
}
}
function check(i){
clicks++;
checkarr.push(i)
document.getElementById("reset").style.display="flex"
document.getElementsByTagName('h3')[0].style.display="none"
if(clicks==2&&checkarr[0]!=checkarr[1]){
  document.getElementById("btn").style.display="flex"
}
else{
    document.getElementById("btn").style.display="none"
}
// console.log(v[i].style.backgroundImage)
}
function reset(){
arr=[]
clicks=0
checkarr=[]
load()
document.getElementsByTagName('h3')[0].style.display="flex"
document.getElementById("reset").style.display="none"
document.getElementById("btn").style.display="none"
 document.getElementById('para').style.display="none"
}
function verify(){
 document.getElementById("btn").style.display="none"
  var d=document.getElementsByClassName('img')
 document.getElementById('para').style.display="flex"
 var v= document.getElementById('para')
 //console.log(d[checkarr[0]].getElementsByTagName('img')[0].src==d[checkarr[1]].getElementsByTagName("img")[0].src)
  if(d[checkarr[0]].getElementsByTagName('img')[0].src==d[checkarr[1]].getElementsByTagName("img")[0].src){
   v.innerText="You are a human. Congratulations!"
  }
  else{
    v.innerText="We can't verify you as a human. You selected the non-identical tiles."
  }
}

