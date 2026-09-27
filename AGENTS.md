<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Structure

- Landing page sections are separate components under `src/components/landing/`, composed by `src/routes/index.tsx`; `/signup` is a placeholder route.
- Why: the brief requires each section to be its own component; scroll-reveal is handled by `src/components/landing/Reveal.tsx`.

## Brand system

- Use semantic tokens for the supplied orange/cyan/deep-navy palette, with Manrope headings and DM Sans body text; this keeps every page consistent with NxDigita's approved identity.

