export default function ServiceCard({ title, description, image }) {
    return (
        <div className="service-card">
            <div className="image-wrapper">
                <img src={image} alt={title} loading="lazy" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}


