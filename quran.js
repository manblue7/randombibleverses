import quran from './quran.json' assert { type: 'json' };
document.getElementById('qver').addEventListener('click', generateVerseQ);

function generateVerseQ() {
    console.log(quran)
    let bNum = Math.floor(Math.random() * 115);
    console.log(bNum);
    let vNum = Math.floor(Math.random() * quran[bNum].length);
    let verses = quran[bNum][vNum];
    let verses2 = "";
    let verses3 = "";
    if(vNum - 1 >= 1) {
        verses2 = quran[bNum][vNum - 1];
    }
    else {
        document.getElementById("verseq").innerHTML = "";
    }
    
    let verseInfo2;
    if(verses2 != "") {
        let verse2 = verses2["text"];
        verseInfo2 = "Chapter "
        + verses2["chapter"] + " Verse " + verses2["verse"];
        document.getElementById("verseBq").innerHTML = verseInfo2 + " " + verse2;
        console.log("generated");
    }
    if(vNum - 2 >= 1) {
        verses3 = quran[bNum][vNum - 2];
    }
    else {
        document.getElementById("verseq").innerHTML = "";
    }
    
    let verseInfo3;
    if(verses3 != "") {
        let verse3 = verses3["text"];
        verseInfo3 = "Chapter "
        + verses3["chapter"] + " Verse " + verses3["verse"];
        document.getElementById("verseBq2").innerHTML = verseInfo3 + " " + verse3;
        console.log("generated");
    }
    let verse1 = verses["text"];
    let verseInfo = "Chapter " + verses["chapter"] + " Verse " + verses["verse"];
    document.getElementById("verseq").innerHTML = verseInfo + " " + verse1;
    console.log("generated");
}