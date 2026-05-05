"use client"

import LoadingScreen from "@/components/LoadingScreen";
import { Suspense } from "react";
const Home = () => {

  return (
    <>
     <Suspense fallback={null}>
      <LoadingScreen />
    </Suspense>

    </>
  )
}
export default Home
