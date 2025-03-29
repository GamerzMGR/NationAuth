export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { username, password, hwid } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });
    if (user.hwid !== hwid) return res.status(403).json({ success: false, message: "HWID Mismatch" });

    res.json({ success: true, username, expiry: user.expiry });
}
