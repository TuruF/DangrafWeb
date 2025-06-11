@echo off
cd /d c:\gestor_alumnos_FINAL_con_bat

echo === Inicializando proyecto (si no existe) ===
call npm init -y

echo === Instalando dependencias ===
call npm install express mysql2 cors

echo === Iniciando el servidor en una nueva ventana ===
start "" cmd /k "cd /d c:\gestor_alumnos_FINAL_con_bat && node server.js"

timeout /t 5 /nobreak > nul

echo === Abriendo Google Chrome ===
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" http://localhost:3000

echo === Proceso completado ===
pause