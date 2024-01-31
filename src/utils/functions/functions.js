export function spellWord(init, wrd) {
    let wrd = "";
    let i = 0;
    let id = setInterval(() => {
      if (i === init.length) {
        clearInterval(id);
      }
      wrd += init.charAt(i);
      i++;
    }, 100);
  }