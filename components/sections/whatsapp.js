"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  const props = {
    phoneNumber: "918115585285",
    accountName: "BizzBuzz Creations",
    avatar: "/Circle Logo.png",
    statusMessage: "Typically replies within 1 hour",
    chatMessage: "Hi 👋 How can we help you?",
  };

  return (
    <FloatingWhatsApp
      style={{ objectFit: "contain" }}
      phoneNumber={props.phoneNumber}
      accountName={props.accountName}
      avatar={props.avatar}
      statusMessage={props.statusMessage}
      chatMessage={props.chatMessage}
      allowEsc
      darkMode={true}
    />
  );
}
