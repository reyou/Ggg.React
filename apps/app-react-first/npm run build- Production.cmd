:: https://facebook.github.io/react/docs/installation.html
@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::============================================================================= 
:: 
cd ggg-react-app
:: https://github.com/facebookincubator/create-react-app/blob/master/README.md#npm-run-build-or-yarn-build
:: Builds the app for production to the build folder.
:: It correctly bundles React in production mode and optimizes the build for the best performance.
echo "GggMessage: npm run build." 
call npm run build
echo.
 
:: Note that the development build is not optimized.
:: To create a production build, use npm run build.

::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause