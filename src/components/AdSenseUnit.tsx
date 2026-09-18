"use client";

import { useEffect } from "react";
import Script from "next/script";

const AD_CLIENT = "ca-pub-1579307532693112";
const AD_SLOT = "8987470782";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// 与えられた広告コードはAMP用(amp-ad)だったが、このアプリは通常のReact/Next.js
// ページ(AMPドキュメントではない)なので、AMPランタイム上でしか動かないamp-adタグは
// 効かない。同じ広告枠(client/slot)を指す通常のAdSenseタグ(adsbygoogle)に置き換えている。
export function AdSenseUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // 広告ブロッカー等でスクリプトが読み込めない場合は何もしない
    }
  }, []);

  return (
    <div className="mt-6">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
