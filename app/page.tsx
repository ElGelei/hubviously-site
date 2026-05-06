import Script from "next/script";
import { homeHtml } from "./_lib/content";

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <Script src="/canvas.js" strategy="afterInteractive" />
    </>
  );
}
