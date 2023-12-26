#!/bin/sh
if [ -d "node_modules" ]; then
    if [ -z "$(ls -A node_modules)" ]; then
        npm install
    fi
else
    npm install
fi

if [ -d "dist" ]; then
    if [ -z "$(ls -A dist)" ]; then
        npm run build
    fi
else
    npm run build
fi

npm run start:dev