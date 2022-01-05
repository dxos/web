const { promises: fs } = require('fs');
const path = require('path');

/**
 * @type {import('webpack').loader.Loader}
 */
module.exports = async function demoLoader() {
  const englishFilepath = this.resourcePath;

  const englishFilename = path.basename(englishFilepath, '.js');
  
  const files = await fs.readdir(path.dirname(englishFilepath));
  const codeFiles = files.filter((fileName) => fileName.includes('.js') || fileName.includes('.tsx') || fileName.includes('.tsx'));
  let rawContent = {
    js: null,
    ts: null
  }
  let component = null;
  await Promise.all(codeFiles.map(async (fileName) => {
    const moduleID = fileName;
    const moduleFilepath = path.join(
      this.context,
      moduleID
    );
    this.addDependency(moduleFilepath);
    if (moduleID.includes('.js')) {
      rawContent.js = await fs.readFile(moduleFilepath, { encoding: 'utf-8' });
      component = `() => {
        return require(${JSON.stringify("./" + moduleID)});
      }`;
    }
    if (moduleID.includes('.ts') || moduleID.includes('.tsx')) {
      rawContent.ts = await fs.readFile(moduleFilepath, { encoding: 'utf-8' });
    }
  }));

  const transformed = `
  export const component = ${component};
  export const rawContent = ${JSON.stringify(rawContent, null, 2)};
  `;

  // WARNING: Make sure the returned code is compatible with our .browserslistrc.
  return transformed;
};
