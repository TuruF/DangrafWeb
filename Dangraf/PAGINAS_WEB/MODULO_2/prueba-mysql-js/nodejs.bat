@echo off
cd /d c:\prueba-mysql-js

echo === Inicializando proyecto (si no existe) ===
call npm init -y

echo === Instalando dependencias ===
call npm install express mysql2 cors

echo === Iniciando el servidor en una nueva ventana ===
start "" cmd /k "cd /d c:\prueba-mysql-js && node servidor.js"

timeout /t 5 /nobreak > nul

echo === Abriendo Google Chrome ===
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" http://localhost:3000

echo === Proceso completado ===
pause