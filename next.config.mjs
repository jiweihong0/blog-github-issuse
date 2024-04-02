/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        client_id : process.env.CLIENT_ID,
        client_secret : process.env.CLIENT_SECRET,
        redirect_uri : process.env.REDIRECT_URI,
        github_Login : process.env.GITHUB_LOGIN,
        github_redirect_uri : process.env.GITHUB_ACCESS_TOKEN_URI,

    },
};

export default nextConfig;
