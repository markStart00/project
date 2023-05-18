#!/bin/bash
cd /home/ec2-user
aws s3 cp s3://app-bucket-00/test.txt .
docker run --network="host" --name react-app -d markstart00/react-app-aws:latest

