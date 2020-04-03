var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dear.JPG'){
        myImage.setAttribute('src', 'images/dear2.JPG');
    }else{
        myImage.setAttribute('src','images/dear.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === null){
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'dearはすばらしいよ、' + myName;
    }
}
    
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'dearはすばらしいよ、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}