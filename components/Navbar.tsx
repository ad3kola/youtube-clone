"use client";
import { useState } from "react";
import {
  Bars3CenterLeftIcon,
  Bars3Icon,
  BellIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {
  MicrophoneIcon,
  MagnifyingGlassIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import youtubelogo from "@/assets/youtubelogo.png";
import Image from "next/image";
import { closeModal, openModal } from "@/redux/features/modalSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
function Navbar() {
  const [mobileSearchBar, setMobileSearchBar] = useState<boolean>(false);

  const dispatch = useDispatch();
  const modal = useAppSelector((state) => state.ModalReducer.value.modalState);
  return (
    <nav className="py-1 px-4 flex items-center space-x-5 justify-between">
      <div
        className={`${
          mobileSearchBar ? "hidden md:flex" : "flex"
        } items-center space-x-3 flex-shrink-0 `}
      >
        {modal ? (
          <Bars3CenterLeftIcon
            onClick={() => dispatch(closeModal())}
            className="h-10 p-2 hover:bg-neutral-800 text-neutral-100 rounded-full cursor-pointer"
          />
        ) : (
          <Bars3Icon
            onClick={() => dispatch(openModal())}
            className="h-10 p-2 hover:bg-neutral-800 text-neutral-100 rounded-full cursor-pointer"
          />
        )}
        <Image src={youtubelogo} alt="yt-logo" height={30} width={100} />
      </div>
      <form
        className={`${
          mobileSearchBar ? "mt-3 md:mt-0 flex mx-auto" : "hidden md:flex"
        } flex-grow items-center justify-center space-x-3`}
      >
        {mobileSearchBar && (
          <ChevronDoubleLeftIcon
            onClick={() => setMobileSearchBar((prev) => !prev)}
            className={`${
              mobileSearchBar && "flex md:hidden"
            } h-9 p-2  bg-neutral-800 hover:bg-neutral-700 duration-100 text-neutral-100 cursor-pointer rounded-full`}
          />
        )}
        <div className="flex flex-grow items-center max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full bg-transparent border border-neutral-800 outline-none px-4 w-full py-[5px] text-base text-neutral-800 focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="h-9 py-2 px-4  bg-neutral-800 text-neutral-100 rounded-r-full cursor-pointer hover:bg-neutral-700 duration-100" />
        </div>
        <MicrophoneIcon className="h-9 bg-neutral-800 p-2 cursor-pointer rounded-full text-white" />
      </form>
      <div
        className={`${
          mobileSearchBar ? "hidden md:flex" : "flex"
        } items-center flex-shrink-0 space-x-1 md:space-x-2`}
      >
        <MagnifyingGlassIcon
          onClick={() => setMobileSearchBar((prev) => !prev)}
          className="block md:hidden text-white h-9 rounded-full p-2 hover:bg-neutral-800 cursor-pointer"
        />
        <MicrophoneIcon className="block md:hidden text-white h-9 rounded-full p-2 hover:bg-neutral-800 cursor-pointer" />
        <VideoCameraIcon className="text-white h-9 rounded-full p-2 hover:bg-neutral-800 cursor-pointer" />
        <BellIcon className="text-white h-9 rounded-full p-2 hover:bg-neutral-800 cursor-pointer" />
        <UserIcon className="text-white h-9 rounded-full p-2 hover:bg-neutral-800 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
