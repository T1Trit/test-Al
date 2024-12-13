
import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    isLiked: boolean;
    onLike: () => void;
    onDelete: () => void;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    description,
    image,
    isLiked,
    onLike,
    onDelete,
}) => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <img
                src={image}
                alt={title}
                className="card-image"
                onClick={() => navigate(`/products/${id}`)}
            />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
                <div className="card-actions">
                    <button onClick={onLike}>{isLiked ? "❤️" : "🤍"}</button>
                    <button onClick={onDelete}>🗑️</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
