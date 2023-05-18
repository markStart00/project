#!/bin/bash
echo 'starting steps'

echo 'deleteing last build'
rm -rf ./build


echo 'building front end - yarn build'
yarn build
if [ $? -eq 0 ]; then
	echo 'Succcess'
else 
	echo 'fail'
	exit 1
fi


# need to delete first
echo 'building docker image'
docker image build -t markstart00/react-app-local:latest .
if [ $? -eq 0 ]; then
	echo 'Succcess'
else 
	echo 'fail'
	exit 1
fi

echo ''
echo 'stopping docker instance'
docker stop react-app

echo ''
echo 'deleteing docker instance'
docker rm react-app

echo ''
echo 'starting new docker instance with new image'
docker run --network="host" --name react-app -d markstart00/react-app-local:latest


