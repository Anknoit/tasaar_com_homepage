import Nav from '../../../components/Nav';
import StatusBar from '../../../components/StatusBar';

export const metadata = {
  title: "NavNet — AI-Native Network Monitoring | Navigating Networks",
  description: "Every network monitor watches your infrastructure. NavNet navigates it — the first NMS built for AI workloads with real-time RAG troubleshooting and gRPC streaming telemetry.",
  alternates: { canonical: 'https://tasaar.com/products/navnet' },
};

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-teal-400">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Hero Topology SVG Visual */
function TopologyMeshHero() {
  return (
    <div className="navnet-hero-visual">
      <div className="flex items-center justify-between border-b border-blue-900/40 pb-3 mb-4 font-plex-mono text-xs text-blue-300">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          NAVNET NOC TELEMETRY ENGINE
        </span>
        <span className="text-gray-400">gRPC STREAM :: ACTIVE</span>
      </div>

      <svg viewBox="0 0 460 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="topoMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4C9AFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B8FF7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Topology Mesh Links */}
        <line x1="80" y1="60" x2="230" y2="40" stroke="url(#topoMeshGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="80" y1="60" x2="140" y2="150" stroke="url(#topoMeshGrad)" strokeWidth="1.5" />
        <line x1="230" y1="40" x2="380" y2="70" stroke="url(#topoMeshGrad)" strokeWidth="1.5" />
        <line x1="230" y1="40" x2="300" y2="160" stroke="url(#topoMeshGrad)" strokeWidth="1.5" />
        <line x1="140" y1="150" x2="300" y2="160" stroke="url(#topoMeshGrad)" strokeWidth="1.5" />
        <line x1="300" y1="160" x2="380" y2="70" stroke="url(#topoMeshGrad)" strokeWidth="1.5" />

        {/* Nodes */}
        {/* Core Router Node */}
        <circle cx="230" cy="40" r="10" fill="#0A1829" stroke="#2DD4BF" strokeWidth="2" />
        <circle cx="230" cy="40" r="4" fill="#2DD4BF" />
        <text x="230" y="22" fill="#E4ECF7" fontSize="10" fontFamily="monospace" textAnchor="middle">CORE_SW_01</text>

        {/* AI Cluster Node */}
        <circle cx="380" cy="70" r="9" fill="#0A1829" stroke="#7B8FF7" strokeWidth="2" />
        <circle cx="380" cy="70" r="3.5" fill="#7B8FF7" />
        <text x="380" y="52" fill="#7B8FF7" fontSize="10" fontFamily="monospace" textAnchor="middle">GPU_CLUSTER [vLLM]</text>

        {/* Server Pod Node */}
        <circle cx="80" cy="60" r="8" fill="#0A1829" stroke="#4C9AFF" strokeWidth="2" />
        <circle cx="80" cy="60" r="3" fill="#4C9AFF" />
        <text x="80" y="44" fill="#94A7C4" fontSize="10" fontFamily="monospace" textAnchor="middle">DIST_POLLER_A</text>

        {/* Storage Node */}
        <circle cx="140" cy="150" r="8" fill="#0A1829" stroke="#4C9AFF" strokeWidth="2" />
        <circle cx="140" cy="150" r="3" fill="#4C9AFF" />
        <text x="140" y="172" fill="#94A7C4" fontSize="10" fontFamily="monospace" textAnchor="middle">SAN_PRIMARY</text>

        {/* gRPC Endpoint Node */}
        <circle cx="300" cy="160" r="8" fill="#0A1829" stroke="#2DD4BF" strokeWidth="2" />
        <circle cx="300" cy="160" r="3" fill="#2DD4BF" />
        <text x="300" y="182" fill="#2DD4BF" fontSize="10" fontFamily="monospace" textAnchor="middle">gRPC_TELEMETRY</text>
      </svg>

      {/* Live Alert to Resolution Loop */}
      <div className="navnet-live-alert-card font-plex-sans">
        <div className="alert-header">
          <div className="flex items-center gap-2">
            <span className="alert-badge-crimson font-plex-mono">INCIDENT #4092</span>
            <span className="text-xs text-gray-300 font-plex-mono">BGP Peer Latency Spike</span>
          </div>
          <span className="alert-badge-cyan font-plex-mono">AUTO-NAVIGATED</span>
        </div>
        <p className="text-xs text-gray-300 font-plex-sans">
          BGP route flap detected on Edge Interface Eth0/2. Inference queue stalled (latency &gt;450ms).
        </p>
        <div className="navassist-bubble font-plex-mono">
          <div className="text-xs text-teal-300 font-semibold mb-1">🤖 NavAssist RAG Diagnosis:</div>
          <div className="text-xs text-gray-200">
            Root Cause: Config drift on Cisco IOS XE PE-04. Recommended command: <code className="text-teal-200 bg-gray-900 px-1 py-0.5 rounded">bgp soft-reconfig inbound</code>. Blast radius: 0 clients.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavNetPage() {
  return (
    <main className="navnet-landing-page font-plex-sans">
      <Nav active="products" />

      {/* ═══════ 4.2 HERO SECTION ═══════ */}
      <section className="navnet-hero">
        <div className="navnet-wrap">
          <div className="navnet-hero-grid">
            <div>
              <div className="navnet-eyebrow font-plex-mono">
                <span className="navnet-eyebrow-dot"></span>
                NavNet — Navigating Networks
              </div>

              <h1 className="navnet-hero-title">
                The network monitor <span>built for what&apos;s next.</span>
              </h1>

              <p className="navnet-hero-sub">
                Every network monitor watches your infrastructure. NavNet navigates it — combining table-stakes NMS reliability with built-in NavAssist AI troubleshooting and high-frequency gRPC telemetry for AI workloads.
              </p>

              <div className="navnet-btn-group">
                <a href="mailto:hello@tasaar.com?subject=NavNet%20Start%20Free" className="navnet-btn-cyan font-plex-mono">
                  Start free <ArrowRight />
                </a>
                <a href="mailto:hello@tasaar.com?subject=NavNet%20Live%20Demo" className="navnet-btn-ghost font-plex-mono">
                  See it live
                </a>
              </div>

              {/* Protocol Logo Strip */}
              <div className="navnet-protocol-strip font-plex-mono">
                <span className="navnet-protocol-label">PROTOCOLS NATIVE:</span>
                <div className="navnet-protocol-tags">
                  <span className="navnet-proto-tag">SNMP v1/v2c/v3</span>
                  <span className="navnet-proto-tag">gRPC Stream</span>
                  <span className="navnet-proto-tag">NetFlow / IPFIX</span>
                  <span className="navnet-proto-tag">WMI / SSH</span>
                </div>
              </div>
            </div>

            <div>
              <TopologyMeshHero />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4.3 TABLE-STAKES NMS BAND ═══════ */}
      <section className="navnet-section bg-raised">
        <div className="navnet-wrap">
          <div className="navnet-section-header">
            <div className="navnet-section-kicker font-plex-mono">EVERYTHING YOU EXPECT</div>
            <h2 className="navnet-section-title font-plex-sans">
              NavNet covers the fundamentals other tools charge extra for.
            </h2>
            <p className="navnet-section-sub">
              Full feature parity with enterprise NMS platforms out of the box — clean, fast, and engineered for high-availability environments.
            </p>
          </div>

          <div className="navnet-modules-grid">
            {[
              { title: "Physical & Virtual Servers", desc: "Linux, Windows, VMware, KVM" },
              { title: "Wireless & AP Infrastructure", desc: "Cisco, Aruba, Ruckus, Ubiquiti" },
              { title: "WAN & Synthetic Paths", desc: "Loss, latency, jitter, HTTP/DNS tests" },
              { title: "Storage & SAN Arrays", desc: "iSCSI, Fibre Channel, NVMe-oF" },
              { title: "Distributed Multi-Site Pollers", desc: "Store-and-forward architecture" },
              { title: "Auto Topology & Dynamic Maps", desc: "Layer 2/3 neighbor discovery" },
              { title: "NetFlow & IPFIX Flows", desc: "Bandwidth hogs & port analysis" },
              { title: "Fault Management & Escalations", desc: "On-call routing & alert deduplication" },
              { title: "Business & SLA Reports", desc: "Executive uptime & compliance PDFs" },
            ].map((module, i) => (
              <div className="navnet-module-card" key={i}>
                <div className="module-icon-box font-plex-mono">{`0${i + 1}`}</div>
                <div>
                  <div className="module-name font-plex-sans">{module.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-plex-mono">{module.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4.4 DIFFERENTIATOR #1: NAVASSIST RAG TROUBLESHOOTING ═══════ */}
      <section className="navnet-section">
        <div className="navnet-wrap">
          <div className="navnet-feature-split">
            <div>
              <div className="navnet-section-kicker font-plex-mono">DIFFERENTIATOR #1 · NAVASSIST RAG</div>
              <h2 className="navnet-section-title font-plex-sans">
                Ask your network. Get answers, not dashboards.
              </h2>
              <p className="navnet-section-sub">
                NavAssist is a built-in assistant grounded in your environment — the exact device or service in question, its live metrics, its config, your topology, and every past incident. It doesn&apos;t hand you a search result; it diagnoses the actual fault and proposes the fix.
              </p>

              <ul className="navnet-proof-list">
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">01</span>
                  <div className="proof-content">
                    <h4>Context-aware to device and service type</h4>
                    <p>A Cisco IOS BGP error vs. a Postgres connection pool stall get distinct, precise troubleshooting paths.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">02</span>
                  <div className="proof-content">
                    <h4>Retrieves over four knowledge corpora</h4>
                    <p>RAG engine searches runbooks, vendor documentation, live device configs, and past incident history simultaneously.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">03</span>
                  <div className="proof-content">
                    <h4>Approval-gated auto-remediation</h4>
                    <p>Proposes exact CLI commands, calculates blast radius, and executes only after NOC approval.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">04</span>
                  <div className="proof-content">
                    <h4>Learns from every resolved incident</h4>
                    <p>Every closed ticket enriches NavAssist&apos;s corpus, making future resolutions faster for your team.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Chat Dock Looping Mock */}
            <div className="navnet-chat-dock font-plex-mono">
              <div className="chat-dock-header">
                <div className="chat-dock-title">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                  NAVASSIST INTERACTIVE DOCK
                </div>
                <span className="text-xs text-gray-400">RAG ENGINE :: ACTIVE</span>
              </div>

              <div className="chat-dock-body">
                <div className="chat-msg system-alert font-plex-sans">
                  <div className="font-semibold font-plex-mono text-xs text-red-400 mb-1">🚨 ANOMALY DETECTED</div>
                  Router Edge-02 CPU utilization 98% (SNMP OID .1.3.6.1.4.1.9.9.109.1.1.1.1.5)
                </div>

                <div className="chat-msg navassist-reply font-plex-sans">
                  <div className="font-semibold font-plex-mono text-xs text-teal-300 mb-1">🤖 NAVASSIST DIAGNOSIS</div>
                  Correlated high CPU with ARP storm on VLAN 100 originating from MAC <code className="text-teal-200">00:1A:2B:3C:4D:5E</code>.
                  <div className="mt-2 text-xs text-gray-300 font-plex-mono border-l-2 border-teal-400 pl-2">
                    Resolution: Apply rate-limiting ACL to interface GigabitEthernet0/1. Blast Radius: 0 downstream hosts.
                  </div>
                </div>

                <div className="chat-msg action-card font-plex-mono">
                  <span>EXECUTE REMEDIATION SCRIPT?</span>
                  <button className="bg-teal-500 text-gray-950 font-bold px-3 py-1 rounded text-xs hover:bg-teal-400">
                    APPROVE &amp; FIX →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4.5 DIFFERENTIATOR #2: AI-NATIVE gRPC MONITORING ═══════ */}
      <section className="navnet-section bg-raised">
        <div className="navnet-wrap">
          <div className="navnet-feature-split">
            <div className="ai-telemetry-panel font-plex-mono">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-3 mb-4 text-xs text-teal-300">
                <span>MODEL-SERVING TELEMETRY (gRPC)</span>
                <span className="text-gray-400">LATENCY &lt; 5ms</span>
              </div>

              <div className="telemetry-grid-2">
                <div className="telemetry-card">
                  <div className="stat-lbl">INFERENCE P95 LATENCY</div>
                  <div className="stat-val font-plex-mono">42.8 ms</div>
                  <div className="text-xs text-teal-400 mt-1">● NOMINAL (-14ms)</div>
                </div>

                <div className="telemetry-card">
                  <div className="stat-lbl">TOKEN THROUGHPUT</div>
                  <div className="stat-val font-plex-mono">14,280 /s</div>
                  <div className="text-xs text-teal-400 mt-1">● HIGH DENSITY</div>
                </div>

                <div className="telemetry-card">
                  <div className="stat-lbl">GPU ACCELERATOR LOAD</div>
                  <div className="stat-val font-plex-mono">88.4 %</div>
                  <div className="text-xs text-teal-400 mt-1">● 8x H100 SXM5</div>
                </div>

                <div className="telemetry-card">
                  <div className="stat-lbl">gRPC STREAM QPS</div>
                  <div className="stat-val font-plex-mono">1.2M QPS</div>
                  <div className="text-xs text-teal-400 mt-1">● ZERO PACKET LOSS</div>
                </div>
              </div>
            </div>

            <div>
              <div className="navnet-section-kicker font-plex-mono">DIFFERENTIATOR #2 · AI WORKLOAD MONITORING</div>
              <h2 className="navnet-section-title font-plex-sans">
                The only NMS that monitors your AI, not just your network.
              </h2>
              <p className="navnet-section-sub">
                AI services are the new critical infrastructure — and legacy NMS tools were never built to see them. NavNet is gRPC-native, streaming high-frequency telemetry from model-serving endpoints, GPU/accelerator loads, and AI microservices the moment you deploy them.
              </p>

              <ul className="navnet-proof-list">
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">01</span>
                  <div className="proof-content">
                    <h4>Unified single pane of glass</h4>
                    <p>Monitor inference latency, token throughput, queue depth, and GPU utilization alongside routers and switches.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">02</span>
                  <div className="proof-content">
                    <h4>gRPC streaming telemetry</h4>
                    <p>Designed for low-latency, high-frequency signals emitted by AI microservices that 5-minute SNMP polling misses.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">03</span>
                  <div className="proof-content">
                    <h4>Native to modern cloud-native stacks</h4>
                    <p>Out-of-the-box support for Kubernetes, Triton, vLLM, TensorRT-LLM, and gRPC endpoints.</p>
                  </div>
                </li>
                <li className="navnet-proof-item">
                  <span className="proof-num font-plex-mono">04</span>
                  <div className="proof-content">
                    <h4>AI-load tuned anomaly detection</h4>
                    <p>Detects model cold starts, prompt burst spikes, VRAM leaks, and cost/performance degradation automatically.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4.6 HOW IT WORKS (ARCHITECTURE-LITE) ═══════ */}
      <section className="navnet-section">
        <div className="navnet-wrap">
          <div className="navnet-section-header">
            <div className="navnet-section-kicker font-plex-mono">ARCHITECTURE</div>
            <h2 className="navnet-section-title font-plex-sans">Four steps from raw signal to navigated resolution</h2>
            <p className="navnet-section-sub">
              Engineering-sketch architecture treatment designed for instant setup and zero agent overhead.
            </p>
          </div>

          <div className="navnet-steps-grid">
            <div className="navnet-step-card">
              <div className="step-num font-plex-mono">01</div>
              <h3 className="step-title font-plex-sans">Collect</h3>
              <p className="step-desc">
                Agentless ingestion across SNMP, WMI, SSH, NetFlow, IPFIX, and gRPC streaming telemetry.
              </p>
            </div>

            <div className="navnet-step-card">
              <div className="step-num font-plex-mono">02</div>
              <h3 className="step-title font-plex-sans">Stream</h3>
              <p className="step-desc">
                High-throughput real-time pipeline capable of ingesting &gt;1,000,000 events per second with sub-10ms latency.
              </p>
            </div>

            <div className="navnet-step-card">
              <div className="step-num font-plex-mono">03</div>
              <h3 className="step-title font-plex-sans">Detect</h3>
              <p className="step-desc">
                Multi-layer anomaly detection and cross-signal fault correlation across infrastructure and AI workloads.
              </p>
            </div>

            <div className="navnet-step-card">
              <div className="step-num font-plex-mono">04</div>
              <h3 className="step-title font-plex-sans">Navigate</h3>
              <p className="step-desc">
                NavAssist diagnoses root cause, presents blast-radius analysis, and executes approval-gated fixes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4.7 COMPARISON MATRIX ═══════ */}
      <section className="navnet-section bg-raised">
        <div className="navnet-wrap">
          <div className="navnet-section-header">
            <div className="navnet-section-kicker font-plex-mono">THE COMPARISON</div>
            <h2 className="navnet-section-title font-plex-sans">NavNet vs. Legacy Generic NMS</h2>
            <p className="navnet-section-sub">
              Why modern engineering teams are replacing legacy 2010 NMS tools with NavNet.
            </p>
          </div>

          <div className="navnet-compare-wrapper">
            <table className="navnet-compare-table">
              <thead>
                <tr>
                  <th>CAPABILITY</th>
                  <th className="col-highlight">NAVNET</th>
                  <th>GENERIC NMS (2010 ERA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Core Infrastructure Monitoring (Routers, Switches, Servers)</td>
                  <td className="col-highlight"><CheckIcon /> Full Parity</td>
                  <td><CheckIcon /> Full Parity</td>
                </tr>
                <tr>
                  <td>AI &amp; Model-Serving Workload Monitoring (gRPC)</td>
                  <td className="col-highlight"><span className="check-cyan">✓ Native gRPC Stream</span></td>
                  <td><span className="cross-slate">✗ Unsupported (SNMP Only)</span></td>
                </tr>
                <tr>
                  <td>Real-Time Grounded Troubleshooting Chatbot (NavAssist)</td>
                  <td className="col-highlight"><span className="check-cyan">✓ Built-in RAG (4 Corpora)</span></td>
                  <td><span className="cross-slate">✗ None (Static Dashboards)</span></td>
                </tr>
                <tr>
                  <td>Approval-Gated Auto-Remediation &amp; Blast Radius</td>
                  <td className="col-highlight"><span className="check-cyan">✓ Automated + Gated</span></td>
                  <td><span className="cross-slate">✗ Manual Scripts Only</span></td>
                </tr>
                <tr>
                  <td>Continuous Incident History Learning</td>
                  <td className="col-highlight"><span className="check-cyan">✓ Self-Enriching RAG</span></td>
                  <td><span className="cross-slate">✗ Static Rule Engine</span></td>
                </tr>
                <tr>
                  <td>Distributed Store-and-Forward Pollers</td>
                  <td className="col-highlight"><span className="check-cyan">✓ Native Multi-Tenant</span></td>
                  <td><span className="check-cyan">✓ Supported</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════ 4.8 USE CASES ═══════ */}
      <section className="navnet-section">
        <div className="navnet-wrap">
          <div className="navnet-section-header">
            <div className="navnet-section-kicker font-plex-mono">WHO IT&apos;S FOR</div>
            <h2 className="navnet-section-title font-plex-sans">Built by network engineers, for the networks coming next.</h2>
          </div>

          <div className="navnet-usecases-grid font-plex-sans">
            <div className="navnet-usecase-card">
              <div className="usecase-tag font-plex-mono">NOC &amp; NETWORK TEAMS</div>
              <h3 className="usecase-title">Fewer 2am Escalations</h3>
              <p className="usecase-desc">
                Automate first-line triage with NavAssist diagnosis so engineers wake up to root-cause reports, not noise.
              </p>
              <div className="usecase-metric font-plex-mono">METRIC: &lt;100ms alert propagation</div>
            </div>

            <div className="navnet-usecase-card">
              <div className="usecase-tag font-plex-mono">PLATFORM &amp; SRE TEAMS RUNNING AI</div>
              <h3 className="usecase-title">Complete Model Infra Visibility</h3>
              <p className="usecase-desc">
                Gain end-to-end telemetry across GPU clusters, inference latency, and network backplanes in one pane.
              </p>
              <div className="usecase-metric font-plex-mono">METRIC: 1M+ QPS gRPC streaming</div>
            </div>

            <div className="navnet-usecase-card">
              <div className="usecase-tag font-plex-mono">MSPs &amp; MULTI-SITE OPS</div>
              <h3 className="usecase-title">Multi-Tenant Out of the Box</h3>
              <p className="usecase-desc">
                Deploy store-and-forward pollers across client sites with isolated knowledge corpora and centralized SLA monitoring.
              </p>
              <div className="usecase-metric font-plex-mono">METRIC: 4 RAG corpora per tenant</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4.9 CTA BAND ═══════ */}
      <section className="navnet-cta-band">
        <div className="navnet-wrap">
          <h2 className="navnet-cta-title font-plex-sans">Navigate your network. Start monitoring what&apos;s next.</h2>
          <p className="navnet-cta-sub">
            Deploy NavNet in under 10 minutes and experience AI-native network intelligence.
          </p>

          <div className="navnet-btn-group justify-center">
            <a href="mailto:hello@tasaar.com?subject=NavNet%20Start%20Free" className="navnet-btn-cyan font-plex-mono">
              Start free <ArrowRight />
            </a>
            <a href="mailto:hello@tasaar.com?subject=NavNet%20Book%20Demo" className="navnet-btn-ghost font-plex-mono">
              Book a demo
            </a>
          </div>

          <div>
            <span className="navnet-handwritten-note font-handwritten">
              ← takes 10 minutes to first alert
            </span>
          </div>
        </div>
      </section>

      <StatusBar />
    </main>
  );
}
