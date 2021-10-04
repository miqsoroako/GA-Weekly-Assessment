const myAge = age => {
    let str = ''
    if (age > 60) {str = 'tua'}
    else if (age > 25) {str = 'dewasa'}
    else if (age > 12) {str = 'remaja'}
    else if (age > 0) {str = 'muda'}
    else {str = 'error'}
    console.log(`kamu ${str}`)
}

myAge(2)        // output: 'kamu muda'
myAge(15)       // output: 'kamu remaja'
myAge(50)       // output: 'kamu dewasa'
myAge(300)      // output: 'kamu tua'
myAge(-1)       // output: 'kamu error'
myAge('aneh')   // output: 'kamu error'
