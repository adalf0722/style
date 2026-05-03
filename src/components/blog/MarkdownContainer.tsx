import type { ReactNode } from "react";

type MarkdownContainerProps = {
  children: ReactNode;
};

export const MarkdownContainer = ({ children }: MarkdownContainerProps) => {
  return (
    <div className="markdown space-y-5 text-base leading-8 text-text">
      {children}
    </div>
  );
};
