import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) : Promise<void> {
    const { code } = req.query;
    if (!code) {
        res.status(400).json({ message: "Code is required" });
        return;
    }
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const accessTokenUri = process.env.GITHUB_ACCESS_TOKEN_URI;
    if (!clientId || !clientSecret || !accessTokenUri) {
      res.status(500).json({ error: "Environment variables not set" });
      return;
    }
    const githubapi = accessTokenUri+`?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;
    try {
        const response = await fetch(githubapi, {
            method: "POST",
            headers: {
                accept: 'application/json',
            },
        }); 
        const {access_token:accessToken } = await response.json();
        res.redirect(`http://localhost:3000/redirect?accessToken=${accessToken}`);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch access token" });
    }
}