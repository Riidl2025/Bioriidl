import Chatbot from "../../assets/Chatbot/Bio_chatbot_Avatar.png";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">

      <img
        src={Chatbot}
        alt=""
        className="w-8 h-8 rounded-full"
      />

      <div className="bg-white border border-slate-200 rounded-3xl px-4 py-3">

        <div className="flex gap-1">

          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />

          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />

          <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />

        </div>

      </div>

    </div>
  );
}