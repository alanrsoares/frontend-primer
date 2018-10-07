#!/bin/bash

# usage:
# new-domain [domain name]
# via npm/yarn scripts: npm/yarn run new-domain [domain name]

DOMAIN=$1;

echo "Scaffolding new domain: $DOMAIN";

DOMAIN_PATH="./src/domain/$DOMAIN";

cp -r ./templates/domain/ $DOMAIN_PATH;

ls $DOMAIN_PATH;

echo "
src/domain/$DOMAIN/
├── api
│   ├── index.ts
│   └── __tests__
│       └── api.spec.ts
├── constants.ts
├── index.ts
├── README.md
├── reducers
│   ├── index.ts
│   └── __tests__
│       └── reducers.spec.ts
├── sagas
│   ├── index.ts
│   └── __tests__
│       └── sagas.spec.ts
└── selectors.ts
";
