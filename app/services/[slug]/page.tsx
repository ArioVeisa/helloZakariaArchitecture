import { services } from "@/data";
import ServiceDetailClient from "./client";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServiceDetailClient params={params} />;
}
