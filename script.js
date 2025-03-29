function adminLogin() {
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === "nationcheats" && password === "4263ff") {
        document.querySelector(".user-panel").style.display = "block";
        document.querySelector(".container").style.display = "none";
    } else {
        document.getElementById("admin-error").innerText = "Invalid Admin Credentials!";
    }
}

function addUser() {
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const expiry = document.getElementById("new-expiry").value;

    fetch("https://nation-auth.vercel.app/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiry })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("user-message").innerText = "User added successfully!";
        } else {
            document.getElementById("user-message").innerText = "Failed to add user!";
        }
    })
    .catch(error => console.error("Error:", error));
}
