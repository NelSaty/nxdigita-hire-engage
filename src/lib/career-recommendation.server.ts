import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createLovableAiGatewayRunIdFetch } from "./lovable-ai-run-id.server";

const TRACKS = [
  "Full-Stack Web Development",
  "AI/ML Engineering",
  "Data Analytics",
  "Cloud & DevOps",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing & Growth",
] as const;

export type CareerRecommendation = {
  recommendedTrack: string;
  fitSummary: string;
  skillGaps: string[];
  nextSteps: string[];
};

function extractJson(text: string): unknown {
  const cleaned = text.trim().replace(/^```json\s*/i, "").replace(/\s*```$/, "");
  return JSON.parse(cleaned);
}

export async function createCareerRecommendation(input: {
  apiKey: string;
  skills: string;
  goals: string;
  education: string;
  availability: string;
  preferredTrack: string;
}): Promise<CareerRecommendation> {
  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey: input.apiKey,
    headers: {
      "Lovable-API-Key": input.apiKey,
      "X-Lovable-AIG-SDK": "vercel-ai-sdk",
    },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system: `You are NxDigita AI Technologies' career advisor. Follow the Hire · Engage · Deploy model and never describe training as a phase. Choose exactly one primary internship track from this list: ${TRACKS.join(", ")}.
Return only valid JSON with this exact shape: {"recommendedTrack":"one listed track","fitSummary":"2 concise sentences","skillGaps":["item","item","item"],"nextSteps":["item","item","item"]}. Be specific, practical, and encouraging.`,
    prompt: `Education: ${input.education}\nSkills: ${input.skills}\nCareer goals: ${input.goals}\nAvailability: ${input.availability}\nPreferred track: ${input.preferredTrack}`,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  const raw = await result.text;
  const parsed = extractJson(raw) as Partial<CareerRecommendation>;
  if (
    typeof parsed.recommendedTrack !== "string" ||
    !TRACKS.includes(parsed.recommendedTrack as (typeof TRACKS)[number]) ||
    typeof parsed.fitSummary !== "string" ||
    !Array.isArray(parsed.skillGaps) ||
    !parsed.skillGaps.every((item) => typeof item === "string") ||
    !Array.isArray(parsed.nextSteps) ||
    !parsed.nextSteps.every((item) => typeof item === "string")
  ) {
    throw new Error("The recommendation was incomplete. Please try again.");
  }
  return {
    recommendedTrack: parsed.recommendedTrack,
    fitSummary: parsed.fitSummary,
    skillGaps: parsed.skillGaps,
    nextSteps: parsed.nextSteps,
  };
}