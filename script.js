const questions = [
    { 
        q: "Je travaille ___ après-midi.", 
        trad: "I work in the afternoon.", 
        o: ["le", "à l'", "l'"], 
        a: 2, 
        note: "On dit toujours 'l'après-midi'.",
        noteEn: "We always say 'l'après-midi'." 
    },
    { 
        q: "Nous mangeons ___ midi.", 
        trad: "We eat at noon.", 
        o: ["à", "le", "en"], 
        a: 0, 
        note: "On utilise 'à' pour les heures précises.",
        noteEn: "We use 'à' for specific hours."
    },
    { 
        q: "Il fait froid ___ hiver.", 
        trad: "It is cold in winter.", 
        o: ["en", "au", "dans"], 
        a: 0, 
        note: "Pour les saisons commençant par une voyelle, on utilise 'en'.",
        noteEn: "For seasons starting with a vowel, we use 'en'."
    }
];

let current = 0;

function loadQuestion() {
    const qData = questions[current];
    document.getElementById("question").innerText = qData.q;
    document.getElementById("traduction").innerText = qData.trad;
    document.getElementById("traduction").style.display = "none";
    document.getElementById("btn-trad").innerText = "Afficher la traduction";
    document.getElementById("feedback").innerHTML = "";
    
    const optDiv = document.getElementById("options");
    optDiv.innerHTML = "";
    qData.o.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optDiv.appendChild(btn);
    });
}

function toggleTraduction() {
    const trad = document.getElementById("traduction");
    const btn = document.getElementById("btn-trad");
    if (trad.style.display === "none") {
        trad.style.display = "block";
        btn.innerText = "Masquer la traduction";
    } else {
        trad.style.display = "none";
        btn.innerText = "Afficher la traduction";
    }
}

function checkAnswer(idx) {
    const feedback = document.getElementById("feedback");
    const qData = questions[current];
    if(idx === qData.a) {
        feedback.innerHTML = `<strong>Bravo ! / Well done!</strong><br>${qData.note}<br><em>(${qData.noteEn})</em>`;
        setTimeout(() => {
            current = (current + 1) % questions.length;
            loadQuestion();
        }, 3500);
    } else {
        feedback.innerHTML = `<strong>Réessaie ! / Try again!</strong><br>${qData.note}<br><em>(${qData.noteEn})</em>`;
    }
}

loadQuestion();
