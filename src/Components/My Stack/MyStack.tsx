import type { Technology } from "../Type/Type";

const MyStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: {
  stack: Technology[];
  onRemove: (id: string) => Technology;
  onRemoveAll: () => Technology[];
}) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold">Your Stack</h2>

        <span className="text-sm text-gray-500">
          {stack.length} Technology Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="py-12 text-center text-gray-500 rounded-xl border-2 border-dotted border-gray-300 p-6">
          Your stack is empty.
        </p>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border-2 border-solid border-gray-200 bg-gray-50 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{technology.name}</h3>

                  <p className="text-sm text-gray-500">{technology.category}</p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-gray-700 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-red-500 py-2 font-medium text-red-500 hover:bg-red-500 hover:text-white"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default MyStack;
