let users = []; // Temporary storage (Use a database for persistence)

export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { username, password, key, hwid } = req.body;
    if (!username || !password || !key) return res.status(400).json({ message: "All fields required" });

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30); // Set expiry to 30 days

    users.push({ username, password, key, hwid, expiry });

    res.json({ success: true, message: "User registered", expiry });
}
