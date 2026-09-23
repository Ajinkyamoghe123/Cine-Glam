import type { ReactNode } from "react";
import { sitePath } from "../lib/site";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
};

export function ArrowLink({ href, children, variant = "dark" }: ArrowLinkProps) {
  return (
    <a className={`arrow-link arrow-link--${variant}`} href={sitePath(href)}>
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}
