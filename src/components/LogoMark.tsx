export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-col items-center font-sans font-light leading-none ${className}`}
      aria-hidden="true"
    >
      <span className="inline-block leading-none [transform:scaleX(1.2)]">
        S
      </span>
      <span className="mt-[0.068em] h-[0.06em] w-[0.383em] bg-current [clip-path:polygon(8.5%_0%,91.5%_0%,100%_100%,0%_100%)]" />
    </span>
  );
}
