"use client";
import { Card } from "@/components/ui/card";
import { Player } from "@lottiefiles/react-lottie-player";
import successAnimation from "@/public/animations/success.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function finish() {
  return (
    <div className="h-[100vh] bg-primary text-white relative">
      <Card className="w-[45vw] absolute left-0 right-0 mx-auto top-[25%] p-6">
        <p className="font-bold text-4xl text-center p-6">Congratulation!</p>
        <Player
          autoplay
          loop
          src={successAnimation}
          style={{ height: "150px", width: "100%" }}
        />
        <p className="text-center mt-6 mb-4 text-gray-600">
          Thank you for voting! Your voice matters, and your participation
          strengthens our democracy. Together, we shape our nation's future.
          Every vote counts, and yours has made a difference. Thank you for
          being part of this important process.
        </p>
        <Link href="/">
          <Button className="w-full">Done</Button>
        </Link>
      </Card>
    </div>
  );
}

export default finish;
