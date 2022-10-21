const countdown = function() {
  let timer = 10;
  while (timer >= 0) {
    if (timer === 10) {
      console.log(`Countdown ${timer}`);
    } else if (timer === 0) {
      console.log(`Blast off!`);
    } else {
      console.log(timer);
    }
    timer--;
  }
}