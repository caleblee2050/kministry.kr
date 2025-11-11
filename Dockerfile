# Nginx를 사용한 정적 사이트 배포
FROM nginx:alpine

# 기본 nginx 설정 제거
RUN rm -rf /usr/share/nginx/html/*

# 웹사이트 파일 복사
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx 설정 파일을 템플릿으로 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Entrypoint 스크립트 복사 및 실행 권한 부여
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 포트 노출 (Railway의 PORT 환경변수 사용)
EXPOSE ${PORT:-80}

# Entrypoint 설정
ENTRYPOINT ["/docker-entrypoint.sh"]
