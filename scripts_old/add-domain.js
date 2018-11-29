#!/usr/bin/env node

/*
command line usage:

node ./scripts/add-domain --domain={ENTER_DOMAIN_NAME}
*/

const path = require("path");
const { argv } = require("yargs");
const { ncp } = require("ncp");
const replace = require("replace-in-file");

const DOMAIN = argv.domain;
const SOURCE = path.resolve("src", "__templates__", "domain");
const DEST = path.resolve("src", "domain", DOMAIN);

const TREE = `
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
`;

console.log(`\nScaffolding domain: ${DOMAIN}`);

// copy folder
ncp(SOURCE, DEST, err => {
  if (err) {
    console.log("something went wrong while copying files:", err);
    return;
  }
  replace({
    files: [path.join(`${DEST}`, "**", "*.ts")],
    from: /{DOMAIN_NAME}/g,
    to: DOMAIN
  })
    .then(() => console.log(TREE))
    .catch(err =>
      console.log("sorry, I'm having a hard time replacing these files:", err)
    );
});
