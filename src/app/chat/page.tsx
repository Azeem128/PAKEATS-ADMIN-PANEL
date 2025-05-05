
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Send, Paperclip, Smile } from "lucide-react";
// import { supabase } from "@/lib/supabaseClient";
// import { toast } from "react-toastify";

// const ChatPage: React.FC = () => {
//   const [messages, setMessages] = useState<any[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");
//   const [showAttachMenu, setShowAttachMenu] = useState<boolean>(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Fetch all messages
//   useEffect(() => {
//     const fetchMessages = async () => {
//       const { data, error } = await supabase
//         .from("messages")
//         .select("*")
//         .order("created_at", { ascending: true });

//       if (error) {
//         toast.error("Failed to fetch messages: " + error.message);
//         return;
//       }

//       setMessages(data || []);
//     };

//     fetchMessages();
//   }, []);

//   // Scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Handle sending message
//   const handleSendMessage = async () => {
//     if (!newMessage.trim()) return;

//     const { error } = await supabase.from("messages").insert({
//       chat_id: `chat_${Date.now()}`,
//       sender_id: "user_1",
//       receiver_id: "user_2",
//       text: newMessage,
//       created_at: new Date().toISOString(),
//     });

//     if (error) {
//       toast.error("Failed to send message: " + error.message);
//       return;
//     }

//     setNewMessage("");
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Chat Area */}
//       <div className="flex-1 flex flex-col">
//         <div className="p-4 bg-white border-b flex justify-between items-center">
//           <div className="flex items-center">
//             <h2 className="font-medium">All Messages</h2>
//           </div>
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 bg-white">
//           {messages.length === 0 ? (
//             <p className="text-gray-500 text-center">No messages available.</p>
//           ) : (
//             messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`mb-4 flex ${
//                   message.sender_id === "user_1" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[70%] rounded-lg p-3 ${
//                     message.sender_id === "user_1" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
//                   }`}
//                 >
//                   <div className="text-sm">{message.text}</div>
//                 </div>
//               </div>
//             ))
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         <div className="bg-white border-t p-4">
//           <div className="flex items-center gap-2">
//             <div className="relative">
//               <button onClick={() => setShowAttachMenu(!showAttachMenu)}>
//                 <Paperclip className="h-5 w-5 text-gray-600" />
//               </button>
//               {showAttachMenu && (
//                 <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg p-2 w-40">
//                   <button
//                     className="flex items-center gap-2 w-full px-2 py-1 text-sm hover:bg-gray-100"
//                     onClick={() => setShowAttachMenu(false)}
//                   >
//                     <Paperclip className="h-4 w-4" /> Attach File
//                   </button>
//                 </div>
//               )}
//             </div>
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//               />
//               {showEmojiPicker && (
//                 <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-lg p-2">
//                   {["😊", "👍", "❤️", "😂"].map((emoji) => (
//                     <button
//                       key={emoji}
//                       className="p-1 hover:bg-gray-100 rounded"
//                       onClick={() => {
//                         setNewMessage(newMessage + emoji);
//                         setShowEmojiPicker(false);
//                       }}
//                     >
//                       {emoji}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {newMessage.trim() ? (
//               <button onClick={handleSendMessage} className="p-2 rounded-full bg-green-500">
//                 <Send className="h-5 w-5 text-white" />
//               </button>
//             ) : (
//               <button
//                 onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//                 className="p-2 rounded-full hover:bg-gray-100"
//               >
//                 <Smile className="h-5 w-5 text-gray-600" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;