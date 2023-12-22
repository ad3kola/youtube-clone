"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import VideoFeed from "./VideoFeed";
import { CATEGORIES } from "@/utils/links";
import Categories from "./Categories";


function Main() {
 const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );

  return (
    <main className="flex flex-grow w-full h-full gap-3 lg:px-3">
        <SideBar />
        <section className="flex flex-col flex-grow gap-2 overflow-auto">
          <Categories categories={CATEGORIES} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          <VideoFeed />
        </section>
    </main>
  );
}

export default Main;
