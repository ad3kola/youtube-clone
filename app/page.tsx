import Image from "next/image";
import Navbar from "../components/Navbar";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";

export default function Home() {

  return (
    <div className="bg-black h-screen relative w-full flex flex-col gap-2 overflow-hidden">
      <Navbar />
      <Main />
    </div>
  );
}
