"use client";

import WhatsAppFloat from "@/components/layout/whatsapp-float";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <WhatsAppFloat />
    </>
  );
}
