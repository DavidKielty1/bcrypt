const bcrypt = require('bcrypt')

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(12)
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt)
//     console.log(hash)
// }

const hashPassword = async(pw) => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash)
}

const login = async(pw, hashedPassword) => {
    const result = await bcrypt.compare(pw, hashedPassword)
    if (result) {
        console.log('LOGGED YOU IN! SUCCESSFUL MATCH')
    } else {
        console.log('INCORRECT!')
    }
}

// hashPassword('monkey')
login('monkey', '$2b$12$s5xVBaWWzpd7wKC67ZMV.ehXPlJF1r0MCnv0EWl3HgmsHj47V1oxC')