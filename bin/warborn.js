#!/usr/bin/env node
const { runCLI } = require('../dist/cli');
runCLI(process.argv.slice(2)).catch(err => {
  console.error('[Warborn CLI Error]:', err.message);
  process.exit(1);
});
