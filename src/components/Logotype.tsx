export default function Logotype({
  className = "",
  gapClassName = "bg-solis-brown",
  showGap = true,
}: {
  className?: string;
  gapClassName?: string;
  showGap?: boolean;
}) {
  return (
    <span
      className={`tracked inline-block font-sans font-light leading-none ${className}`}
      role="img"
      aria-label="SOLIS"
    >
      {"SOLIS".split("").map((letter, i) =>
        letter === "L" ? (
          <span key={i} className="relative inline-block leading-none">
            <span className="inline-block leading-none [transform:translateX(-10%)_scaleX(1.1)]">
              I
            </span>
            {showGap && (
              <>
                <span
                  aria-hidden
                  className={`absolute left-[-0.04em] bottom-[0.07em] h-[0.13em] w-[0.48em] transition-colors duration-500 ${gapClassName}`}
                />
                <span
                  aria-hidden
                  className="absolute left-[-0.04em] bottom-0 h-[0.07em] w-[0.5em] bg-current [clip-path:polygon(6%_0%,94%_0%,100%_100%,0%_100%)]"
                />
              </>
            )}
          </span>
        ) : (
          <span key={i} className="inline-block">
            {letter}
          </span>
        ),
      )}
    </span>
  );
}
