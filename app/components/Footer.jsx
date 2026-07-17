export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-faint">
        <span>© {new Date().getFullYear()} Arryan Tiwari. All rights reserved.</span>
        <span>Designed & built for execution, not decoration.</span>
      </div>
    </footer>
  );
}
