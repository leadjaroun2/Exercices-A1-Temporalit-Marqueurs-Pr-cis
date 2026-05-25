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
    },
    // Ajoute ces exemples à l'intérieur de ton tableau `questions` dans script.js
{ 
    q: "Nous sommes ___ lundi.", 
    trad: "Today is Monday.", 
    o: ["hier", "aujourd'hui", "demain"], 
    a: 1, 
    note: "Aujourd'hui est le mot pour le jour présent.",
    noteEn: "Aujourd'hui means today."
},
{ 
    q: "Il est 14h ___.", 
    trad: "It is 2 o'clock sharp.", 
    o: ["pile", "quart", "demie"], 
    a: 0, 
    note: "'Pile' signifie exactement à l'heure.",
    noteEn: "'Pile' means sharp/exactly on time."
},
{ 
    q: "Je pars en vacances ___ juillet.", 
    trad: "I am going on vacation in July.", 
    o: ["en", "au", "le"], 
    a: 0, 
    note: "On utilise 'en' devant les mois.",
    noteEn: "We use 'en' before months."
},
{ 
    q: "Nous mangeons ___ printemps.", 
    trad: "We eat in spring.", 
    o: ["en", "au", "l'"], 
    a: 1, 
    note: "Attention, 'au printemps' est une exception !",
    noteEn: "Be careful, 'au printemps' is an exception!"
},
{ 
    q: "Il est 10 heures ___.", 
    trad: "It is 10:30.", 
    o: ["pile", "moins le quart", "et demie"], 
    a: 2, 
    note: "'Et demie' indique 30 minutes.",
    noteEn: "'Et demie' indicates 30 minutes."
},
    { 
    q: "Il est 15 heures ___.", 
    trad: "It is 2:45 PM (or 15:45).", 
    o: ["moins le quart", "et demie", "pile"], 
    a: 0, 
    note: "Pour 15h45, on dit '15 heures moins le quart'.",
    noteEn: "For 3:45 PM, we say '15h minus a quarter'."
},
{ 
    q: "Mon anniversaire est ___ janvier.", 
    trad: "My birthday is in January.", 
    o: ["en", "au", "le"], 
    a: 0, 
    note: "On utilise 'en' pour les mois.",
    noteEn: "We use 'en' for months."
},
{ 
    q: "Nous sommes ___ dimanche.", 
    trad: "Today is Sunday.", 
    o: ["en", "le", "à"], 
    a: 1, 
    note: "On utilise 'le' pour situer le jour dans la semaine.",
    noteEn: "We use 'le' to situate the day in the week."
},
{ 
    q: "Le film commence ___ 21 heures.", 
    trad: "The movie starts at 9 PM.", 
    o: ["à", "en", "le"], 
    a: 0, 
    note: "Pour les heures, on utilise toujours 'à'.",
    noteEn: "For time, we always use 'à'."
},
{ 
    q: "Il fait beau ___ automne.", 
    trad: "The weather is nice in autumn.", 
    o: ["en", "au", "le"], 
    a: 0, 
    note: "Les saisons commençant par une voyelle prennent 'en'.",
    noteEn: "Seasons starting with a vowel take 'en'."
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
    const optButtons = document.getElementById("options").querySelectorAll("button");
    const qData = questions[current];
    
    // Désactiver tous les boutons après le clic pour éviter les doubles clics
    optButtons.forEach(btn => btn.disabled = true);
    
    if(idx === qData.a) {
        optButtons[idx].classList.add("correct");
        // ... le reste de ton code pour le feedback
    } else {
        optButtons[idx].classList.add("wrong");
        optButtons[qData.a].classList.add("correct"); // Montre la bonne réponse
    }
    // ...
}

loadQuestion();
