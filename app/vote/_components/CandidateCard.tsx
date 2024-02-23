"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CandidateCardProps = {
  className?: string;
  img: string;
  president: string;
  vicePresident: string;
};

export function CandidateCard({
  className,
  img,
  president,
  vicePresident,
}: CandidateCardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  async function onSubmit() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/finish");
    }, 3000);
  }
  return (
    <Card
      className={cn(className, "hover:-mt-2 shadow-md transform duration-200")}
    >
      <CardContent className="px-0">
        <Image
          src={img}
          alt="candidate-photo"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="w-full h-auto rounded-t-md"
        />
        <div className="px-6 mt-6">
          <p className="text-center font-semibold">
            {president} <br /> & <br /> {vicePresident}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Choose</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirmation</DialogTitle>
              <DialogDescription>
                Are you sure with your choice? this action is can not be undone
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                className="w-full"
                onClick={onSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle className="mr-2 h-4 w-4" />
                )}{" "}
                Yes, it is confirmed
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
