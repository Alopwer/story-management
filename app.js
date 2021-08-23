require('dotenv').config()

const http = require('http')
const chalk = require('chalk')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(process.env.USER_ID)
})

server.listen(port, hostname, () => {
    console.log('server is running')
})

const args = require('minimist')(process.argv.slice(2));
console.log(args)
console.log(chalk.yellow('hi!'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
})
const inquirer = require('inquirer')

var questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers['name']}!`)
})
