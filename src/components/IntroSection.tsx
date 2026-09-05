const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 md:py-24 px-4 animate-fade-in">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight animate-slide-up">
          Conectamos marcas con las personas, instituciones y audiencias correctas
        </h2>
        <div className="space-y-6 animate-slide-up stagger-1">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Somos una firma boutique de relaciones públicas y comunicación estratégica con sede en Ciudad de México, con experiencia en el lanzamiento de marcas internacionales, gestión institucional, proyectos de impacto social y campañas de promoción turística a nivel nacional.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Trabajamos con una <span className="text-primary font-semibold">visión estratégica</span>, <span className="text-primary font-semibold">atención boutique</span> y <span className="text-primary font-semibold">enfoque de largo plazo</span>.
          </p>
          <p className="text-xl md:text-2xl font-display font-bold text-foreground max-w-3xl mx-auto pt-4">
            <span className="text-primary">HÍPER</span><span className="text-primary">&</span><span className="text-secondary">COM</span> Marketing: relaciones que impulsan presencia, reputación e influencia.
          </p>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;