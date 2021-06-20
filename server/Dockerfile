FROM php:7.2-apache
COPY ../cloud-client/build/ /var/www/html/
COPY passwords /etc/apache2/.htpasswd
COPY getFileByCode.php /var/www/html/
COPY ./upload/ /var/www/html/upload/
RUN chmod a+w /var/www/html/upload/
RUN chmod a+r /tmp/
