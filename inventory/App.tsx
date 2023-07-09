import { NavigationConductor } from "@app/navigation";
import { useLoadingStore } from "@app/stores";
import { useEffect } from "react";

export default function App() {
  // variables
  const { initializeAppOnStart } = useLoadingStore((store) => store);

  // setup
  useEffect(() => {
    initializeAppOnStart();
  }, []);

  // render
  return <NavigationConductor />;
}
