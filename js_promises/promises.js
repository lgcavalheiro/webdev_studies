function speakAfter(sec, phrase) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(phrase)
        }, sec * 1000)
    });
};

speakAfter(3, "Cool!")
    .then(phrase => phrase.concat("?!?"))
    .then(otherPhrase => console.log(otherPhrase))