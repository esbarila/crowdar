# Crowdar Challenge

## How to run tests

Having node and npm previously installed:

1. Clone this repository
   `git clone https://github.com/esbarila/crowdar.git`
2. Install dependencies `npm i`
3. Run the test `npm run tests`

(it will run headlessly)

In order see the test run in a browser (headed) do:

`npm run test-headed`

NOTE: as of now I'm dealing with a [cypress issue affecting test runs](github.com/cypress-io/cypress/issues/27501) which may be your case as well.

To avoid it I suggest running each test separately. `npm run shopping-cart` or `npm run login` (add `--headed` argument if you wish to see the run).

## Reporting

1. Plain text log: `npx run tests > resultOutput.log`

2. Mochawesome reporter:
   `npx cypress run --reporter mochawesome --reporter-options reportDir="cypress/results"` \
   `npx mochawesome-merge "cypress/results/*.json" > mochawesome.json` \
   `npx marge mochawesome.json` 

   Remember to delete mochawesome.json and temporary reporter files afer
   `rm mochawesome.json` \
   `rm cypress/results/*.json`

   A new directory `mochawesome-report` will be generated and a neat html file will save the report.

## Screenshots & Videos

- Videos will be generated and saved locally in the [videos folder](/cypress/videos/)
- Screenshots will be generated when test fail, stored [here](/cypress/screenshots/).
