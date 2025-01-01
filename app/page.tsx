import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold  drop-shadow-md">Auth</h1>
        <p className="text-lg">A simple Authentication App</p>
        <div>
          <Button variant="secondary">Sign In</Button>
        </div>
      </div>
    </main>
  );
}
