yc serverless function version create \
  --function-name vibetoday \
  --runtime nodejs22 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path ./deploy \
  --environment OPENAI_API_KEY=$API_DEEPSEEK_KEY \
  --environment BOT_TOKEN=$BOT_TOKEN