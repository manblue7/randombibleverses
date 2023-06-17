import bible from './kjv.json' assert { type: 'json' };
document.getElementById('ver').addEventListener('click', generateVerse);
document.getElementById('ps').addEventListener('click', generatePsalm);
document.getElementById('pro').addEventListener('click', generateProverb);
function generateVerse() {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses = bible["verses"][vNum];
    let verse = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse;
    console.log("generated");
}

function generatePsalm() {
    while(true) {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses;
    if(bible["verses"][vNum]["book_name"] == "Psalms") {
        verses = bible["verses"][vNum]
    } else {
        continue;
    }
    let verse = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse;
    console.log("generated");
    break;
    } 
}

function generateProverb() {
    while(true) {
    let vNum = Math.floor(Math.random() * bible["verses"].length);
    let verses;
    if(bible["verses"][vNum]["book_name"] == "Proverbs") {
        verses = bible["verses"][vNum]
    } else {
        continue;
    }
    let verse = verses["text"];
    let verseInfo = verses["book_name"] +
    " " + verses["chapter"] + ":" + verses["verse"];
    document.getElementById("verse").innerHTML = verseInfo + " " + verse;
    console.log("generated");
    break;
    } 
}
