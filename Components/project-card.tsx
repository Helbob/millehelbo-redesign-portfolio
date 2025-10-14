"use client";

import Image from "next/image";
import React, { useState } from "react";
import CaseStudyModal from "./case-study-modal";

type Props = {
  title: string;
  year?: string;
  tech?: string[];
  thumbnail: any;
  summary: string;
  demoUrl?: string;
  repoUrl?: string;
  process?: {
    title?: string;
    lead?: string;
    steps?: Array<{
      title: string;
      content?: Array<{ type: "text" | "image"; value: string | any }>;
    }>;
  };
};

export default function ProjectCard({
  title,
  year,
  tech,
  thumbnail,
  summary,
  demoUrl,
  repoUrl,
  process,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white/5">
      <div className="aspect-video bg-zinc-100 relative">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="text-sm text-zinc-400">{year}</div>
          </div>
        </div>

        <p className="mt-3 text-sm text-zinc-300 line-clamp-3">{summary}</p>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="text-sm font-medium underline cursor-pointer"
          >
            Case study
          </button>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline"
            >
              Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline"
            >
              Code
            </a>
          )}
        </div>
      </div>

      {/* Case study modal - will display process details if provided */}
      <CaseStudyModal
        open={open}
        onClose={() => setOpen(false)}
        title={process?.title ?? title}
        lead={process?.lead}
        steps={process?.steps}
      />
    </article>
  );
}
