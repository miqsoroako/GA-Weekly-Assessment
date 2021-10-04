const myAge = age => {
    let str = ''
    if (age > 60) {str = range[0]}
    else if (age > 25) {str = range[1]}
    else if (age > 12) {str = range[2]}
    else if (age > 0) {str = range[3]}
    else {str = range[4]}
    console.log(`kamu ${str}`)
}

var range = ['tua', 'dewasa', 'remaja', 'muda', 'error']

myAge(2)        // output: ''kamu muda'
myAge(15)       // output: ''kamu remaja'
myAge(50)       // output: ''kamu dewasa'
myAge(300)      // output: ''kamu tua'
myAge(-1)       // output: ''kamu error'
myAge('aneh')   // output: ''kamu error'
