"use client";

export const Header = () => (
  <h1 className="text-3l">
    こんにちは desde {process.env.NEXT_PUBLIC_ENVIRONMENT}
  </h1>
);
