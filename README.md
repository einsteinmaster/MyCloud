# MyCloud

1. put a passwords file in `server/` (search htpasswd generators)
2. `yarn build`
3. `sudo docker build -t webserver . && sudo docker run webserver -p 80:80 -d`