import React from "react";

interface Props {
  text: string;
}

export const PrimaryBox = ({ text }: Props) => {
  // bg-primary/[.15]
  return (
    <div
      className={`flex px-6 py-3 md:px-8 md:py-4 bg-white shadow-xs rounded-full font-semibold`}
    >
      {text}
    </div>
  );
};
