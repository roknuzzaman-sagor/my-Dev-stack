import type { Technology } from "../Type/Type";


const TechnologyCard = ({
  technology,
  onAdd,
  added,
}: {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  added: boolean;
}) => {

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm">
          {technology.badge}
        </span>

      </div>


      <h2 className="mt-4 text-xl font-bold">
        {technology.name}
      </h2>


      <p className="mt-2 text-gray-600">
        {technology.description}
      </p>


      <div className="mt-4 flex justify-between">

        <span className="rounded-full bg-gray-100 px-3 py-1">
          {technology.category}
        </span>

        <span>
          {technology.difficulty}
        </span>

      </div>


      <p className="mt-4">
        ⭐ {technology.rating}
      </p>


      <button
        onClick={() => onAdd(technology)}
        disabled={added}
        className="mt-4 w-full rounded-xl primary-gradient p-3 text-white disabled:bg-gray-400"
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;