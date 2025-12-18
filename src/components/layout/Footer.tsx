export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4 py-3 text-xs text-slate-400">
        <span>© {new Date().getFullYear()} FinScope. All rights reserved.</span>

        {/* Theme toggle placeholder – real implementation later */}
        <button className="btn btn-ghost btn-xs rounded-full border border-white/10 bg-white/5">
          Theme toggle
        </button>
      </div>
    </footer>
  );
};