// import { useState, useRef, useEffect } from "react";
// import Chatbot from "../assets/Chatbot/Bio_chatbot_Avatar.png";

// const riidlRedColor = "#A20202";
// const DarkRed = "#7a0101";
// const LightColor = "#fdf2f2";

// export default function ChatPanel() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [chatStarted, setChatStarted] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       id: 0,
//       text: "👋 Hello! Welcome to the Bioriidl Virtual Assistant. How can I help you today?",
//       from: "bot",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   const sendMessage = async (text) => {
//     if (!text.trim() || isTyping) return;
//     if (!chatStarted) setChatStarted(true);

//     const userMsg = { id: Date.now(), text, from: "user" };
//     setMessages((prev) => [...prev, userMsg]);
//     setIsTyping(true);

//     try {
//       const history = messages
//         .filter((m) => m.from === "user" || m.from === "bot")
//         .map((m) => ({
//           role: m.from === "user" ? "user" : "assistant",
//           content: m.text,
//         }));

//       history.push({ role: "user", content: text });

//       const response = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "claude-sonnet-4-20250514",
//           max_tokens: 1000,
//           system:
//             "You are the Bioriidl Virtual Assistant, a helpful and professional assistant for Bioriidl — a biotech company. Help users learn about Bioriidl's programs, facilities, products, services, and support. Be concise, friendly, and informative. Keep responses under 3 sentences unless more detail is genuinely needed.",
//           messages: history,
//         }),
//       });

//       const data = await response.json();
//       const reply =
//         data?.content?.[0]?.text ||
//         "I'm sorry, I couldn't process that. Please try again.";

//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, text: reply, from: "bot" },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           text: "Something went wrong. Please try again.",
//           from: "bot",
//         },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const handleSend = () => {
//     sendMessage(input);
//     setInput("");
//   };

//   return (
//     <>
//       {/* Side Panel */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           right: 0,
//           height: "100%",
//           width: "360px",
//           background: "#ffffff",
//           borderLeft: "1px solid #e0e0e0",
//           boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
//           display: "flex",
//           flexDirection: "column",
//           zIndex: 50,
//           transition: "transform 0.3s ease-in-out",
//           transform: isOpen ? "translateX(0)" : "translateX(100%)",
//           fontFamily: "'Segoe UI', sans-serif",
//         }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             background: riidlRedColor,
//             padding: "14px 16px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexShrink: 0,
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//             <div
//               style={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 background: "#ff6b6b",
//               }}
//             />
//             <span style={{ color: "#fff", fontSize: "15px", fontWeight: 600 }}>
//               Bioriidl Virtual Assistant
//             </span>
//           </div>
//           <button
//             onClick={() => setIsOpen(false)}
//             style={{
//               background: "rgba(255,255,255,0.15)",
//               border: "none",
//               color: "#fff",
//               width: 28,
//               height: 28,
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontSize: "16px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             ✕
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div
//           style={{
//             flex: 1,
//             overflowY: "auto",
//             padding: "16px",
//             background: "#f5f5f5",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//         >
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               style={{
//                 display: "flex",
//                 justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
//               }}
//             >
//               <div
//                 style={{
//                   maxWidth: "82%",
//                   padding: "10px 14px",
//                   borderRadius:
//                     msg.from === "user"
//                       ? "14px 14px 2px 14px"
//                       : "14px 14px 14px 2px",
//                   background: msg.from === "user" ? riidlRedColor : "#ffffff",
//                   color: msg.from === "user" ? "#fff" : "#222",
//                   fontSize: "13px",
//                   lineHeight: "1.55",
//                   border: msg.from === "bot" ? "1px solid #e4e4e4" : "none",
//                   boxShadow:
//                     msg.from === "bot" ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
//                 }}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}

//           {/* Typing indicator */}
//           {isTyping && (
//             <div style={{ display: "flex", justifyContent: "flex-start" }}>
//               <div
//                 style={{
//                   background: "#ffffff",
//                   border: "1px solid #e4e4e4",
//                   borderRadius: "14px 14px 14px 2px",
//                   padding: "10px 14px",
//                   display: "flex",
//                   gap: "5px",
//                   alignItems: "center",
//                 }}
//               >
//                 {[0, 1, 2].map((i) => (
//                   <span
//                     key={i}
//                     style={{
//                       width: 7,
//                       height: 7,
//                       borderRadius: "50%",
//                       background: "#aaa",
//                       display: "inline-block",
//                       animation: "bounce 1s infinite",
//                       animationDelay: `${i * 0.15}s`,
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Row */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "8px",
//             padding: "12px 14px",
//             background: "#fff",
//             borderTop: "1px solid #e8e8e8",
//             flexShrink: 0,
//           }}
//         >
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             placeholder="Ask about Bioriidl programs or facilities..."
//             style={{
//               flex: 1,
//               border: `1.5px solid ${riidlRedColor}`,
//               borderRadius: "999px",
//               padding: "9px 16px",
//               fontSize: "13px",
//               outline: "none",
//               color: "#333",
//               background: "#fff",
//             }}
//           />
//           <button
//             onClick={handleSend}
//             disabled={isTyping || !input.trim()}
//             style={{
//               background: isTyping || !input.trim() ? "#828c85" : riidlRedColor,
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "6px",
//               padding: "9px 18px",
//               fontSize: "13px",
//               fontWeight: 500,
//               cursor: isTyping || !input.trim() ? "not-allowed" : "pointer",
//               flexShrink: 0,
//               transition: "background 0.15s",
//             }}
//             onMouseEnter={(e) => {
//               if (!isTyping && input.trim())
//                 e.currentTarget.style.background = "#515753";
//             }}
//             onMouseLeave={(e) => {
//               if (!isTyping && input.trim())
//                 e.currentTarget.style.background = riidlRedColor;
//             }}
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* Bounce keyframes injected via style tag */}
//       <style>{`
//         @keyframes bounce {
//           0%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-5px); }
//         }
//       `}</style>

//       {/* Floating Chat Button — only visible when panel is closed */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           style={{
//             position: "fixed",
//             bottom: "24px",
//             right: "24px",
//             width: "130px",
//             height: "52px",
//             borderRadius: "12px",
//             background: riidlRedColor,
//             color: "#ffffff",
//             border: "none",
//             fontSize: "22px",
//             cursor: "pointer",
//             boxShadow: "0 4px 16px rgba(162,2,2,0.35)",
//             zIndex: 50,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "transform 0.15s, background 0.15s",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.08)";
//             e.currentTarget.style.background = riidlRedColor;
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.background = riidlRedColor;
//           }}
//           aria-label="Open chat"
//         >
//           <img
//             src={Chatbot}
//             alt="Chatbot"
//             style={{ width: 55, height: 45, marginRight: 8, borderRadius: 8 }}
//           />
         
//         </button>
//       )}
//     </>
//   );
// }


import React from 'react'
import ChatPanel from "../components/Chatbot/ChatPanel"
function ChatPanelview() {
  return (
    <div>
     <ChatPanel/>
      
    </div>
  )
}

export default ChatPanelview

