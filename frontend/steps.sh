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
docker image build -t markstart00/react-app-image:latest .
if [ $? -eq 0 ]; then
	echo 'Succcess'
else 
	echo 'fail'
	exit 1
fi

# need to be loged in to docker
echo ''
echo 'uploading image to docker-hub'
docker push markstart00/react-app-image:latest
if [ $? -eq 0 ]; then
	echo 'Succcess'
else 
	echo 'fail'
	exit 1
fi


echo ''
echo 'stopping aws docker instance'
ssh -i "~/system/.secret/project.pem" ubuntu@16.170.133.253 "docker stop react-app"

echo ''
echo 'deleteing aws docker instance'
ssh -i "~/system/.secret/project.pem" ubuntu@16.170.133.253 "docker rm react-app"

echo ''
echo 'updating aws docker image'
ssh -i "~/system/.secret/project.pem" ubuntu@16.170.133.253 "docker pull markstart00/react-app-image"

echo ''
echo 'starting new docker instance with new image'
ssh -i "~/system/.secret/project.pem" ubuntu@16.170.133.253 "docker run --network="host" --name react-app -d markstart00/react-app-image:latest"


