@echo off
cd /d "%~dp0"
title Chacunart - Servidor de desarrollo
echo Iniciando servidor de desarrollo (con --host, accesible desde el celular)...
echo.
if not exist node_modules (
    echo Instalando dependencias por primera vez, un momento...
    call npx --yes pnpm@10.4.1 install
)
call node_modules\.bin\vite --host
pause
