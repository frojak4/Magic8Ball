let tekst = document.querySelector(".skrift");
const sound = new Audio("magic-chime-01.wav")
const prompts = [
"● It is certain",
"● It is decidedly so",
"● Without a doubt",
"● Yes definitely",
"● You may rely on it",
"● As I see it, yes",
"● Most likely",
"● Outlook good",
"● Yes",
"● Signs point to yes",
"● Reply hazy, try again",
"● Ask again later",
"● Better not tell you now",
"● Cannot predict now",
"● Concentrate and ask again",
"● Don't count on it",
"● My reply is no",
"● My sources say no",
"● Outlook not so good",
"● Very doubtful"
]


function shake() {
    sound.play();
    setTimeout(changeText, 800)
}

function changeText() {
    tekst.innerHTML = prompts[Math.floor(Math.random() * prompts.length)]
}