@echo off
echo GggMessage: Running "start tsc, rest and web".
echo.
::=============================================================================
:: https://stackoverflow.com/questions/72671/how-to-create-batch-file-in-windows-using-start-with-a-path-and-command-with-s
:: the first parameter is the title of the newly created Command Prompt window, 
:: and the second and third should be the path to the application and its 
:: parameters, respectively
start "" "npm run tsc-w.cmd"
start "" "npm run rest.cmd"
start "" "npm run web.cmd"


