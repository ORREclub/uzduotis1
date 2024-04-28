document.querySelector('#generate').addEventListener('click', () => {
    const length = document.querySelector('#length').value;
    const includeUppercase = document.querySelector('#uppercase').checked;
    const includeNumbers = document.querySelector('#numbers').checked;
    const includeSymbols = document.querySelector('#symbols').checked;
    document.querySelector('#outputCode').value = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
  });  
  document.querySelector('#copy').addEventListener('click', () => {
    const passwordToCopy = document.querySelector('#outputCode').value;
    navigator.clipboard.writeText(passwordToCopy)
      .catch((error) => {
        alert('Copy failed, please try again.'); 
      });
  });
  const generatePassword = (length, uppercase, numbers, symbols) => {
    let symbolsList = 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) symbolsList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) symbolsList += '0123456789';
    if (symbols) symbolsList += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += symbolsList.charAt(Math.floor(Math.random() * symbolsList.length));
    }
    return password;
  }