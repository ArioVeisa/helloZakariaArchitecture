import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  underline: "border-b border-ink/30 pb-1 hover:border-brass hover:text-brass",
  "underline-light": "border-b border-paper/40 pb-1 hover:border-brass hover:text-brass",
  solid: "bg-ink px-10 py-5 text-paper hover:bg-brass",
  outline: "border border-ink/30 px-7 py-4 hover:bg-ink hover:text-paper",
  light: "border border-paper/60 px-7 py-4 hover:bg-paper hover:text-ink",
  paper: "bg-paper px-7 py-4 text-ink hover:bg-brass hover:text-paper",
};

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export default function ArrowLink({ href, children, variant = "outline", className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "label-xs inline-flex items-center gap-3 transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}
