FROM node:22 as build

WORKDIR /app
COPY . /app

RUN npm i
RUN npm run build

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/seletivo/browser /usr/share/nginx/html/

EXPOSE 80
