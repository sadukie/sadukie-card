// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  title: 'Sarah Dutkiewicz',
  titleAlignment:'left',
  borderColor: '#1e90ff'  
}

// Text + chalk definitions
const data = {
  handle: chalk.hex('#1e90ff').bgHex('#fffacd').bold('sadukie'),
  pronouns: chalk.white('she/her/hers'),
  twitter: chalk.gray('https://twitter.com/') + chalk.hex('#1e90ff').bgHex('#fffacd').bold('sadukie'),
  mastodon: chalk.gray('https://hachyderm.io/') + chalk.hex('#1e90ff').bgHex('#fffacd').bold('@sadukie'),
  npm: chalk.gray('https://npmjs.com/') + chalk.hex('#1e90ff').bgHex('#fffacd').bold('~sadukie'),
  github: chalk.gray('https://github.com/') + chalk.hex('#1e90ff').bgHex('#fffacd').bold('sadukie'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.hex('#1e90ff').bgHex('#fffacd').bold('sadukie'),
  web: chalk.hex('#1e90ff').bgHex('#fffacd').bold('https://sadukie.com'),
  npx: chalk.white('npx') + ' ' + chalk.hex('#1e90ff').bgHex('#fffacd').bold('sadukie'),
  labelPronouns: chalk.white.bold('Pronouns:'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelMastodon: chalk.white.bold('Mastodon:'),
  labelnpm: chalk.white.bold('npm:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('Web:'),
  labelCard: chalk.white.bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.handle}`
const pronouns = `${data.labelPronouns} ${data.pronouns}`
const xwitter = `${data.labelTwitter}  ${data.twitter}`
const mastodon = `${data.labelMastodon}  ${data.mastodon}`
const npm = `${data.labelnpm}  ${data.npm}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const web = `${data.labelWeb}  ${data.web}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + // data.name + data.handle
               pronouns + newline +
               xwitter + newline + // data.labelTwitter + data.twitter
               mastodon + newline + // data.labelTwitter + data.twitter
               npm + newline + // data.labelnpm + data.npm
               github + newline + // data.labelGitHub + data.github
               linkedin + newline + // data.labelLinkedIn + data.linkedin
               web + newline + newline + // data.labelWeb + data.web
               card // data.labelCard + data.npx

console.log(chalk.green(boxen(output, options)))