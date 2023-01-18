const spinner = ["|", "/", '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < spinner.length; i++) {
  let delay = 100 + i * 200;
  setTimeout(() => {
    process.stdout.write('\r' + spinner[i] + '   ');
  }, delay);
};