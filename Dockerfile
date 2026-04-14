FROM node:20-alpine AS build

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd frontend && npm ci

COPY frontend ./frontend

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN cd frontend && npm run build


FROM nginx:alpine

# Do not add frontend/public/index.html — Vite copies public/ over dist root and replaces the SPA shell.
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# SPA fallback + avoid stale index.html in browser/CDN
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '  location = /index.html {' \
  '    add_header Cache-Control "no-cache, no-store, must-revalidate" always;' \
  '    try_files /index.html =404;' \
  '  }' \
  '  location / {' \
  '    try_files $uri $uri/ /index.html;' \
  '  }' \
  '}' \
  > /etc/nginx/conf.d/default.conf

EXPOSE 80

