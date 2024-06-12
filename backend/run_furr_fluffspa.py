#!/usr/bin/env python3

import subprocess
import sys

def run_command(command):
    try:
        result = subprocess.run(command, check=True, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(result.stdout.decode())
    except subprocess.CalledProcessError as e:
        print(f"Error occurred while running command: {e.cmd}", file=sys.stderr)
        print(e.stderr.decode(), file=sys.stderr)
        sys.exit(1)

def main():
    # Path to the develop.sh script
    develop_script = "./develop.sh"

    # Run migrations to ensure the database is uploaded
    print("Running database migrations...")
    run_command(f"{develop_script} migrations")

    # Start development environment
    print("Starting development environment...")
    run_command(f"{develop_script} develop")

if __name__ == '__main__':
    main()
