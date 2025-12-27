import React, { memo } from "react";
import { connect } from "react-redux";
import type { Message } from "../types/msgTypes";
import type { State } from "../store/store";
import { getMessagesSelector } from "../store/selectors/messages";
interface ChatBoxProps {
  messages: Message[];
}
const ChataBox: React.FC<ChatBoxProps> = ({ messages }) => {
  console.log(messages);

  return (
    <div className="h-[90%] bg-gray-700 p-2">
      <ul className="flex flex-col gap-2">
        {messages?.map((v: Message, i: number) =>
          v.userId === 1 ? (
            <div
              key={`${v.msg}${i}`}
              className="bg-blue-400 p-1 self-end w-[100px] text-center"
            >
              {v.msg}
            </div>
          ) : (
            <div
              key={`${v.msg}${i}`}
              className="bg-gray-400 p-1 self-start w-[100px] text-center"
            >
              {v.msg}
            </div>
          )
        )}
      </ul>
    </div>
  );
};

const mapStateToProp = (state: State) => ({
  messages: getMessagesSelector(state),
});

export default connect(mapStateToProp)(memo(ChataBox));
