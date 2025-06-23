#!/bin/bash

if systemctl is-active --quiet docker; then
  echo "Docker est en cours d'exécution, démarrage des services..."
  docker-compose up -d --build
else
  echo "Docker n'est pas en cours d'exécution. Veuillez démarrer Docker avant de lancer cette commande."
  exit 1 # Quitte le script avec un code d'erreur
fi