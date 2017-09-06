// 1. Reading file


// whem this element changes fire up the function

document.getElementById('fileloader').onchange = function (){

    // get the file representation in an object
    var file = document.getElementById('fileloader').files[0];

    // creqate a File reader object that will use to read the file using the file object created above

    var fileReader = new FileReader();

    fileReader.onload = function(e){
        var text =  e.target.result;
        document.getElementById('mytext').value = text;
    }

    fileReader.readAsText(file,'UTF-8');
    console.log(fileReader.readyState)
}


// 2. Save File
function saveFile(){
  var saveText =  document.getElementById('mytext').value;
  var textBlob = new Blob([saveText],{type: "text/plain"});
  var filename =  prompt("Enter file name")
  var link = document.createElement('a');
  link.download  = filename;

  if(window.URL != null){
    link.href = window.URL.createObjectURL(textBlob)
  }

  else{
    link.href = window.URL.createObjectURL(textBlob);
    link.onclick = destroy;
    link.style.display = "none";
    document.body.appendchild(link)
  }

  link.click()

}

function destroy(){
  document.body.removeChild(e.target)
}

function jsyntax(){
  var text =  document.getElementById('mytext').value;

  var names = ['for', 'var', 'if', 'else','function','document','getElementById'];


}
