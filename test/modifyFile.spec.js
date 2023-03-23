const exportModule = require('../helpers/break.down.mod');

describe('read file organized', () => {
  const foundObject = exportModule('./templates/initializers/index.js');

  it('should only return the module object when its a module export only', () => {
    
    expect(foundObject.moduleHeader).toContain('module.exports')

  });
  it('should only present executable lines, no empty lines', () => {

    const indexOfEmptyLine = foundObject.executables.indexOf('\n');
    expect(indexOfEmptyLine).toEqual(-1);

  });
  it('should contain header, footer and executables objects', () => {
    const { executables, moduleHeader, moduleFooter} = foundObject
    expect(executables).toBeDefined();
    expect(moduleHeader).toBeDefined();
    expect(moduleFooter).toBeDefined();
  });
  it('should produce writable string of object', () => {
    expect(foundObject.writableString).toBeDefined();
  });
  it('should return executables with semi-colon by the end of line', () => {
    const { executables } = foundObject;

    expect(executables[0]).toContain(';');
  });
  it('should find a comment in the executable and printed in the output', () => {
    
    expect(foundObject.writableString).toContain('//')

  });
});