::#######################################################################
::# Batch file to run Cypress tests in Jenkins				            #
::#									                                    #
::# https://docs.cypress.io/guides/guides/command-line.html#Commands	#
::#######################################################################

:: 1. Set arguments:
::set RESOLUTION=viewportWidth=1920,viewportHeight=1080
::set URL=http://localhost:9205
::set OPTION1=--no-exit
::set OPTION1=--browser chrome
set REPORTER=mocha-multi-reporters
set REPORTEROPTIONS=configFile=reporter-config.json

:: 2. Set test suites:
set SUITES=^
.\cypress\e2e\locations.cy.js

set CYPRESS_VERIFY_TIMEOUT=30000

:: 3. Run tests:
node node_modules/cypress/bin/cypress run --spec %SUITES% %OPTION1% --reporter %REPORTER% --reporter-options %REPORTEROPTIONS%

:: 4. Report results:
cmd /c "npx mochawesome-merge --reportDir .\mochawesome-report > .\mochawesome-report\testReport.json"
cmd /c "npx mochawesome-report-generator .\mochawesome-report\testReport.json"

