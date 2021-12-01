var inputTxt = document.querySelector("#input-text");
var translateBtn = document.querySelector("#btn");
var outputDiv = document.querySelector(".outputdiv");
translateBtn.addEventListener('click', clickhandler);
var url = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    return url+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Error occured please try again after some time");
}
function clickhandler(){
     var txtInput = inputTxt.value;
     fetch(getTranslationUrl(txtInput))
     .then(response=>response.json())
     .then(json=>{
         var translatedText = json.contents.translated
         outputDiv.innerText = translatedText
     })
     .catch(errorHandler)
}
