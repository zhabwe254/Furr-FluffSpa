#!/bin/bash

# Check the first argument and run the corresponding command
if [ "$1" = "migrations" ]; then
    # Run migrations to ensure the database is uploaded
    echo "Running migrations..."
    # Update this path to the correct location of the Furr-FluffSpa script or command
    ./src/Furr-FluffSpa migrations run
elif [ "$1" = "develop" ]; then
    # Start development environment
    echo "Starting development environment..."
    # Update this path to the correct location of the Furr-FluffSpa script or command
    ./src/Furr-FluffSpa develop
else
    echo "Unknown command: $1"
    exit 1
fi
