#!/bin/bash

# This script creates directories based on the command line arguments provided.
# If no arguments are supplied, it displays an error message and exits with a non-zero status code.

if [ $# -eq 0 ]; then # Check if the number of command line arguments is equal to 0
	echo "No arguments supplied"  # Display an error message if no arguments are provided
	exit 1  # Exit the script with a non-zero status code
fi # End of the if statement

for arg in "$@" # Iterate through the command line arguments
do # Start of the for loop
   mkdir "ex$arg"  # Create a directory with the name "ex" followed by the command line argument
done # End of the for loop
