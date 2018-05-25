:: https://facebook.github.io/react/docs/installation.html
@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
:: 
cd ggg-react-app
:: https://www.npmjs.com/package/react-scripts
echo "GggMessage: npm start." 
call npm start
echo.
 
:: Note that the development build is not optimized.
:: To create a production build, use npm run build.

::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause