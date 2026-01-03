import { Suspense } from "react";
import MainSkeleton from "./ui/mainskeleton";
import Main from "./ui/main";

export default function Home() {
  return (
    <Suspense fallback={<MainSkeleton />}>
      <div className="font-sans">
        <Main />
      </div>
    </Suspense>
  );
}
