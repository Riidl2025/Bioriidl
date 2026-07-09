import Chatbot from "../../assets/Chatbot/Bio_chatbot_Avatar.png";

export default function ChatLauncher({ onOpen }) {
  return (
    <div className="fixed bottom-6 right-6 z-9999">

      {/* Glow 1 */}
      <div className="absolute inset-0 rounded-full bg-red-600/20 blur-xl animate-pulse scale-125" />

      {/* Glow 2 */}
      <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl animate-ping scale-150" />

      <button
        onClick={onOpen}
        className="
        relative
        w-20
        h-20
        rounded-full
        overflow-hidden
        bg-white
        shadow-[0_12px_40px_rgba(162,2,2,0.45)]
        hover:scale-110
        transition-all
        duration-300"
      >
        <img
          src={Chatbot}
          alt="Bioriidl AI"
          className="w-full h-full object-cover"
        />
      </button>

      <span
        className="
        absolute
        bottom-2
        right-2
        w-5
        h-5
        rounded-full
        bg-green-500
        border-2
        border-white"
      />
    </div>
  );
}