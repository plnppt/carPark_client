const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

module.exports = function(app) {
    app.use(
        '/api/v1/',
        createProxyMiddleware({
            target: env.REACT_APP_PROXY_HOST,
            changeOrigin: true,
        })
    );
};

