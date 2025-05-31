import React, { lazy, Suspense } from "react";
import { Loader } from "./components/ui/Loader";

const Home = lazy(() => import("./Home"));

const App: React.FC = () => {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      </main>
    </>
  );
};
export default App;
