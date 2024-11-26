# Run Scanner

* Run this inside your project folder

```
docker run `
  --network sonar `
  --rm `
  -e SONAR_HOST_URL="http://sonar:9000" `
  -e SONAR_TOKEN="TOKEN" `
  -v "$(pwd):/usr/src" `
  sonarsource/sonar-scanner-cli sonar-scanner `
  -D sonar.projectKey=PROJECT_NAME
```

# Mvn compiler

```
docker run `
--rm `
--network sonar `
-v "$(pwd):/usr/src/mymaven" `
-w /usr/src/mymaven `
maven:latest mvn compile
```

# Mvn clean verify

```
docker run `
--rm `
--network sonar `
-v "$(pwd):/usr/src/mymaven" `
-w /usr/src/mymaven `
maven:latest mvn clean verify
```

# Mvn sonar

```
docker run `
--rm `
-e SONAR_HOST_URL="http://sonar:9000" `
-e SONAR_TOKEN="TOKEN" `
--network sonar `
-v "$(pwd):/usr/src/mymaven" `
-w /usr/src/mymaven `
maven:latest mvn sonar:sonar -D sonar.projectKey=mvnBasic
```
