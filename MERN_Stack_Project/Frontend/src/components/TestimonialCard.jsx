export default function TestimonialCard({ name, role, text }) {
    return (
        <div className="card">
            <p>"{text}"</p>
            <h4>{name}</h4>
            {role && <span style={{ color: "#f97316" }}>{role}</span>}
        </div>
    );
}

