
FROM tiangolo/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /www/

# Starts form their docker image 
# This code is to be able modify the configurations
# I replace the nginx.cof one in the image wiht my own nginx.cof using a 
# Dockerfile that is based on the image