export default function handler(req, res) {
    if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

    const key = [...Array(32)].map(() => Math.random().toString(36)[2]).join("");
    res.json({ key, expiry: "30 days" });
}
