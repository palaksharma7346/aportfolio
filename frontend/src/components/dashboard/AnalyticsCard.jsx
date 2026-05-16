const AnalyticsCard = ({
  title,
  value,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <h3 className="mb-3 text-base text-slate-400 sm:text-lg">
        {title}
      </h3>

      <h2 className="break-words text-2xl font-bold text-cyan-400 sm:text-3xl">
        {value}
      </h2>

    </div>
  );
};

export default AnalyticsCard;