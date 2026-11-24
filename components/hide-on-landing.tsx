"use client";

import { usePathname } from "next/navigation";

// /events/ 以下はイベント単体のランディングページなので、サイト共通のヘッダー・フッターを出さない。
// ランディングページ側で最小限のヘッダー・フッター（運営：ArtistMerge → トップへ）を持つ。
export function HideOnLanding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/events/")) return null;
  return <>{children}</>;
}
