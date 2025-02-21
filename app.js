document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const renderLogin = () => {
        root.innerHTML = `
            <div class="container">
                <h1>Login</h1>
                <input type="text" id="username" placeholder="Username" required>
                <input type="email" id="email" placeholder="Email" required>
                <button onclick="login()">Login</button>
            </div>
        `;
    };

    const renderDashboard = () => {
        root.innerHTML = `
            <div class="container">
                <h1>Dashboard</h1>
                <button onclick="showAssignments()">Assignments</button>
                <button onclick="showNotes()">Notes</button>
                <button onclick="startVideoCall()">Video Call</button>
            </div>
        `;
    };

    const showAssignments = () => {
        root.innerHTML = `
            <div class="container">
                <h1>Assignments</h1>
                <p>Here are your assignments.</p>
                <button onclick="renderDashboard()">Back to Dashboard</button>
            </div>
        `;
    };

    const showNotes = () => {
        root.innerHTML = `
            <div class="container">
                <h1>Notes</h1>
                <p>Here are your notes.</p>
                <button onclick="renderDashboard()">Back to Dashboard</button>
            </div>
        `;
    };

    const startVideoCall = () => {
        root.innerHTML = `
            <div class="container">
                <h1>Video Call</h1>
                <p>Starting video call...</p>
                <button onclick="renderDashboard()">Back to Dashboard</button>
            </div>
        `;
    };

    window.login = () => {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        if (username && email) {
            renderDashboard();
        } else {
            alert('Please enter both username and email.');
        }
    };

    renderLogin();
});