export default function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-8 mt-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="flex flex-wrap justify-between gap-8 pb-8 border-b border-border">
          <div>
            <p className="font-display text-[18px] text-ink mb-1">
              ZL Marketing Studio
            </p>
            <p className="font-italic italic text-[13px] text-ink-muted">
              Launching creators, experts and founder-led brands in China.
            </p>
          </div>
          <div>
            <a
              href="mailto:zoe@chinamarketingzl.com"
              className="text-[14px] text-accent no-underline block mb-2"
            >
              zoe@chinamarketingzl.com
            </a>
            <div className="flex gap-4 flex-wrap">
              {[
                ["RedNote", "https://www.xiaohongshu.com/user/profile/6527ed3a000000002b003d8c"],
                ["Instagram", "https://www.instagram.com/chinamarketingzl/"],
                ["YouTube", "https://www.youtube.com/@chinamarketingzl"],
                ["LinkedIn", "https://www.linkedin.com/in/chinamarketingzl"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] text-ink-muted no-underline hover:text-ink"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap justify-between gap-4">
          <p className="text-[13px] text-ink-soft">
            Join the free 6-day{" "}
            <em className="font-italic italic text-accent">
              RedNote Marketing 101
            </em>{" "}
            email course →
          </p>
          <p className="text-[12px] text-ink-muted">
            © 2026 ZL Marketing Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
