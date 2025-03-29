export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "App name is required" });

    // Generate secret key (64 characters)
    const secret = [...Array(64)].map(() => Math.random().toString(36)[2]).join("");
    
    const newApp = { name, secret, version: "1.0" };
    
    res.json(newApp);
}
