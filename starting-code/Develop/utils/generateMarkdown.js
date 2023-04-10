// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `https://img.shields.io/badge/license-${license}-green`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description\n${data.description}
${data.includeFeatures === 'Yes' ? `## Features\n${formatList(data.features)}`:``}
${data.includeDeployed === 'Yes' ? `## Deployed Project\n${data.deployed}`:``}
${data.includeInstall === 'Yes' ? `## Installation\n${formatList(data.install)}`:``}
## Usage\n${data.usage}
${data.includeCredits === 'Yes' ? `## Credits\n${formatList(data.credits)}`:``}
${data.includeChallenges === 'Yes' ? `## Challenges\n${formatList(data.challenges)}`:``}
${data.future === 'Yes' ? `## Challenges\n${formatList(data.challenges)}`:``}
${data.includeContribute === 'Yes' ? `## How to Contribute\n${data.contribute}`: ``}
${data.includeTests === 'Yes' ? `## Tests\n${formatList(data.tests)}`:``}
## License\n${data.license}
`;
}

function formatList(strList) {
  let arrList = strList.split(',');
  let result = "";
  arrList.forEach(element => {
      let current = element.trim();
      result += `- ${current}\n`;
  });
  return result;
}

module.exports = generateMarkdown;
