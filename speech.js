'use strict'
{
    var speechbnt = document.getElementById("speechbtn");
    var from = document.getElementById("from");
    const speech = new webkitSpeechRecognition();
    speech.lang = "ja"
    speechbtn.addEventListener("click", () =>{
        speechbtn.disabled = true;
        speech.start();
    })
    speech.onresult = (e) => {
        //console.log(e);
        speechbtn.disabled = false;
        speech.stop();
        if (e.results[0].isFinal){
            console.log(e.results[0][0].transcript);
            from.value = e.results[0][0].transcript
        }
    }
    speech.onsoundstart = ()=>{
        speechbnt.innerHTML= "録音中";
    };
    speech.onsoundend = ()=>{
        speechbnt.innerHTML= "録音開始";
    };
}