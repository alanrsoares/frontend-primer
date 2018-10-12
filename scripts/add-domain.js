#!/usr/bin/env node

const path = require("path");
const { argv } = require("yargs");
const { ncp } = require("ncp");
const replace = require("replace-in-file");

const DOMAIN = argv.domain;
const SOURCE = path.resolve("src", "__templates__", "domain");
const DEST = path.resolve("src", "domain", DOMAIN);

console.log(`\nScaffolding domain: ${DOMAIN}`);

// copy folder
ncp(SOURCE, DEST, err => {
  if (err) {
    console.log("shit happens", err);
    return;
  }
  replace({
    files: [path.join(`${DEST}`, "**", "*.ts")],
    from: /{DOMAIN_NAME}/g,
    to: DOMAIN
  }).then(() => {
    console.log(`
    src/domain/${DOMAIN}
    ├── README.md
    ├── actions.ts
    ├── api
    │   ├── __tests__
    │   │   └── api.spec.ts
    │   └── index.ts
    ├── constants.ts
    ├── index.ts
    ├── reducers
    │   ├── __tests__
    │   │   └── reducers.spec.ts
    │   └── index.ts
    ├── sagas
    │   ├── __tests__
    │   │   └── sagas.spec.ts
    │   └── index.ts
    ├── selectors.ts
    └── types.ts
    
    6 directories, 12 files
    `);
  });
});
