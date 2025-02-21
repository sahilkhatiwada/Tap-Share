import React from "react";
import SearchCode from "../inputFields/searchCode";
import { useStore } from "../../utility/store";
import HistoryIcon from "../../pages/history/components/History-icon";

/**
 * The navigation bar at the top of the page.
 * This component displays the logo of TapShare, a search bar when no files are selected,
 * and a history button at the top right corner of the screen.
 * @returns {React.ReactElement} The navigation bar component.
 */
const AppBar = () => {
  const files = useStore((state) => state.files);
  return (
    <nav className="fixed w-full">
      <div className="flex justify-center flex-col select-none w-full items-center p-[1em] relative gap-y-10">
        <a
          href="https://tapshare.xyz"
          title="TapShare"
          className="flex items-center gap-[.3rem] cursor-pointer"
        >
          <div className="flex justify-center items-center bg-[rgba(0,0,0,0.2)] p-[2px] rounded-full">
            <div className="flex justify-center bg-[rgba(0,0,0,0.4)] rounded-full">
              <img
                src="/tapShare-194x194.webp"
                className="w-8 backdrop-blur-lg rounded-full"
                alt="TapShare Logo"
              />
            </div>
          </div>
          <p className="text-[1.5rem] text-[#efefef] font-semibold tracking-wide">
            Share
          </p>
        </a>
        {Array.isArray(files) && files?.length <= 0 && <SearchCode />}
        <div className="absolute top-0 right-0 m-[1rem] flex flex-col justify-center items-center gap-2">
          <HistoryIcon />
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
