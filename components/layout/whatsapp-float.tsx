"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline">WhatsApp Us</span>
    </a>
  );
}
