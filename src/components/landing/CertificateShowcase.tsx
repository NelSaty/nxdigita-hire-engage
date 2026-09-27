import { useState } from "react";
import { Download, FileText, Linkedin, Loader2, Share2 } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Placeholder UI for the post-signup intern dashboard flow.
 * Wire actual PDF generation and share intents later — dummy data for now.
 */
const CERTIFICATE = {
  name: "Your Name Here",
  college: "Your College",
  program: "6-month AI & Talent-Tech Internship",
  issued: "Sep 2026",
  credentialId: "NX-2026-AI-9482",
};

const SHARE_MESSAGE =
  "I've completed my internship with NxDigita AI Technologies! 🎓 #NxDigitalCertified #CareerGrowth";
const SHARE_URL = "https://nxdigita.ai";

function shareUrl(network: "linkedin" | "x" | "whatsapp") {
  const text = encodeURIComponent(SHARE_MESSAGE);
  const url = encodeURIComponent(SHARE_URL);
  switch (network) {
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "x":
      return `https://twitter.com/intent/tweet?text=${text}%20${url}`;
    case "whatsapp":
      return `https://wa.me/?text=${text}%20${url}`;
  }
}

export function CertificateShowcase() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Placeholder: real PDF generation ships with the intern dashboard.
  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1400);
  };

  return (
    <section id="certificate" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium tracking-wide text-primary">
              PROOF OF WORK
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Certified &amp; Completed. Share It.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Every certificate is credited for a live project contribution — and
              built to be shared with the people who hire.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-2xl">
            <CertificateMock />

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {downloading ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Download className="size-4" aria-hidden="true" />
                )}
                {downloading
                  ? "Preparing…"
                  : downloaded
                    ? "Available after sign-up"
                    : "Download Certificate"}
              </button>

              <div className="flex w-full items-center gap-2 sm:w-auto">
                <span className="hidden h-11 items-center gap-2 rounded-md border border-border px-4 text-sm text-muted-foreground sm:inline-flex">
                  <Share2 className="size-4" aria-hidden="true" />
                  Share Achievement
                </span>
                <a
                  href={shareUrl("linkedin")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on LinkedIn"
                  className="inline-flex size-11 flex-1 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:flex-none"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={shareUrl("x")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on X"
                  className="inline-flex size-11 flex-1 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:flex-none"
                >
                  <FileText className="size-0" aria-hidden="true" />
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={shareUrl("whatsapp")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Share on WhatsApp"
                  className="inline-flex size-11 flex-1 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:flex-none"
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Mock certificate — dark navy, thin single-tone border, serif name in accent blue. */
function CertificateMock() {
  return (
    <div className="rounded-2xl border border-border bg-background p-2 shadow-2xl">
      <div className="rounded-xl border border-border/60 p-6 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold tracking-tight text-foreground">
            NxDigital AI Technologies{" "}
            <span className="font-normal text-muted-foreground">· TalentForge</span>
          </p>
          <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground">
            CERTIFIED &amp; COMPLETED
          </span>
        </div>

        <p className="mt-10 font-serif text-3xl italic text-foreground sm:text-4xl">
          Congratulations,
        </p>
        <p className="font-serif text-4xl text-primary sm:text-5xl">
          {CERTIFICATE.name}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{CERTIFICATE.program}</p>

        <div className="mt-12 grid gap-6 border-t border-border pt-6 text-xs sm:grid-cols-3">
          <div>
            <p className="tracking-[0.18em] text-muted-foreground/70">COLLEGE</p>
            <p className="mt-1.5 text-sm font-medium text-foreground">
              {CERTIFICATE.college}
            </p>
          </div>
          <div>
            <p className="tracking-[0.18em] text-muted-foreground/70">ISSUED</p>
            <p className="mt-1.5 text-sm font-medium text-foreground">
              {CERTIFICATE.issued}
            </p>
          </div>
          <div>
            <p className="tracking-[0.18em] text-muted-foreground/70">CREDENTIAL ID</p>
            <p className="mt-1.5 font-mono text-sm font-medium text-foreground">
              {CERTIFICATE.credentialId}
            </p>
          </div>
        </div>
        <p className="mt-6 text-[11px] text-muted-foreground/60">
          #NxDigitalInterns #NxDigitalCertified #CareerGrowth
        </p>
      </div>
    </div>
  );
}
