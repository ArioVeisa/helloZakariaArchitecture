import Reveal from "@/components/reveal";

type PageHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
};

export default function PageHeader({ label, title, description, dark = false }: PageHeaderProps) {
  return (
    <section className={`wrap pt-32 pb-14 md:pt-44 md:pb-20 ${dark ? "text-paper" : ""}`}>
      <Reveal>
        <p className="label-xs text-brass">{label}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">{title}</h1>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className={`mt-8 max-w-lg text-lg ${dark ? "text-paper/70" : "text-stone"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </section>
  );
}
