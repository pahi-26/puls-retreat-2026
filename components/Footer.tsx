const socialLinks = [
  { label: "LinkedIn", href: "https://example.com/linkedin" },
  { label: "Bluesky", href: "https://example.com/bluesky" },
  { label: "X", href: "https://example.com/x" }
];

export default function Footer() {
  return (
    <footer className="section-shell py-10">
      <div className="flex flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/56 md:flex-row md:items-center md:justify-between">
        <p>contact@puls-retreat.org</p>
        <p>PULS Retreat 2026</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
