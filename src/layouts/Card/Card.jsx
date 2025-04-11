import { GiFrozenOrb } from "react-icons/gi";

export default function Card(porps) {
  const { name, icon, description } = porps;
  return (
    <div>
      <div className="category-card">
        <div className="category-inner">
          <div className="category-icon mx-auto mb-3">
            <GiFrozenOrb className="text-black" />
          </div>
          <h4>{name}</h4>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
