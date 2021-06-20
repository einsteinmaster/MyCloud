# MyCloud

1. `cd cloud-client && npm install -i && npm run-script build && cd ..`
2. `htpasswd -d server/passwords admin`
3. `cp -r cloud-client/build/ server/ && cd server && sudo docker build -t webserver . && sudo docker run -p 80:80 -d webserver && cd ..`
