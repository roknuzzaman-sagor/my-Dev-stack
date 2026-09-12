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

      <h2 className="mb-7 text-3xl font-bold">
        Explore Technologies
      </h2>


      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {Technologies.map((Technology) => {

          const added = stack.some(
            (item) => item.id === Technology.id
          );

          return (
            <TechnologyCard
              key={Technology.id}
              technology={Technology}
              onAdd={onAdd}
              added={added}
            />
          );
        })}

      </div>

    </section>
  );
};

export default Technologies;