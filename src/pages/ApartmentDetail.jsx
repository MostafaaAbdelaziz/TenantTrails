import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function ApartmentDetail() {

    const navigate = useNavigate();

    return (
        <div className="apartment-detail-page">
            <header className="apartment-detail-header">
                <div className="apartment-detail-brand">TenantTrails</div>
                <button className="back-button" onClick={() => navigate("/dashboard")}>
                    ← Back to Dashboard
                </button>
            </header>   
            

        </div>
    );
}

export default ApartmentDetail;
    
