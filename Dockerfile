# The builder from node image
FROM node:20-alpine as build-step
# create directory app
RUN mkdir -p /app
# Move our files into directory name "app"
WORKDIR /app
# copy files json of configuration to app
COPY package.json  /app
# install node
RUN npm install
# copy rest of the application source code
COPY . /app
# build application
RUN npm run build --prod

# Build a small nginx image with static website
FROM nginx:alpine
#
COPY --from=build-step /app/dist/front-fonds/browser /usr/share/nginx/html
COPY --from=build-step /app/40X.html /usr/share/nginx/html
COPY --from=build-step /app/50X.html /usr/share/nginx/html
EXPOSE 70
#CMD ["nginx", "-g", "daemon off;"]
