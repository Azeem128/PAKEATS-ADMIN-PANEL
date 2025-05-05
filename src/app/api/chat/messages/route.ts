import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface Message {
  id: number;
  chat_id: string;
  sender_id: string;
  sender: string;
  receiver_id: string;
  text: string;
  time: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const chatId = searchParams.get("chatId");
    const currentUserId = searchParams.get("userId");

    if (!chatId || !currentUserId) {
      return NextResponse.json({ error: "Chat ID and User ID are required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("messages")
      .select("id, chat_id, sender_id, message, created_at, receiver_id")
      .eq("chat_id", chatId)
      .order("created_at", { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const messages: Message[] = data.map((msg) => ({
      id: msg.id,
      chat_id: msg.chat_id,
      sender_id: msg.sender_id,
      sender: msg.sender_id === currentUserId ? "You" : msg.sender_id, // Adjust based on receiver_id if needed
      receiver_id: msg.receiver_id,
      text: msg.message,
      time: new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }));

    return NextResponse.json({ messages }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { chat_id, sender_id, message, receiver_id } = await request.json();

    if (!chat_id || !sender_id || !message || !receiver_id) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const messageData = {
      chat_id,
      sender_id,
      message,
      created_at: new Date().toISOString(),
      receiver_id,
    };

    const { error } = await supabase.from("messages").insert(messageData);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}