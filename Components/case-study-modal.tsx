"use client";

import React, { useEffect } from "react";

type ContentBlock = { type: "text" | "image"; value: string | any };
type Step = {
  title: string;
  content?: ContentBlock[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  lead?: string;
  steps?: Step[];
};

export default function CaseStudyModal({
  open,
  onClose,
  title,
  lead,
  steps = [],
}: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 max-w-3xl w-full max-h-[90vh] overflow-auto rounded p-6 m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-zinc-400 mt-2">{lead}</p>
          </div>
          <button onClick={onClose} className="text-zinc-400">
            Close
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-1 gap-4 items-start"
            >
              <div className="md:col-span-2">
                <h3 className="font-semibold">{s.title}</h3>
                <div className="text-zinc-400 mt-2">
                  {(s.content || [])
                    .filter((c) => c.type === "text")
                    .flatMap((c, idx) => {
                      const val = c.value;
                      // If array, render each item as a paragraph
                      if (Array.isArray(val)) {
                        return (val as string[]).flatMap((para, pidx, arr) => [
                          <p key={`${idx}-${pidx}`} className="leading-relaxed">
                            {para}
                          </p>,
                          // spacer between paragraphs
                          pidx < arr.length - 1 ? (
                            <div key={`sp-${idx}-${pidx}`} className="h-8" />
                          ) : null,
                        ]);
                      }

                      const text = String(val ?? "");
                      let parts = text
                        .split(/\n{2,}/)
                        .map((p) => p.trim())
                        .filter(Boolean);
                      if (parts.length === 0) {
                        parts = text
                          .split(/\n/)
                          .map((p) => p.trim())
                          .filter(Boolean);
                      }
                      return parts.flatMap((para, pidx, arr) => [
                        <p key={`${idx}-${pidx}`} className="leading-relaxed">
                          {para.split(/\n/).map((line, li, lines) => (
                            <React.Fragment key={li}>
                              {line}
                              {li < lines.length - 1 ? <br /> : null}
                            </React.Fragment>
                          ))}
                        </p>,
                        pidx < arr.length - 1 ? (
                          <div key={`sp-${idx}-${pidx}`} className="h-8" />
                        ) : null,
                      ]);
                    })}
                </div>
              </div>
              <div className="md:col-span-1">
                {/* Visual column — render the first image block if present. */}
                {(() => {
                  const imgBlock = (s.content || []).find(
                    (c) => c.type === "image"
                  ) as ContentBlock | undefined;
                  if (!imgBlock) return null;
                  const src = (imgBlock.value as any).src ?? imgBlock.value;
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={src}
                      alt={s.title}
                      className="w-xl rounded justify-center mx-auto"
                    />
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
