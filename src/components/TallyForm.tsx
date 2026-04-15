"use client";

import { useEffect } from "react";

/**
 * Embed a Tally form. Pass the form ID from https://tally.so
 * (e.g. "wQKM8n") and an optional display title.
 * Uses Tally's official resize script so the iframe auto-fits content.
 */
export default function TallyForm({
  formId,
  title = "Contact form",
}: {
  formId: string;
  title?: string;
}) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.async = true;
    s.onload = () => {
      // @ts-expect-error Tally is loaded from external script
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="260"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title={title}
      className="w-full"
    />
  );
}
