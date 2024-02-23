import React from "react";

import { CandidateCard } from "@/app/vote/_components/CandidateCard";

function Vote() {
  return (
    <main className="w-full h-[100vh] relative">
      <div className="bg-flag-pattern bg-cover h-[35vh] relative">
        <div className="text-white text-center absolute bottom-[40%] left-0 right-0">
          <p className="text-4xl mb-1">Vote Your President</p>
          <p className="text-2xl">
            Empowerment through voting: Your President, Your Decision 🇮🇩
          </p>
        </div>
      </div>
      <div className="container mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
          <CandidateCard
            img="/img/candidate-01.jpeg"
            president="H. ANIES RASYID BASWEDAN, PH.D"
            vicePresident="H. A, MUHAIMIN ISKANDAR, DR. (H.C.)"
          />
          <CandidateCard
            img="/img/candidate-02.jpeg"
            president="H. PRABOWO SUBIANTO"
            vicePresident="GIBRAN RAKABUMING RAKA"
          />
          <CandidateCard
            img="/img/candidate-03.jpeg"
            president="H. GANJAR PRANOWO, S,H. M,LP"
            vicePresident="PROF. DR. H. M. MAHFUD MD"
          />
        </div>
      </div>
    </main>
  );
}

export default Vote;
