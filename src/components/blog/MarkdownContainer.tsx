import type { ReactNode } from "react";

type MarkdownContainerProps = {
  children: ReactNode;
};

export const MarkdownContainer = ({ children }: MarkdownContainerProps) => {
  return <div className="markdown space-y-4 text-sm">{children}</div>;
};
