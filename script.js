const workouts = document.querySelectorAll('li[role="listitem"]');

const messages = [
  "locked in frfr",
  "what a pro",
  "so skilled",
  "wooow great job",
  "ripped",
  "go off diva",
  "i believe in u",
  "ashton halls type shi",
  "slay",
  "that’s the spirit",
  "unstoppable",
  "sheesh",
  "ate",
  "MUSCLES",
  "nice",
  "peak",
  "you’re a legend",
  "keep goiiingg",
  "on fire",
  "totally crushing it fr",
  "yippee",
  "type shi",
  "amazing",
  "wowoow",
  "you got this",
  "such skill",
  "amazing joobbb",
  "pure raw skill",
  "cracked",
  "look at uuuu",
  "shining bright",
  "woowowowowowowowow",
  "BARKBARKBARK",
  "jacked",
  "absolute pro",
  "so flawless",
  "next level",
  "greatjob",
  "cooking",
  "u are so locked in",
  "glowing up actively",
  "that’s a win",
  "im running out of prompt ideas",
  "pure fire",
  "killing it",
  "crushin goals",
  "look at u go",
  "steady slayin",
  "killing it",
  "meow",
  "meowmeowmeow",
  "a diva",
  "magical",
  "indian bodybuilder type shi",
  "so iconic",
  "i love cats",
  "u should text me",
  "skills",
  "waowowowoawowowow",
  "AMAZING SO GREAT",
  "are u locked in",
  "on that grind",
  "absolute GOD",
  "next lvl",
  "glowing",
  "hustling",
  "shine bright like a diamond",
  "drink smth",
  "sosososo good",
  "WOW",
  "AGAIN",
  "maybe u should do another rep",
  "im hungry",
  "i love coffee",
  "we should play roblox",
  "we should call",
  "chipotle sounds good rn",
  "EVERY WEEK WOWW",
  "i love cats",
  "coding hurts my head",
  "AMAZING!!!!!!!!!!!!!!!!!!!!",
  "do another",
  "another",
  "WOW",
  "im listening to lady gaga rn",
  "i want a smoothie",
  "unstoppable",
  "hype",
  "diva",
  "love the GRIND",
  "locked in",
  "totally iconic",
  "girl boss diva queen slayer",
  "Idk what to put",
  "my hand hurts from typing",
  "i ate a burger today",
  "sooo good",
  "golden",
  "cracked",
  "meow"
];

workouts.forEach(item => {
  // tabindex already set in HTML for focus, but setting here too just in case
  if (!item.hasAttribute('tabindex')) {
    item.tabIndex = 0;
  }

  item._msgIndex = 0; // for rotation if you want, else can ignore

  function showPopupMessage() {
    // Random message from the list
    const msg = messages[Math.floor(Math.random() * messages.length)];

    let bubble = item.querySelector('.speech-bubble');
    if (!bubble) {
      bubble = document.createElement('div');
      bubble.className = 'speech-bubble';
      item.appendChild(bubble);
    }

    bubble.textContent = msg;
    bubble.classList.add('show');

    // Remove after animation duration
    setTimeout(() => {
      bubble.classList.remove('show');
    }, 2000);
  }

  function toggleCheck() {
    item.classList.toggle('checked');
    item.classList.add('bounce-sparkle');

    item.addEventListener('animationend', () => {
      item.classList.remove('bounce-sparkle');
    }, { once: true });

    showPopupMessage();
  }

  item.addEventListener('click', toggleCheck);

  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCheck();
    }
  });
});
