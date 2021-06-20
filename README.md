# MyCloud

Simple cloud server with ability to share files with a code. 

1. `cd cloud-client && npm install -i && npm run-script build && cd ..`
2. `htpasswd -d server/passwords admin`
3. `cp -r cloud-client/build/ server/ && cd server && sudo docker build -t webserver . && sudo docker run -p 80:80 -d webserver && cd ..`

For update:

`git pull && cd cloud-client && npm run-script build && cd .. && sudo docker kill $(sudo docker ps -q) && cp -r cloud-client/build/ server/ && cd server && sudo docker build -t webserver . && sudo docker run -p 80:80 -d webserver && cd ..`
