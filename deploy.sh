yc serverless function version create \
  --function-name vibetoday \
  --runtime nodejs22 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path ./deploy \
  --environment OPENAI_API_KEY=sk-672d21b716ed43238ee794f39486d73c \
  --environment BOT_TOKEN=8709048896:AAEG7yckmACOwCvzWn1GK08uiSNJS-321O4