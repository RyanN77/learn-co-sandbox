function say(greeting, firstName) {
  console.log('I was called!')
  return `${greeting}, ${firstName}!`
}

console.log(say("Hi","Bob"));