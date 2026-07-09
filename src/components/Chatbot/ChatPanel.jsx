import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

import ChatLauncher from "./ChatLauncher";
import ChatHeader from "./ChatHeader";
import SuggestedQuestions from "./SuggestedQuestions";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const API_URL =
  import.meta.env.VITE_CHAT_API;

export default function ChatPanel() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [isTyping, setIsTyping] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        from: "bot",
        text: "👋 Welcome to Bioriidl. How can I help you today?",
      },
    ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      text,
      from: "user",
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: text,
          }),
        }
      );

      const data =
        await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text:
            data.reply ||
            "No response received.",
          from: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text:
            "Something went wrong.",
          from: "bot",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <ChatLauncher
          onOpen={() =>
            setIsOpen(true)
          }
        />
      )}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{
              duration: 0.3,
            }}
            className="
            fixed
            top-0
            right-0
            h-screen
            w-full
            md:w-[400px]
            bg-white
            shadow-2xl
            z-9999
            flex
            flex-col"
          >
            <ChatHeader
              onClose={() =>
                setIsOpen(false)
              }
            />

            <div className="flex-1 overflow-y-auto bg-slate-50 p-4">

              {messages.length ===
                1 && (
                <SuggestedQuestions
                  onSelect={
                    sendMessage
                  }
                />
              )}

              {messages.map(
                (message) => (
                  <MessageBubble
                    key={
                      message.id
                    }
                    message={
                      message
                    }
                  />
                )
              )}

              {isTyping && (
                <TypingIndicator />
              )}

            </div>

            <div className="bg-white border-t border-slate-200 p-4">

              <div className="flex gap-3">

                <input
                  value={input}
                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    e.key ===
                      "Enter" &&
                    sendMessage(
                      input
                    )
                  }
                  placeholder="Ask anything..."
                  className="
                  flex-1
                  border
                  border-slate-200
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#A20202]"
                />

                <button
                  onClick={() =>
                    sendMessage(
                      input
                    )
                  }
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#A20202]
                  text-white
                  flex
                  items-center
                  justify-center"
                >
                  <FiSend />
                </button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}