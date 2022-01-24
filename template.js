const template = ({title, description, howToHelp, installation, features, usage, contributing, test, license, github, email}, badge) =>

`# ${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact info](#contact)

## Installation

${installation}

## Usage

${usage}

## Credits

${contributing}

## License

${license}

## Badges

${badge}

## Features

${features}

## How to Contribute

${howToHelp}

## Tests

${test}

## Contact

${github}

${email}`

module.exports = template;