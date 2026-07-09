import { FiX } from "react-icons/fi";
import Chatbot from "../../assets/Chatbot/Bio_chatbot_Avatar.png";

export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-white border-b border-slate-200 px-5 py-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <img
            src={Chatbot}
            alt=""
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="font-semibold text-slate-900">
              Bioriidl AI Assistant
            </h2>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />

              <p className="text-xs text-slate-500">
                Online
              </p>
            </div>
          </div>

        </div>

        <button
          onClick={onClose}
          className="
          w-8
          h-8
          rounded-full
          hover:bg-slate-100
          flex
          items-center
          justify-center"
        >
          <FiX />
        </button>

      </div>

    </div>
  );
}