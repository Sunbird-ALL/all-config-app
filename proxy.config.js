const PROXY_CONFIG = [
    {
        context: [
            "/v1/telemetry"
        ],
        "target": 'https://www.learnerai-dev.theall.ai',
        "secure": true,
        "logLevel": "debug",
        "changeOrigin": true
    }
]

module.exports = PROXY_CONFIG;
