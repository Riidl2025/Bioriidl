import ReactMarkdown from "react-markdown";
import Chatbot from "../../assets/Chatbot/Bio_chatbot_Avatar.png";

export default function MessageBubble({
  message,
}) {
  if (message.from === "user") {
    return (
      <div className="flex justify-end mb-4">

        <div
          className="
          bg-[#A20202]
          text-white
          rounded-3xl
          px-4
          py-3
          text-sm
          max-w-[80%]"
        >
          {message.text}
        </div>

      </div>
    );
  }

  return (
    <div className="flex gap-3 mb-4">

      <img
        src={Chatbot}
        alt=""
        className="w-8 h-8 rounded-full"
      />

      <div className="bg-white border border-slate-200 rounded-3xl px-4 py-3 text-sm text-slate-700 max-w-[80%] [&_a]:text-[#A20202] [&_a]:underline [&_a]:font-medium"
>       <ReactMarkdown components={{
           a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
       }}
    >
    {message.text}
  </ReactMarkdown>
</div>

    </div>
  );
}