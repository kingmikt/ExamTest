alert("Hello Myname is Duangkamol Ngisanthia")
let upload = document.getElementById('upload');
let outputBx = document.getElementById('outputBx');

upload.addEventListener('change', ()=>{
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    
    fr.onload = function(){
        outputBx.innerHTML = fr.result;
    };
});