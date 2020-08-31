module.exports = function (plop) {
  // CWD helper
  plop.addHelper('cwd', () => process.cwd());
  // Component generator
  plop.setGenerator('Component', {
    actions: [
      {
        destination: '{{ cwd }}',
        templateFiles: './.plop/**',
        type: 'addMany',
      },
    ],
    description: 'React component scaffolding',
    prompts: [
      {
        message: 'This input must be in the prompts array',
        name: 'destpath',
        type: 'input',
      },
      {
        message: 'React component name:',
        name: 'component',
        type: 'input',
      },
    ],
  });
};
