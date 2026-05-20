export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Safety
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check Domains Safely —{" "}
          <span className="text-[#58a6ff]">Without Getting Sniped</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Registrars track your searches and park domains you look up. DomainGuard routes every query through anonymous proxy networks so your ideas stay yours.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Checking Safely — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No domain ideas exposed.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🛡️", title: "Anonymous Lookups", desc: "Queries routed via rotating proxies — registrars never see your IP." },
          { icon: "🔍", title: "WHOIS + DNS Check", desc: "Full availability check across WHOIS, DNS, and registrar APIs." },
          { icon: "⚡", title: "Bulk Search", desc: "Check hundreds of domains at once without triggering rate limits." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anonymous domain checks",
              "Bulk search up to 500 domains",
              "WHOIS + DNS + registrar availability",
              "Proxy network — zero IP exposure",
              "CSV export of results",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does registrar sniping work?",
              a: "When you search for a domain on GoDaddy or Namecheap, they log your query. Some registrars then register that domain themselves or sell the search data to domain squatters who register it before you can."
            },
            {
              q: "How does DomainGuard prevent this?",
              a: "Every lookup is routed through a rotating pool of anonymous proxies. Registrars see a different IP for each query, making it impossible to tie searches back to you or build a profile of your domain interests."
            },
            {
              q: "Is this legal to use?",
              a: "Yes. WHOIS and DNS lookups are public by design. We simply route them through proxies to protect your privacy — the same way a VPN protects your browsing. No terms of service are violated."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} DomainGuard. All rights reserved.
      </footer>
    </main>
  );
}
