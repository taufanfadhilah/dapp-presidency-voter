import { Card } from "@/components/ui/card";
import React from "react";

function finish() {
  return <div className="h-[100vh] bg-primary text-white relative">
    <Card className="w-[45vw] absolute left-0 right-0 mx-auto top-[25%]">
        <p className="font-bold text-4xl text-center p-6">Congratulation!</p>
        
    </Card>
  </div>;
}

export default finish;
