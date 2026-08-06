import Nav from '../../../components/Nav';
import StatusBar from '../../../components/StatusBar';

export const metadata = {
  title: 'NavNet.ai — AI-Native Network Monitoring | Tasaar Networks',
  description: 'Network Intelligence — navigating networks, built for what\'s next. One AI-native platform combining table-stakes NMS reliability with gRPC telemetry and NavAssist RAG.',
  alternates: { canonical: 'https://tasaar.com/products/navnet' },
};

export default function NavNetPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />

      {/* ═══════ SHARED SITE NAV ═══════ */}
      <Nav active="products" />

      <main className="cadence-editorial-page font-plex-sans">
        {/* ═══════ HERO SECTION (STANDARD EDITORIAL STYLE - DRAFTING WHITE #FFFFFF) ═══════ */}
        <section className="cadence-editorial-hero bg-white">
          <div className="cadence-wrap">
            <h1 className="editorial-title font-plex-sans">
              NavNet <em>— navigating networks, The new age NMS that solves anomalies.</em>
            </h1>

            <p className="editorial-lede">
              Every network monitor watches your infrastructure. NavNet navigates it — combining table-stakes NMS reliability with built-in NavAssist AI troubleshooting and high-frequency gRPC telemetry for AI workloads.
            </p>

            <div className="cadence-defrow font-plex-mono">
              <span>SNMP v1/v2/v3</span>
              <span>gRPC Stream</span>
              <span>NetFlow / IPFIX</span>
              <span>WMI / SSH</span>
            </div>

            <div className="hero-cta-group">
              <a href="mailto:hello@tasaar.com?subject=NavNet.ai%20Start" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Start free
              </a>
              <a href="mailto:hello@tasaar.com?subject=NavNet.ai%20Demo" className="cadence-btn btn-teal-outline btn-lg font-plex-mono">
                Book a demo
              </a>
            </div>

            {/* NAVASSIST TRUST BANNER */}
            <div className="sentinel-trust-banner">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="trust-text">
                <strong>Powered by NavAssist RAG</strong> — real-time automated fault diagnosis grounded in live configs, topology, vendor docs, and incident history.
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE NUMBERS & EXECUTIVE BUSINESS IMPACT SECTION ═══════ */}
        <section id="numbers" className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta">
              <h2 className="editorial-title-md">A network monitor should solve problems, not just throw alerts</h2>
              <p className="meta-sub">
                What verified, high-frequency gRPC streaming telemetry and grounded RAG deliver when legacy NMS tools lose visibility on AI workloads.
              </p>
            </div>

            {/* BENCHMARKS GRID */}
            <div className="benchmarks-block">
              <div className="block-label font-plex-mono">PERFORMANCE BENCHMARKS</div>
              <div className="numbers-grid-4">
                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">1M+ QPS</div>
                  <div className="num-title font-plex-sans">gRPC streaming telemetry</div>
                  <div className="num-sub font-plex-mono">vs 5-min SNMP polling</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">&lt;100ms</div>
                  <div className="num-title font-plex-sans">alert propagation speed</div>
                  <div className="num-sub font-plex-mono">sub-second triage</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">90%+</div>
                  <div className="num-title font-plex-sans">faster root-cause diagnosis</div>
                  <div className="num-sub font-plex-mono">NavAssist RAG engine</div>
                </div>

                <div className="num-card bench-card">
                  <div className="num-stat teal font-plex-mono">3–6 mo</div>
                  <div className="num-title font-plex-sans">payback period</div>
                  <div className="num-sub font-plex-mono">NOC deflection ~41%→65%</div>
                </div>
              </div>
            </div>

            {/* EXECUTIVE ANALYSIS GRID */}
            <div className="client-impact-block">
              <div className="block-label font-plex-mono teal">EXECUTIVE ANALYSIS — HOW THIS IMPACTS INFRASTRUCTURE OPS</div>
              <div className="impact-grid-3">
                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">01 · ZERO-BLAST REMEDIATION</div>
                  <h3>Eliminate 2 AM Triage Escalations</h3>
                  <p>
                    NavAssist diagnoses faults, calculates blast radius, and presents exact CLI fix commands for 1-click execution — eliminating manual runbook searches during outages.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">02 · AI-INFRASTRUCTURE VISIBILITY</div>
                  <h3>90% Lower Resolution Overhead</h3>
                  <p>
                    Streams model-serving latency, GPU/VRAM utilization, token throughput, and gRPC endpoints alongside traditional switches, routers, and servers in a single pane.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-tag font-plex-mono">03 · INCIDENT KNOWLEDGE ENGINE</div>
                  <h3>Self-Enriching RAG Corpus</h3>
                  <p>
                    Every resolved ticket enriches NavAssist&apos;s RAG engine across four knowledge corpora, preventing repeat outages across distributed multi-site networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CONCRETE PROBLEM VS SOLUTION ═══════ */}
        <section id="platform" className="cadence-editorial-section bg-tint">
          <div className="cadence-wrap">
            <div className="section-meta center">
              <span className="meta-kicker font-plex-mono">CONCRETE VALUE</span>
              <h2>Why rely on 2010-era dashboards when AI can navigate the fix?</h2>
              <p className="meta-sub">
                Traditional NMS tools lose visibility on gRPC streaming and require manual triage. NavNet automates root-cause diagnosis in real time.
              </p>
            </div>

            <div className="concrete-grid">
              <div className="concrete-card traditional">
                <div className="card-tag font-plex-mono">Legacy NMS Flow</div>
                <h3>High-friction manual triage</h3>
                <ul>
                  <li>Static 5-minute SNMP polling cycles miss micro-bursts</li>
                  <li>Zero visibility into GPU clusters or model-serving endpoints</li>
                  <li>Manual runbook searching during critical 2 AM outages</li>
                  <li>High alert noise and slow mean time to resolution (MTTR)</li>
                </ul>
              </div>

              <div className="concrete-card cadence-way">
                <div className="card-tag teal font-plex-mono">The NavNet Way</div>
                <h3>Real-time automated navigation</h3>
                <ul>
                  <li>gRPC-native high-frequency streaming telemetry</li>
                  <li>Unified single-pane monitoring for infrastructure &amp; AI</li>
                  <li>NavAssist RAG diagnoses root cause in seconds</li>
                  <li>Approval-gated 1-click remediation scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ LIVE CONVERSATION / NOC TELEMETRY SHOWCASE (APPLE STYLE) ═══════ */}
        <section className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta center">
              <span className="meta-kicker font-plex-mono">INTERACTIVE SHOWCASE</span>
              <h2>Network navigation in action</h2>
              <p className="meta-sub">Real-time BGP peer latency anomaly detection, NavAssist RAG diagnosis, and approval-gated resolution.</p>
            </div>

            <div className="apple-chat-window">
              <div className="window-header">
                <div className="header-status">
                  <span className="online-indicator"></span>
                  <strong>NavNet NOC Telemetry Console</strong> · gRPC Stream Active
                </div>
                <span className="sentinel-badge font-plex-mono">NavAssist™ RAG Active</span>
              </div>

              <div className="window-body font-plex-mono">
                <div className="chat-bubble user-bubble" style={{ background: '#0F172A', color: '#F1F5F9', border: '1px solid #334155' }}>
                  <div className="bubble-text">🚨 INCIDENT #4092: BGP Peer Latency Spike on Edge-02 (&gt;450ms)</div>
                  <div className="bubble-meta font-plex-mono">14:02 · Telemetry Ingested</div>
                </div>

                <div className="chat-bubble agent-bubble">
                  <div className="bubble-tag font-plex-mono">NavAssist RAG Diagnosis</div>
                  <div className="bubble-text font-plex-sans">
                    Root Cause: Config drift on Cisco PE-04. High CPU correlated with ARP storm on VLAN 100 originating from MAC <code className="font-plex-mono" style={{ background: 'rgba(14,124,134,0.15)', padding: '2px 6px', borderRadius: '4px', color: '#0E7C86' }}>00:1A:2B:3C:4D:5E</code>.
                    <br /><br />
                    Recommended Command: <code className="font-plex-mono" style={{ background: '#0F172A', padding: '4px 8px', borderRadius: '4px', color: '#2DD4BF' }}>bgp soft-reconfig inbound</code>. Blast radius: 0 clients.
                  </div>

                  <div className="inthread-payment-card" style={{ background: 'rgba(14,124,134,0.08)', border: '1px solid rgba(14,124,134,0.3)' }}>
                    <div className="pay-header">
                      <span className="pay-title font-plex-mono" style={{ color: '#0C1F34' }}>Execute Automated Remediation?</span>
                      <span className="pay-price font-plex-mono" style={{ color: '#0E7C86' }}>0 Blast Radius</span>
                    </div>
                    <a href="mailto:hello@tasaar.com?subject=NavNet%20Remediation%20Demo" className="pay-action-btn font-plex-mono" style={{ background: '#0E7C86' }}>
                      Approve &amp; Execute Fix →
                    </a>
                  </div>

                  <div className="bubble-meta font-plex-mono">14:02 · Navigated</div>
                </div>

                <div className="chat-bubble user-bubble" style={{ background: '#0F172A', color: '#F1F5F9', border: '1px solid #334155' }}>
                  <div className="bubble-text">Remediation script executed. Peer latency returned to 12ms.</div>
                  <div className="bubble-meta font-plex-mono">14:03 · Verified</div>
                </div>

                <div className="chat-bubble agent-bubble">
                  <div className="bubble-text font-plex-sans">
                    Incident #4092 closed. Incident resolution pattern stored in RAG knowledge corpus for future automated triage.
                  </div>
                  <div className="bubble-meta font-plex-mono">14:03 · Corpus Updated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE 8 CORE MODULES (MATCHING CADENCE 8 JOURNEYS GRID) ═══════ */}
        <section id="journeys" className="cadence-editorial-section bg-tint">
          <div className="cadence-wrap">
            <div className="section-meta">
              <h2>Where NavNet helps your infrastructure</h2>
              <p className="meta-sub">
                Eight core monitoring modules engineered into a single lightweight platform — replacing fragmented legacy tools.
              </p>
            </div>

            <div className="editorial-journeys-grid">
              <div className="journey-tile">
                <span className="tile-num font-plex-mono">01</span>
                <h4>Physical &amp; Virtual Servers</h4>
                <p>Linux, Windows, VMware, KVM stats</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">02</span>
                <h4>Wireless Infrastructure</h4>
                <p>AP health, client count, interference</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">03</span>
                <h4>WAN &amp; Synthetic Paths</h4>
                <p>Loss, latency, jitter, HTTP/DNS tests</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">04</span>
                <h4>Storage &amp; SAN Arrays</h4>
                <p>iSCSI, Fibre Channel, NVMe-oF arrays</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">05</span>
                <h4>Distributed Pollers</h4>
                <p>Store-and-forward multi-tenant pollers</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">06</span>
                <h4>Auto Topology &amp; Maps</h4>
                <p>Layer 2/3 neighbor map discovery</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">07</span>
                <h4>NetFlow &amp; IPFIX Flows</h4>
                <p>Bandwidth hogs &amp; port analysis</p>
              </div>

              <div className="journey-tile">
                <span className="tile-num font-plex-mono">08</span>
                <h4>AI Workload Telemetry</h4>
                <p>gRPC streams, GPU %, token throughput</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ NAVASSIST ENGINE BAND (TASAAR NAVY #0C1F34 BAND) ═══════ */}
        <section id="engine" className="cadence-dark-band">
          <div className="cadence-wrap">
            <div className="section-meta dark">
              <span className="meta-kicker teal font-plex-mono">NAVASSIST™ ENGINE</span>
              <h2 style={{ color: "white" }}>Intelligence sits under everything.</h2>
              <p className="meta-sub light">
                Not a bolted-on dashboard — the core engine beneath the entire monitoring stack. Every metric passes through high-frequency correlation before alerting.
              </p>
            </div>

            <div className="sentinel-grid">
              <div className="sentinel-card">
                <div className="sentinel-badge-chip font-plex-mono">Grounded RAG Engine</div>
                <h3>Grounded Real-Time Troubleshooting</h3>
                <p>
                  Searches runbooks, vendor documentation, live device configs, and past incident history simultaneously to diagnose root causes without hallucination.
                </p>
              </div>

              <div className="sentinel-card">
                <div className="sentinel-badge-chip font-plex-mono">Multi-Protocol Pipeline</div>
                <h3>Unified Telemetry Ingestion</h3>
                <p>
                  High-throughput pipeline normalizing SNMP, gRPC, NetFlow, WMI, and SSH into a unified telemetry stream capable of 1M+ QPS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THREE DOORS / OFFERINGS (MATCHING CADENCE DOORS GRID) ═══════ */}
        <section id="doors" className="cadence-editorial-section bg-white">
          <div className="cadence-wrap">
            <div className="section-meta">
              <h2>Three doors onto the same product</h2>
              <p className="meta-sub">
                Choose how your team touches NavNet. Same core telemetry engine underneath — the door only changes who manages it and how it&apos;s deployed.
              </p>
            </div>

            <div className="editorial-doors-grid">
              <div className="door-column">
                <span className="door-tag font-plex-mono">MANAGED NOC</span>
                <h3>Managed &amp; self-serve</h3>
                <p className="door-sub font-plex-mono">for enterprise teams</p>
                <p className="door-desc">A turnkey monitoring workspace. The team configures pollers and alerting — or hands on-call triage to us to manage.</p>
                <ul className="door-check-list">
                  <li>No-code NOC dashboard builder</li>
                  <li>On-call escalation &amp; SLA rules</li>
                  <li>Live metrics — latency, MTTR, QPS</li>
                  <li>Done-for-you managed tier</li>
                </ul>
              </div>

              <div className="door-column featured-door">
                <span className="door-tag teal font-plex-mono">CLOUD CONSOLE &amp; API</span>
                <h3>Embed in your product</h3>
                <p className="door-sub font-plex-mono">for SREs &amp; builders</p>
                <p className="door-desc">gRPC streaming APIs &amp; REST endpoints. Bake telemetry, automated triage, and NavAssist straight into your infrastructure.</p>
                <ul className="door-check-list">
                  <li>REST API + gRPC streaming SDKs</li>
                  <li>Sandbox keys &amp; full docs</li>
                  <li>Webhooks into PagerDuty &amp; Slack</li>
                  <li>Highest throughput, sub-10ms latency</li>
                </ul>
              </div>

              <div className="door-column">
                <span className="door-tag font-plex-mono">SOLUTION PACKS</span>
                <h3>Drop-in by vertical</h3>
                <p className="door-sub font-plex-mono">for MSPs &amp; ISPs</p>
                <p className="door-desc">Pre-built poller packs per environment — enterprise campus, AI GPU cluster, ISP core, data center — live in minutes.</p>
                <ul className="door-check-list">
                  <li>Environment-tuned templates</li>
                  <li>Pre-mapped SNMP OIDs &amp; gRPC protos</li>
                  <li>Fastest path to live</li>
                  <li>The &quot;deploy in 10 minutes&quot; promise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FINAL CALL TO ACTION ═══════ */}
        <section className="cadence-final-cta">
          <div className="cadence-wrap center">
            <h2>Ready to navigate your network?</h2>
            <p>Deploy NavNet in under 10 minutes to transform network monitoring.</p>
            <div className="hero-cta-group">
              <a href="mailto:hello@tasaar.com?subject=NavNet.ai%20Start" className="cadence-btn btn-crimson btn-lg font-plex-mono">
                Start free
              </a>
              <a href="mailto:hello@tasaar.com?subject=NavNet.ai%20Demo" className="cadence-btn btn-teal-outline btn-lg font-plex-mono">
                Book a demo
              </a>
            </div>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: "22px", color: "var(--cadence-teal)", marginTop: "16px" }}>
              ← takes 10 minutes to first alert
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ SHARED SITE FOOTER / STATUS BAR ═══════ */}
      <StatusBar />
    </>
  );
}
