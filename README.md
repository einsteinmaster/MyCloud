# MyCloud

1. put a passwords file in `server/` (search htpasswd generators)
2. `cd cloud-client && npm install -i && npm run-script build && cd ..`
3. `cp -r cloud-client/build/ server/ && sudo docker build -t webserver ./server/Dockerfile && sudo docker run webserver -p 80:80 -d`
