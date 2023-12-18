#!/bin/bash

cleanup() {
  echo "Terminando procesos..."
  
  kill $(jobs -p)

  echo "Procesos terminados. Saliendo."
  exit
}

trap cleanup EXIT

cd ./frontend/noteapp

npm install

cd ../../backend

./gradlew bootRun &

cd ../frontend/noteapp 

npm start 

while true; do
  sleep 1
done


