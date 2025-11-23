import { memo } from "react";
import PanenList from "./PanenList";
import ChataBox from "./ChataBox";
import SendMsgBox from "./SendMsgBox";

interface ChataBoxPropes {}

const ChataHome: React.FC<ChataBoxPropes> = () => {
  return (
    <>
      {" "}
      <div className="h-[calc(100vh-60px)] grid grid-cols-[30%_70%]">
        <div className=" bg-gray-700 h-full">
          <PanenList />
        </div>
        <div className="flex flex-col border-l-2 border-gray-500">
          <ChataBox />
          <SendMsgBox />
        </div>
      </div>
    </>
  );
};

export default memo(ChataHome);
