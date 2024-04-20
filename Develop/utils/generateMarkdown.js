// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(license === 'ISC'){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }else if(license ==='GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }else if(license ==='Eclipse'){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
  }else if(license === 'None'){
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `[MIT License](https://opensource.org/licenses/MIT)`
  }else if(license === 'ISC'){
    return `[ISC License](https://opensource.org/licenses/ISC)`
  }else if(license ==='GNU'){
    return `[GNU License](https://www.gnu.org/licenses/gpl-3.0)`
  }else if(license ==='Eclipse'){
    return `[Eclipse License](https://opensource.org/licenses/EPL-1.0)`
  }else if(license === 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License 📝
  This application is covered by the ${license} license.`
  }
  return ``;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}

  ${renderLicenseBadge(data.license)}


  ### Description 🔎

  ${data.description}
  
  ### Table of Contents 📖
  - [Installation](#installation-⚙️)
  - [Usage](#usage-🎮)
  - [Contributing](#contributing-🧑‍🤝‍🧑)
  - [Test](#test-🧪)
  - [Questions](#questions-🙋)
 
    
  ## Installation ⚙️
    ${data.instalation}

  ## Usage 🎮
    ${data.usage}

  ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

  ## Contributing 🧑‍🤝‍🧑
    ${data.contributing}

  ## Test  🧪
    ${data.test}

  ## Questions 🙋
  If there are any questions, feel free to contact my email at: ${data.email}

  You can also find me on GitHub at:[${data.userName}](https://www.github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
