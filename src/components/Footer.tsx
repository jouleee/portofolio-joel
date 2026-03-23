export function Footer() {
  return (
    <footer className="relative z-20 bg-neutral-950 text-white px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-light tracking-widest uppercase text-neutral-500 hover:text-white transition-colors cursor-pointer">
          © {new Date().getFullYear()} Joel Portfolio
        </div>
        
        <div className="flex gap-8 text-sm font-light tracking-widest uppercase">
          {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((link) => (
            <a
              key={link}
              href="#"
              className="relative overflow-hidden group text-neutral-400 hover:text-white transition-colors"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">{link}</span>
              <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">{link}</span>
            </a>
          ))}
        </div>

        <div className="text-sm font-light tracking-widest text-neutral-500">
          julian.dsatrio@gmail.com
        </div>
      </div>
    </footer>
  );
}
