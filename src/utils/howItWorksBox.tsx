type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
  iconColor,
}: FeatureCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col h-full">
      <h2 className="text-[22px] font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className={`mt-auto text-2xl ${iconColor}`}>{icon}</div>
    </div>
  );
};
export default FeatureCard;
