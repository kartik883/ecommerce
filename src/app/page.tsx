import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  return(
    <div className=" felx justify-center text-center">
      <h1>home page</h1>
      <Button variant="elevated">
        <span className="text-black">Button</span>
      </Button>
      <Input
      className="mt-4"
      placeholder="enter name"
      />
      <Progress>
        
      </Progress>

    </div>
  )
}
