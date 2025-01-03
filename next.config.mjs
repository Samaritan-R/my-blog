/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/api/:path*',
                    destination: 'http://localhost:8088/:path*'
                }
            ]
        };
    }
};

export default nextConfig;
