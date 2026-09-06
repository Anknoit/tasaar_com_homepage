/* Static, always-rendered copy of the waitlist form.

   Netlify scans the built HTML at deploy time to register a form; the real
   form in components/WaitlistModal.js only exists once the modal is opened,
   so this hidden twin is what makes the POST accepted. Field names must stay
   in sync with the modal. */
export default function WaitlistNetlifyForm() {
  return (
    <form name="skylark-waitlist" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="skylark-waitlist" readOnly />
      <input type="text" name="bot-field" readOnly />
      <input type="text" name="name" readOnly />
      <input type="email" name="email" readOnly />
      <input type="tel" name="phone" readOnly />
      <input type="text" name="company" readOnly />
      <input type="text" name="businessType" readOnly />
      <textarea name="message" readOnly />
    </form>
  );
}
