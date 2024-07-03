import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "../App.css"; // Import the CSS file for styling

export default function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <h1 className="dashboard-title">Dashboard</h1>
                <div className="dashboard-welcome">
                    {!!user && (
                        <h2 className="dashboard-welcome-message">Hi {user.name}!</h2>
                    )}
                    <p className="dashboard-project-description">
                        <strong>About:</strong> Full-Stack Authentication with MERN and JWT. Demonstrates robust user authentication using MongoDB, Express.js, React, and Node.js, enhanced with JSON Web Tokens (JWT). Features include secure registration, login, and protected routes, ideal for building secure, scalable web applications.
                    </p>
                </div>
            </div>
        </div>
    );
}
