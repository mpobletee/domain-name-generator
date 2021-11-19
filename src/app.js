window.onload = () => {
  document.querySelector("#dominio").innerHTML = dominio();

};

let dominio = () => {

  let w = "www."
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".com", ".es", ".co", ".cl", ".net", ".org", ".uk"];
  let newDom = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dot.length; l++) {
          newDom.push(`${w}${pronoun[i]}${adjective[j]}${noun[k]}${dot[l]}<br/>`);
        }
      }
    }
  }
  let newnewDom = newDom.join("");
  return newnewDom;
};