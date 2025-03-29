let apps = []; // Temporary storage (use a database in production)

export default function handler(req, res) {
    if (req.method === "POST") {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "App name is required" });

        // Generate a random 64-character secret key
        const secret = [...Array(64)].map(() => Math.random().toString(36)[2]).join("");

        const newApp = { name, secret, version: "1.0" };
        apps.push(newApp);

        return res.json(newApp);
    }

    if (req.method === "GET") {
        const { name } = req.query;
        const app = apps.find(a => a.name === name);
        if (!app) return res.status(404).json({ message: "App not found" });

        return res.json(app);
    }

    res.status(405).json({ message: "Method not allowed" });
}
