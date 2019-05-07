#!/usr/bin/env node

var chalk = require('chalk')
var boxen = require('boxen')

let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

let data = {
  'name': chalk.white('Diagonal Systems /'),
  'handle': chalk.cyan('diagonalsystems'),
  'work': chalk.white(`Promote the prosperity of the city by 
            protecting its people, businesses and 
            infrastructure.
            `),
  'twitter': chalk.cyan('https://twitter.com/diagonalsystems'),
  'github': chalk.cyan('https://github.com/diagonalsystems'),
  'linkedin': chalk.cyan('https://www.linkedin.com/company/diagonal-systems'),
  'web': chalk.cyan('https://www.diagonal.sh'),
  'npx': chalk.white('npx diagonal'),
  'labelWork': chalk.white.bold('      Why:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
