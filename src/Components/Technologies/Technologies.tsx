import type { Technology } from "../Type/Type";
import TechnologyCard from './TechnologyCard';



const Technologies = ({
  stack,
  onAdd,
}: {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}) => {

  return (
    <section>

      <h2 className="mb-6 text-3xl font-bold">
        Explore Technologies
      </h2>


      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {Technologies.map((technology) => (

          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            added={stack.some((item) => item.id === technology.id)}
          />

        ))}

      </div>

    </section>
  );
};

export default Technologies;