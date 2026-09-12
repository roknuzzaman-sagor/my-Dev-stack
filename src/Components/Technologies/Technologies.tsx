import { useEffect, useState } from "react";
import type { Technology } from "../Type/Type";
import TechnologyCard from "./TechnologyCard";

const Technologies = ({
  stack,
  onAdd,
}: {
  stack: Technology[];
  onAdd: (technology: Technology) => Technology;
}) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          Explore{" "}
          <span className="bg-linear-to-r from-[#f97316] to-purple-600 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-gray-700">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

     
      {loading ? (
        <h2 className="text-center text-3xl font-bold text-gray-500">
          Loading....
        </h2>
      ) : (
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
      )}
    </section>
  );
};

export default Technologies;