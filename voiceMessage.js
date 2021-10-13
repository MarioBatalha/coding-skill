const speak = msg => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
};

/* speak('My name is Mario Batalha,'
+ 'I am angolan,'
+ 'I am software engineer'); */
