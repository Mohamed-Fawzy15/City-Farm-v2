export default function Card(porps) {
  const { name, icon, description } = porps;
  return (
    <div>
      <div className="category-card col-12 col-md-6 col-lg-4">
        <div className="category-inner">
          <div className="category-icon mx-auto mb-3">
            <i className={`${icon} icon `} />
          </div>
          <h4>Category</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            consequuntur quos. Expedita voluptatem autem voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
