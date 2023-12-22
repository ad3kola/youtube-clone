"use client";
import { useState } from "react";
import {
  EXPLORE_LINKS,
  FIRST_BOTTOM_LINKS,
  MAIN_LINKS,
  MY_ACCOUNT_LINKS,
  NAV_LINKS,
  OTHER_YT_LINKS,
  SECOND_BOTTOM_LINKS,
} from "@/utils/links";
import NavLink from "./NavLink";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { closeModal } from "@/redux/features/modalSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import youtubelogo from "@/assets/youtubelogo.png";

function SideBar() {
  const modal = useAppSelector((state) => state.ModalReducer.value.modalState);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="w-auto h-full flex-grow group">
      {modal ? (
        <>
          <div className="absolute bg-black/70 z-20 opacity-1 top-0 md:opacity-0 md:flex md:relative w-full h-full md:bg-transparent duration-600"></div>
          <div className="absolute left-0 top-0 md:relative md:-top-full md:bg-transparent bg-neutral-950 z-20 flex flex-col gap-1 w-60 px-2 py-1 h-full mb-24 scrollbar-thin group-hover:scrollbar-thumb-neutral-700 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <div className="flex md:hidden items-center space-x-3">
              <Bars3CenterLeftIcon
                onClick={() => dispatch(closeModal())}
                className="h-10 p-2 hover:bg-neutral-800 text-neutral-100 rounded-full cursor-pointer"
              />

              <Image src={youtubelogo} alt="yt-logo" height={30} width={100} />
            </div>
            {MAIN_LINKS.map(({ id, Icon, name, active }) => (
              <NavLink key={id} title={name} Icon={Icon} active={active} />
            ))}
            <hr className="w-full border border-neutral-800" />
            <h2 className="px-3 text-base mt-2 text-white font-semibold tracking-wider">
              You &gt;
            </h2>
            {MY_ACCOUNT_LINKS.map(({ id, Icon, name }) => (
              <NavLink key={id} title={name} Icon={Icon} />
            ))}
            <hr className="w-full border border-neutral-800" />
            <h2 className="px-3 text-base mt-3 text-white font-medium tracking-wider">
              Explore
            </h2>
            {EXPLORE_LINKS.map(({ id, Icon, name }) => (
              <NavLink key={id} title={name} Icon={Icon} />
            ))}
            <hr className="w-full border border-neutral-800" />
            <h2 className="px-3 text-base mt-3 text-white font-medium tracking-wider">
              More from Youtube
            </h2>
            {OTHER_YT_LINKS.map(({ id, Icon, name }) => (
              <NavLink key={id} title={name} Icon={Icon} />
            ))}
            <hr className="w-full border border-neutral-800" />
            <div className="flex w-full px-3 whitespace-nowrap flex-wrap gap-1 text-neutral-400 font-semibold mt-2">
              {FIRST_BOTTOM_LINKS.map((link: string, i: number) => (
                <h2
                  key={i}
                  className="whitespace-nowrap text-xs cursor-pointer px-1"
                >
                  {link}
                </h2>
              ))}
            </div>
            <div className="flex w-full px-3 mt-2 whitespace-nowrap flex-wrap gap-1 text-neutral-400 font-semibold">
              {SECOND_BOTTOM_LINKS.map((link: string, i: number) => (
                <h2
                  key={i}
                  className="whitespace-nowrap text-xs cursor-pointer px-1"
                >
                  {link}
                </h2>
              ))}
            </div>
            <h2 className="px-4 py-1 text-[11px] tracking-wider font-semibold text-neutral-500">
              c 2023 Google LLC
            </h2>
          </div>
        </>
      ) : (
        <div className="hidden sm:flex flex-col w-fit gap-1 px-1">
          {NAV_LINKS.map(({ id, name, Icon, active }) => (
            <div
              key={id}
              className={`${
                active && "bg-neutral-800"
              } flex flex-col hover:bg-neutral-800 cursor-pointer items-center px-1 py-3 rounded-lg gap-2`}
            >
              <Icon className="h-6 text-gray-200" />
              <h2 className="text-gray-200 text-[10px]">{name}</h2>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SideBar;
