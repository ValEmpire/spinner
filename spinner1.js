const character = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];


for (let i = 0; i < character.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r'+ character[i] +'   ');
  }, (i + 1) * 100);
}
