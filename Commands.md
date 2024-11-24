# Run Scanner

* Run this inside your project folder

```
docker run \
  --network sonar \
  --rm \
  -e SONAR_HOST_URL="http://sonar:9000" \
  -e SONAR_TOKEN="TOKEN" \
  -v "$(pwd):/usr/src" \
  sonarsource/sonar-scanner-cli sonar-scanner \
  -D sonar.projectKey=PROJECT_NAME
```
