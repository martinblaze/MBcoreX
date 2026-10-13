/**
 * Re-mounts on every navigation (unlike layout), which replays the curtain.
 * Pure CSS so it lifts on its own even if JavaScript is slow to load.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="page-curtain">
        <span className="text-[clamp(2rem,6vw,5rem)] font-extrabold tracking-[-0.06em]">
          MB<span className="font-medium">core</span>X
        </span>
      </div>
      {children}
    </>
  )
}
