const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, 'users.json');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { username, password } = req.body;

    if (!fs.existsSync(usersFile)) {
        return res.status(404).json({ success: false, message: 'No users found' });
    }

    const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.json({
        success: true,
        message: 'Login successful',
        expiry: user.expiry
    });
}
