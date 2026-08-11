@echo off
title E-Learning Website
echo ============================================
echo   E-Learning Website Setup Shuru Ho Rahi Hai
echo ============================================
echo.
echo Installing (pehli dafa thoda time lagega)...
call npm install
echo.
echo ============================================
echo   Website Chalayi Ja Rahi Hai...
echo ============================================
echo.
echo Ready hone par is window mein "Local: http://localhost:3000" dikhega.
echo Phir apne browser mein localhost:3000 likh kar khol lein.
echo.
call npm run dev
pause
