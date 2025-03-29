export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { username } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user) return res.status(404).json({ message: "User not found" });

    user.hwid = null;
    res.json({ success: true, message: "HWID reset successful" });
}
