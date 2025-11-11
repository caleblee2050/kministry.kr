#!/bin/sh
set -e

# Railway의 PORT 환경변수를 사용하여 nginx 설정 생성
export PORT=${PORT:-80}
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Nginx 시작
exec nginx -g 'daemon off;'
