
function generateMarkdown(data) {
  return `
  # ${data.title}
  ##  Description
  ${data.description}
  ##  Requirements
  ${data.installation}
  ##  Usage
  ${data.usage}
  
  ${data.username}(https://github.com/${data.username})
  
  ${data.author},
  
  Reach me by email at [${data.email}]. 
  
  If you would like to contribute to the project then follow these instructions:
  
  ${data.contribute}
 
 Distributed under the *[${data.license}]*.
  `;
}

module.exports = generateMarkdown;
