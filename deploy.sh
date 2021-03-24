#!/bin/sh

cd /Users/simons/Documents/react-pokemon

echo "Building react-pokemon ..."
npm run build

echo "Copying html file ..."
cp -r build html

echo "Connecting to AWS VM and copying file to /var/www/html/ ..."
sudo scp -i /Users/simons/.ssh/aws-key-pair-perso.pem -r html  ubuntu@ec2-3-20-221-186.us-east-2.compute.amazonaws.com:/var/www

echo "Removing html file from local directory ..."
rm -r html