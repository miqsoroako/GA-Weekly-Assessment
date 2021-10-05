const myAge = age => {
    let str = ''
    if (age > 60) {str = 'tua'}
    else if (age > 25) {str = 'dewasa'}
    else if (age > 12) {str = 'remaja'}
    else if (age > 0) {str = 'muda'}
    else {str = 'error'}
    return (`kamu ${str}`)
}

// test
const input = [2,15,50,300,-1,'aneh']

input.forEach(x => console.log(myAge(x)))

/* output
kamu muda
kamu remaja
kamu dewasa
kamu tua
kamu error
kamu error
*/
