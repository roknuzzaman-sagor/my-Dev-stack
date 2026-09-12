import { useEffect, useState } from "react";
import type { Technology } from "../Type/Type";
import TechnologyCard from "./TechnologyCard";

const Technologies = ({
  stack,
  onAdd,
}: {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <section>
      <h2 className="mb-7 text-3xl font-bold">
        Explore Technologies
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
          const added = stack.some(
            (item) => item.id === technology.id
          );

          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
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