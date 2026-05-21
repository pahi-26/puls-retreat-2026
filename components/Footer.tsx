const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/puls-group-8a776a247"
  },
  {
    label: "Website",
    href: "https://www.puls.nat.fau.de/"
  }
];

export default function Footer() {
  return (
    <footer className="section-shell py-10">
      <div className="flex flex-col gap-4 border-t border-ink/10 pt-6 text-sm text-ink/56 md:flex-row md:items-center md:justify-between">
        <p>sampanna.pahi@fau.de</p>
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
