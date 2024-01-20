const Stats = () => {
  return (
    <section className="stats stats-vertical lg:stats-horizontal w-full">
      <div className="stat place-items-center">
        <div className="stat-title">Orders</div>
        <div className="stat-value">31K</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Products</div>
        <div className="stat-value">1,200</div>
      </div>
    </section>
  );
};

export default Stats;
