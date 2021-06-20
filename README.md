# MyCloud

1. put a passwords file in `server/` (search htpasswd generators)
2. `cd cloud-client && yarn build && cd ..`
3. `sudo docker build -t webserver ./server/Dockerfile && sudo docker run webserver -p 80:80 -d`
