"use client"

import LoadingScreen from "@/components/LoadingScreen"
import { useSearchParams } from "next/navigation";
const Home = () => {
  const searchParams = useSearchParams();
  const noLoading = searchParams.get("noloading");
  return (
    <>
    {noLoading !== "true" && <LoadingScreen/>}
    </>
  )
}
export default Home
