import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../shared/Button";
import Input from "../shared/Input";
import socket from "../services/socket";
import type { Message } from "../types/msgTypes";
import { addMessage } from "../store/slices/messagesSlice";

interface SendMsgBoxProps {
  addMessage: (msg: Message) => void;
}

const SendMsgBox: React.FC<SendMsgBoxProps> = ({ addMessage }) => {
  const [sendMsg, setSendMsg] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    socket.on("message", (data: Message) => {
      console.log("Received:", data);
      addMessage(data);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, [addMessage]);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (sendMsg.trim() === "") return;

    const newMsg: Message = {
      userId: 1,
      msg: sendMsg,
    };

    socket.emit("message", newMsg);
    addMessage(newMsg);

    setSendMsg("");
  };

  const handleImage = (e: any) => {
    console.log(e.target.value);
    setImage(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-3 mb-1 w-full h-[7%]"
    >
      <Input
        type="file"
        className="bg-gray-600 cursor-pointer rounded-full my-1 mx-2 text-gray-500 h-full"
        onChange={handleImage}
        value={image}
        containerClass=""
      />

      <Input
        type="text"
        value={sendMsg}
        className="bg-gray-400 rounded-l w-full"
        onChange={(e) => setSendMsg(e.target.value)}
        containerClass="col-span-2 col-start-2"
      />

      <Button className="bg-sky-400 h-full " type="primary">
        send
      </Button>
    </form>
  );
};

const mapDispatchToProps = {
  addMessage,
};

export default connect(null, mapDispatchToProps)(memo(SendMsgBox));
