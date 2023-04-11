FROM httpd:2.4
COPY ./index.html /usr/local/apache2/htdocs/index.html
COPY ./css/style.css /usr/local/apache2/htdocs/css/style.css
COPY ./js/main.js /usr/local/apache2/htdocs/js/main.js



