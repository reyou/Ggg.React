:: https://facebook.github.io/react/docs/installation.html
@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
:: 
call npm install -g create-react-app
echo "GggMessage: create-react-app installed." 
echo.
::
call create-react-app ggg-react-app
echo "GggMessage: ggg-react-app created." 
echo.
::
cd ggg-react-app
call npm start
echo "GggMessage: ggg-react-app started." 
echo.

:: Note that the development build is not optimized.
:: To create a production build, use npm run build.

::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause