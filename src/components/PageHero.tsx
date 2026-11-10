const PageHero = ({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string
  title: string
  lede: string
}) => {
  return (
    <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/80">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">{lede}</p>
      </div>
    </div>
  )
}

export default PageHero
