/* Closing band: the wordmark "tasaar" in white over a single stars/galaxy
   backdrop. Static — one image, no motion. The background is
   `url(photo), <gradient>`, so a deep-space gradient stands in if the file
   is ever missing. */

const WORD = 'tasaar';
const IMAGE = '/domain-fills/telecom.png';
const FALLBACK = 'radial-gradient(ellipse at 40% 30%, #182A4A 0%, #080B16 60%, #05070E 100%)';

export default function DomainWordmark() {
  return (
    <section className="brand-type domain-section" aria-label="Unforgettable . Written in the stars">
      <div
        className="domain-bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${IMAGE}), ${FALLBACK}` }}
      />

      <div className="domain-scrim" aria-hidden="true" />

      <div className="domain-inner">
        <div className="domain-kicker font-mono">Unforgettable . Written in the stars</div>
        <div className="domain-word">{WORD}</div>
      </div>
    </section>
  );
}
