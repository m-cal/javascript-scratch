// Credential check conditionals

let userName = prompt("Who is it?", '');

if (userName === 'admin') {

  let pass = prompt('Password?', '');

  if (pass === '101TallGiraffes') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}