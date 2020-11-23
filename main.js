var PassInput, PassCorrect;


PassInput = window.prompt('What is the password?');
PassCorrect = 'NotPassword';
if (PassCorrect == PassInput) {
  window.alert('Correct Password!');
} else {
  window.alert('Incorrect Password!');
  window.location.replace('https://bing.com');
}
