import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up Free — NxDigita AI Technologies" },
      {
        name: "description",
        content:
          "Create your free NxDigita AI Technologies account and start your internship-to-placement journey: Hire · Engage · Deploy.",
      },
      {
        property: "og:title",
        content: "Sign Up Free — NxDigita AI Technologies",
      },
      {
        property: "og:description",
        content:
          "Create a free account and start building a verified track record through live project internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Signup,
});

/** Placeholder signup — wire real auth later. */
function Signup() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-md px-4 py-10 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>

        <div className="mt-10 rounded-xl border border-border bg-card p-8">
          <p className="text-[10px] font-medium tracking-[0.28em] text-muted-foreground">
            NXDIGITA AI TECHNOLOGIES
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Create your free account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Start your Hire · Engage · Deploy journey today.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
              Thanks! This is a placeholder form — real account creation is coming
              next.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <Field label="Full name" name="name" type="text" placeholder="Your Name" />
              <Field label="Email" name="email" type="email" placeholder="you@college.edu" />
              <Field
                label="College"
                name="college"
                type="text"
                placeholder="Your College"
              />
              <Field
                label="Password"
                name="password"
                type="password"
                placeholder="Create a password"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting && (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                )}
                {submitting ? "Creating account…" : "Sign Up Free"}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <span className="font-medium text-primary">Login</span> (coming soon)
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
