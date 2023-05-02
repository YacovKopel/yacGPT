import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">YacGpt!</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Explain the lifecycle of a caterpillar</p>
            <p className="infoText">
              What is the difference between a dog and cat?
            </p>
            <p className="infoText">What is the color of the sun?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Type a loop Function</p>
            <p className="infoText">
              create a table that will help me keep track of my finances.
            </p>
            <p className="infoText">the square root of 64</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Summarize the the Harry Potter series</p>
            <p className="infoText">
              Give me a recipe for the best Mac n Cheese.
            </p>
            <p className="infoText">
              What workout should i do to get a bigger chest?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
