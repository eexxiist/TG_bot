#!/bin/bash

yc serverless function create --name vibetoday || true

yc serverless function version create \
  --function-name vibetoday \
  --runtime nodejs22 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path ./deploy