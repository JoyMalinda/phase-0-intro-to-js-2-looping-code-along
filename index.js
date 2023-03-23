function writeCards(names, event) {
    let cardContent = [];
    for(let i = 0; i < names.length; i++ ) {
        cardContent.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardContent;
}
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  