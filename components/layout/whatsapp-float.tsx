import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-colors hover:bg-brass sm:h-auto sm:w-auto sm:gap-2 sm:rounded-none sm:px-5 sm:py-3"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="label-xs hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
