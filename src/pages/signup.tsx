
export default function CSR() {
    
    const fetchData =  () => {
        const githubClientId = process.env.client_id;
        const githubLoginUrl = process.env.github_Login;
        const githubRedirectUrl = process.env.redirect_uri;  
        if (!githubClientId || !githubLoginUrl || !githubRedirectUrl) {
            console.error('GitHub client ID or login URL is not defined');
            return;
        }
        const scope = 'read:user public_repo';
        const url = `${githubLoginUrl}?scope=${scope}&client_id=${githubClientId}&redirect_uri=${githubRedirectUrl}`;
        return url;
    }
    return (
    <div>
        <h1>Client Side Rendering</h1>
        <h2>Click the button to get the user code</h2>
        <a href={fetchData()}><button>Get User Code</button></a>
    </div>
    );
}
