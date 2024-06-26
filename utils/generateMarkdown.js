// A function that returns a license badge based on which license is passed in
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

// A function that returns the license link
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

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License 📝
  This application is covered by the ${license} license.`
  }
  return ``;
}



// A function to generate markdown for README
function generateMarkdown(data) {
  let tablOfContent = `### Table of Contents 📖
  `;
  
  if(data.instalation !== ''){
    tablOfContent +=`- [Installation](#installation-⚙️)
  `
  };

  if(data.usage !== ''){
    tablOfContent +=`- [Usage](#usage-🎮)
  `
  };

  if(data.contributing !== ''){
    tablOfContent += `- [Contributing](#contributing-🧑‍🤝‍🧑)
  `
  };

  if(data.test !== ''){
    tablOfContent += `- [Test](#test-🧪)
  `
  };

  let sampleMarkdown = `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 🔎
  ${data.description}
  `
//Adding the table of content to the markdown
  sampleMarkdown += tablOfContent;

  if(data.instalation !==''){
    sampleMarkdown +=`## Installation ⚙️
  ${data.instalation}
  `
  };
  if(data.usage !==''){
    sampleMarkdown +=`## Usage 🎮
  ${data.usage}
  `
  };

  sampleMarkdown += `  
  ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
  `

  if(data.contributing !== ''){
    sampleMarkdown +=`## Contributing 🧑‍🤝‍🧑
  ${data.contributing}
  `
  };

  if(data.test !== ''){
    sampleMarkdown +=`## Test  🧪
  ${data.test}
  `
  };
  sampleMarkdown +=`
  ## Questions 🙋
  If there are any questions, feel free to contact my email at: ${data.email}

  You can also find me on GitHub at:[${data.userName}](https://www.github.com/${data.userName})
  `

  return sampleMarkdown;

}
module.exports = generateMarkdown;
