import * as Components from "../utils/component_exporter";

const AllComponents = () => {
  return (
    <div className="flex flex-wrap items-center m-5 gap-10 justify-center">
      {Object.keys(Components).map((component) => {
        const Component = Components[component];
        return (
          <>
            <div>
              <h3 className="text-xl text-center mb-2">{component}</h3>
              <div
                key={component}
                className="flex flex-col items-center justify-center border-gray-400 p-5 border-2 rounded-xl w-44 h-44"
              >
                <Component />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AllComponents