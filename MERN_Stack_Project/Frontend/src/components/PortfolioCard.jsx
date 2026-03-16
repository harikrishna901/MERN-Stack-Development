export default function PortfolioCard({ title, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}
