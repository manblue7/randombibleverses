import bible from './kjv.json' assert { type: 'json' };

document.getElementById('ver').addEventListener('click', generateVerse);
document.getElementById('ps').addEventListener('click', generatePsalm);
document.getElementById('pro').addEventListener('click', generateProverb);
function generateVerse() {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses = bible["verses"][vNum];
    let verses2 = "";
    if(bible["verses"][vNum - 1]["book_name"] == bible["verses"][vNum]["book_name"]) {
        verses2 = bible["verses"][vNum - 1];
    }
    else {
        document.getElementById("verse").innerHTML = "";
    }
    
    let verseInfo2;
    if(verses2 != "") {
        let verse2 = verses2["text"];
        verseInfo2 = verses2["book_name"] +
        " " + verses2["chapter"] + ":" + verses2["verse"];
        document.getElementById("verseB").innerHTML = verseInfo2 + " " + verse2;
        console.log("generated");
    }
    let verse1 = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse1;
    console.log("generated");
}

function generatePsalm() {
    while(true) {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses;
    let verses2 = "";
    if(bible["verses"][vNum]["book_name"] == "Psalms") {
        verses = bible["verses"][vNum];
        if(bible["verses"][vNum - 1]["book_name"] == "Psalms") {
            verses2 = bible["verses"][vNum - 1];
        }
        
    } else {
        document.getElementById("verse").innerHTML = "";
        continue;
    }
    let verseInfo2;
    if(verses2 != "") {
        let verse2 = verses2["text"];
        verseInfo2 = verses2["book_name"] +
        " " + verses2["chapter"] + ":" + verses2["verse"];
        document.getElementById("verseB").innerHTML = verseInfo2 + " " + verse2;
        console.log("generated");
    }
    let verse1 = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse1;
    console.log("generated");
    break;
    } 
}

function generateProverb() {
    while(true) {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses;
    let verses2 = "";
    if(bible["verses"][vNum]["book_name"] == "Proverbs") {
        verses = bible["verses"][vNum];
        if(bible["verses"][vNum - 1]["book_name"] == "Proverbs") {
            verses2 = bible["verses"][vNum - 1];
        }
        
    } else {
        document.getElementById("verse").innerHTML = "";
        continue;
    }
    let verseInfo2;
    if(verses2 != "") {
        let verse2 = verses2["text"];
        verseInfo2 = verses2["book_name"] +
        " " + verses2["chapter"] + ":" + verses2["verse"];
        document.getElementById("verseB").innerHTML = verseInfo2 + " " + verse2;
        console.log("generated");
    }
    let verse1 = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse1;
    console.log("generated");
    break;
    } 
}

