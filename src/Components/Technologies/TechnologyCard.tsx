import { FaStar } from "react-icons/fa";
import type { Technology } from "../Type/Type";

const TechnologyCard = ({
  technology,
  onAdd,
  added,
}: {
  technology: Technology;
  onAdd: (technology: Technology) => Technology;
  added: boolean;
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-14 w-14 object-contain"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
          {technology.badge}
        </span>
      </div>
      <h2 className="mt-5 text-xl font-bold text-gray-800">
        {technology.name}
      </h2>

      <p className="mt-3 min-h-18 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="border-t mt-5 text-gray-200"></div>

      <div className=" mt-5 flex items-center justify-between gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {technology.category}
        </span>

        <span className="text-sm text-gray-500">{technology.difficulty}</span>

        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />

          <span className="font-medium">{technology.rating}</span>
        </div>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={added}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold text-white ${
          added ? "cursor-not-allowed bg-gray-400" : "primary-gradient"
        }`}
      >
        {added ? "✓ Stack is Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
