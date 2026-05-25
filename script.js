const questions = [
    { q: "Je travaille ___ après-midi.", trad: "I work in the afternoon.", o: ["le", "à l'", "l'"], a: 2, note: "On dit toujours 'l'après-midi'." },
    { q: "Nous mangeons ___ midi.", trad: "We eat at noon.", o: ["à", "le", "en"], a: 0, note: "On utilise 'à' pour les heures précises." },
    { q: "Il fait froid ___ hiver.", trad: "It is cold in winter.", o: ["en", "au", "dans"], a: 0, note: "En + voyelle = saison." },
    { q: "Mon anniversaire est ___ printemps.", trad: "My birthday is in spring.", o: ["en", "au", "le"], a: 1, note: "Exception : on dit 'au printemps'." },
    { q: "Je suis libre ___ lundi.", trad: "I am free on Monday.", o: ["à", "en", "le"], a: 2, note: "Le + jour = une habitude." },
    { q: "Il est 8 heures ___.", trad: "It is 8 o'clock sharp.", o: ["pile", "à", "en"], a: 0, note: "'Pile' indique une heure exacte." }
];

let current = 0;

function loadQuestion() {
    const qData = questions[current];
    document.getElementById("question").innerText = qData.q;
    document.getElementById("traduction").innerText = qData.trad;
    document.getElementById("traduction").style.display = "none";
    document.getElementById("btn-trad").innerText = "Afficher la traduction";
    
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
    if(idx === questions[current].a) {
        feedback.innerText = "Bravo ! " + questions[current].note;
        setTimeout(() => {
            current = (current + 1) % questions.length;
            feedback.innerText = "";
            loadQuestion();
        }, 2000);
    } else {
        feedback.innerText = "Réessaie ! " + questions[current].note;
    }
}

loadQuestion();
