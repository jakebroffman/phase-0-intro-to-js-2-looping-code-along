const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    const event = "surprise";
    const message = [];
    for (let i = 0; i < names.length; i++) {
       message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return message;
}

writeCards(names);

function countDown () {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--);
    }
}