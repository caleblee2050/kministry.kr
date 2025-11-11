const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (캐싱 설정 포함)
app.use(express.static('.', {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    // HTML 파일은 캐싱하지 않음
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    }
  }
}));

// 모든 경로를 index.html로 리다이렉트 (SPA 지원)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
