import Image from "next/image";

const whatsapp =
  "https://wa.me/5511981432524?text=Olá,%20vim%20pelo%20site%20da%20LJota%20Tech%20e%20quero%20saber%20mais%20sobre%20o%20Site%20Express.";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
    <path
      d="M5 12H19M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M5 12.5L9.2 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path
      d="M12 3.5C7.3 3.5 3.5 7.1 3.5 11.6C3.5 13.2 4 14.7 4.9 16L4 20.5L8.7 19.3C9.8 19.8 10.9 20 12 20C16.7 20 20.5 16.4 20.5 11.8C20.5 7.2 16.7 3.5 12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 8.5C9.4 10.8 11.2 13.3 14.8 15.1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path
      d="M8 7L3 12L8 17M16 7L21 12L16 17M14 4L10 20"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <rect
      x="7"
      y="2.5"
      width="10"
      height="19"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path d="M10 18.5H14" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path
      d="M12 3L19 6V11C19 15.5 16.1 19.2 12 21C7.9 19.2 5 15.5 5 11V6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M16 16L21 21"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M3.5 12H20.5M12 3C14.3 5.5 15.5 8.5 15.5 12C15.5 15.5 14.3 18.5 12 21C9.7 18.5 8.5 15.5 8.5 12C8.5 8.5 9.7 5.5 12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    <path
      d="M4 17C4 12.6 7.6 9 12 9C16.4 9 20 12.6 20 17"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M12 17L16 12"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const projects = [
  {
    title: "ClimaPro",
    category: "Climatização",
    image: "/climapro.png",
    accent: "text-cyan-400",
    description:
      "Site moderno para empresas de instalação, manutenção e climatização.",
  },
  {
    title: "Volt Solar",
    category: "Energia Solar",
    image: "/voltsolar.png",
    accent: "text-orange-400",
    description:
      "Presença digital estratégica para empresas de energia fotovoltaica.",
  },
  {
    title: "Prime Concept",
    category: "Arquitetura & Reformas",
    image: "/primeconcept.png",
    accent: "text-amber-400",
    description:
      "Projeto premium para arquitetos, designers e empresas de reformas.",
  },
  {
    title: "Detail Garage",
    category: "Estética Automotiva",
    image: "/detailgarage.png",
    accent: "text-red-400",
    description:
      "Site impactante para estética automotiva e serviços premium.",
  },
  {
    title: "Odonto Prime",
    category: "Clínica Odontológica",
    image: "/odontoprime.png",
    accent: "text-blue-400",
    description:
      "Site clean e profissional para clínicas e profissionais da saúde.",
  },
  {
    title: "Alpha Segurança",
    category: "Segurança Eletrônica",
    image: "/alpha.png",
    accent: "text-sky-400",
    description:
      "Projeto tecnológico para empresas de monitoramento e segurança.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020408] text-white selection:bg-cyan-400 selection:text-black">
      {/* FUNDO GLOBAL */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-220px] top-[70px] h-[700px] w-[700px] rounded-full bg-blue-600/[0.08] blur-[190px]" />
        <div className="absolute right-[-250px] top-[620px] h-[780px] w-[780px] rounded-full bg-cyan-500/[0.055] blur-[210px]" />
        <div className="absolute bottom-[0%] left-[20%] h-[650px] w-[650px] rounded-full bg-sky-500/[0.035] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.17]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 55%, transparent 92%)",
          }}
        />
      </div>

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.055] bg-[#020408]/78 backdrop-blur-2xl">
        <div className="mx-auto flex h-[78px] max-w-[1420px] items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-ljota.png"
              alt="LJota Tech"
              width={320}
              height={100}
              priority
              className="h-[55px] w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-zinc-400 lg:flex">
            <a href="#inicio" className="transition hover:text-white">
              Início
            </a>
            <a href="#site-express" className="transition hover:text-white">
              Site Express
            </a>
            <a href="#portfolio" className="transition hover:text-white">
              Projetos
            </a>
            <a href="#processo" className="transition hover:text-white">
              Como funciona
            </a>
            <a href="#investimento" className="transition hover:text-white">
              Investimento
            </a>
            <a href="#faq" className="transition hover:text-white">
              Dúvidas
            </a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.15]"
          >
            Criar meu site
            <ArrowIcon />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative z-10 flex min-h-screen items-center overflow-hidden pt-[78px]"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[0%] top-[7%] h-[720px] w-[720px] rounded-full bg-cyan-400/[0.09] blur-[200px]" />

          <div className="absolute left-0 right-0 top-[58%] h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1420px] items-center gap-16 px-6 py-28 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              Conectando empresas à tecnologia
            </div>

            <h1 className="max-w-[740px] text-[46px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[58px] lg:text-[70px]">
              Seu negócio já é profissional.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Seu site também precisa ser.
              </span>
            </h1>

            <p className="mt-8 max-w-[620px] text-[17px] leading-8 text-zinc-400">
              Criamos sites institucionais modernos para empresas e prestadores
              de serviços que querem transmitir confiança, apresentar seus
              serviços e transformar visitantes em novos contatos.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold shadow-[0_18px_55px_rgba(0,174,255,.20)] transition hover:-translate-y-1"
              >
                Criar meu site
                <ArrowIcon />
              </a>

              <a
                href="#portfolio"
                className="flex items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.035] px-7 py-4 text-sm font-semibold text-zinc-200 transition hover:border-white/[0.18] hover:bg-white/[0.07]"
              >
                Ver projetos
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
              {[
                "Domínio próprio",
                "Hospedagem inclusa",
                "Responsivo",
                "WhatsApp integrado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-cyan-400">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden min-h-[610px] lg:block">
            <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.12] blur-[150px]" />

            <div className="absolute right-0 top-[35px] w-[88%] rotate-[1deg] overflow-hidden rounded-[28px] border border-white/[0.12] bg-[#05080d] p-2 shadow-[0_55px_130px_rgba(0,0,0,.7)]">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src="/climapro.png"
                  alt="Exemplo de site profissional"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="absolute bottom-[15px] left-[-15px] z-20 w-[245px] -rotate-[6deg] overflow-hidden rounded-[26px] border border-white/[0.13] bg-[#05080d] p-2 shadow-2xl">
              <img
                src="/odontoprime.png"
                alt="Exemplo de site para clínica"
                className="h-[170px] w-full rounded-[20px] object-cover object-left"
              />

              <div className="px-4 py-3">
                <strong className="block text-xs">Design personalizado</strong>
                <span className="mt-1 block text-[10px] text-zinc-500">
                  Adaptado ao seu segmento
                </span>
              </div>
            </div>

            <div className="absolute bottom-[35px] right-[-5px] z-20 rounded-2xl border border-cyan-400/20 bg-[#071019]/95 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <CodeIcon />
                </div>

                <div>
                  <strong className="block text-xs">Tecnologia + Design</strong>
                  <span className="mt-1 block text-[10px] text-zinc-500">
                    Estrutura pensada para conversão
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE DIFERENCIAIS */}
      <section className="relative z-10 border-y border-white/[0.06] bg-[#03060a]/85">
        <div className="mx-auto grid max-w-[1420px] grid-cols-2 px-6 py-8 md:grid-cols-4 lg:px-10">
          {[
            ["Site profissional", "Feito para apresentar sua empresa"],
            ["Domínio próprio", "Seu endereço na internet"],
            ["Sem mensalidade", "Projeto fechado e objetivo"],
            ["Entrega rápida", "Até 7 dias úteis*"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="border-white/[0.06] px-5 py-3 md:border-r last:border-r-0"
            >
              <strong className="block text-sm">{title}</strong>
              <span className="mt-1 block text-xs leading-5 text-zinc-600">
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="relative z-10 py-28">
        <div className="mx-auto grid max-w-[1420px] gap-16 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Presença digital
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Seu cliente forma uma opinião{" "}
              <span className="text-zinc-600">
                antes mesmo de falar com você.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[17px] leading-8 text-zinc-400">
              Quando alguém pesquisa sua empresa, quer entender rapidamente
              quem você é, o que oferece e se pode confiar no seu trabalho.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-zinc-400">
              O Site Express transforma essa primeira impressão em uma
              apresentação profissional, organizada e preparada para gerar
              contatos.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur">
                <strong className="text-sm">Pequenas e médias empresas</strong>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Uma vitrine digital profissional para sua marca.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur">
                <strong className="text-sm">Prestadores de serviços</strong>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Apresente seu trabalho e facilite pedidos de orçamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SITE EXPRESS */}
      <section
        id="site-express"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[160px]" />

        <div className="relative mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="mx-auto max-w-[840px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Nosso produto
            </span>

            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              SITE <span className="text-cyan-400">EXPRESS</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-8 text-zinc-400">
              Seu site pronto. Do domínio à publicação.
            </p>

            <p className="mx-auto mt-3 max-w-[690px] text-sm leading-7 text-zinc-600">
              Uma solução completa para colocar sua empresa na internet com
              visual profissional, tecnologia moderna e sem complicação.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <GlobeIcon />,
                title: "Domínio próprio",
                text: "Seu endereço profissional, como www.suaempresa.com.br.",
              },
              {
                icon: <CodeIcon />,
                title: "Design personalizado",
                text: "Visual adaptado à identidade e ao segmento da empresa.",
              },
              {
                icon: <PhoneIcon />,
                title: "Responsivo",
                text: "Perfeito para celular, tablet e computador.",
              },
              {
                icon: <WhatsAppIcon />,
                title: "WhatsApp integrado",
                text: "CTAs posicionados para facilitar novos contatos.",
              },
              {
                icon: <SearchIcon />,
                title: "SEO técnico básico",
                text: "Estrutura inicial preparada para mecanismos de busca.",
              },
              {
                icon: <SpeedIcon />,
                title: "Performance",
                text: "Projeto leve e otimizado para carregamento eficiente.",
              },
              {
                icon: <ShieldIcon />,
                title: "HTTPS + CDN",
                text: "Conexão segura e distribuição otimizada de conteúdo.",
              },
              {
                icon: <GlobeIcon />,
                title: "Hospedagem",
                text: "Hospedagem do site inclusa por até 4 anos.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[26px] border border-white/[0.07] bg-[#05090f]/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#07101a]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
                  {feature.icon}
                </div>

                <h3 className="mt-6 font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-center text-[11px] leading-6 text-zinc-700">
            * Condições de domínio e hospedagem seguem o período incluído na
            contratação. Renovações posteriores não estão incluídas.
          </p>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="relative z-10 py-28">
        <div className="mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Projetos demonstrativos
              </span>

              <h2 className="mt-5 max-w-[800px] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Diferentes segmentos.
                <br />
                <span className="text-zinc-600">
                  A mesma atenção aos detalhes.
                </span>
              </h2>
            </div>

            <p className="text-sm leading-7 text-zinc-500">
              Conceitos desenvolvidos exclusivamente para demonstrar diferentes
              possibilidades visuais de sites institucionais.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#05080d]/85 shadow-[0_25px_80px_rgba(0,0,0,.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/20"
              >
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={`Projeto demonstrativo ${project.title}`}
                    className="h-auto w-full transition duration-700 group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="border-t border-white/[0.06] p-6">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.17em] ${project.accent}`}
                  >
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-[540px] text-sm leading-6 text-zinc-500">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-zinc-700">
            * Marcas e projetos apresentados acima são conceitos fictícios
            criados exclusivamente para demonstração.
          </p>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28">
        <div className="mx-auto grid max-w-[1420px] gap-16 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Pacote completo
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Tudo pronto para sua empresa entrar no ar.
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-zinc-500">
              Nós cuidamos da parte técnica para você focar no seu negócio.
            </p>

            <div className="absolute -bottom-20 -left-14 hidden opacity-[0.055] lg:block">
              <Image
                src="/logo-simbolo.png"
                alt=""
                width={360}
                height={360}
              />
            </div>
          </div>

          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {[
              "Site institucional profissional",
              "Design personalizado",
              "Responsivo",
              "WhatsApp integrado",
              "Google Maps",
              "Formulário de contato",
              "SEO técnico básico",
              "Domínio próprio no 1º ano*",
              "Hospedagem por até 4 anos*",
              "SSL / HTTPS",
              "CDN",
              "2 rodadas de ajustes",
              "Configuração e publicação",
              "7 dias de suporte técnico pós-entrega",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-4 text-sm text-zinc-400"
              >
                <span className="shrink-0 text-cyan-400">
                  <CheckIcon />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-9 max-w-[900px] px-6 text-center text-[11px] leading-6 text-zinc-700">
          * Domínio gratuito no primeiro ano e período de hospedagem sujeitos às
          condições da infraestrutura utilizada no projeto. Renovações futuras
          não estão incluídas no valor inicial.
        </p>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="relative z-10 py-28">
        <div className="mx-auto max-w-[1420px] px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Processo simples
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Do briefing ao site publicado.
          </h2>

          <p className="mt-5 max-w-[650px] text-sm leading-7 text-zinc-500">
            Um processo objetivo para colocar sua empresa online sem transformar
            o projeto em algo interminável.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Briefing",
                "Você envia informações, serviços, logo, fotos e referências.",
              ],
              [
                "02",
                "Criação",
                "Desenvolvemos estrutura, textos e identidade visual.",
              ],
              [
                "03",
                "Revisão",
                "Você analisa a prévia e solicita os ajustes previstos.",
              ],
              [
                "04",
                "Publicação",
                "Após aprovação, configuramos domínio e colocamos tudo no ar.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-[26px] border border-white/[0.07] bg-[#05090f]/80 p-7 backdrop-blur-xl"
              >
                <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.07]">
                  {number}
                </span>

                <div className="mt-8 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />

                <h3 className="mt-7 text-lg font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-5 text-sm text-zinc-400">
            <span className="text-cyan-300">
              <CheckIcon />
            </span>

            Prazo padrão de até 7 dias úteis após o recebimento de todo o
            material necessário.
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section
        id="investimento"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.065] blur-[180px]" />

        <div className="relative mx-auto max-w-[1020px] px-6">
          <div className="overflow-hidden rounded-[38px] border border-cyan-400/25 bg-gradient-to-br from-[#081723] via-[#050a10] to-[#020407] p-1 shadow-[0_35px_110px_rgba(0,0,0,.5)]">
            <div className="rounded-[34px] border border-white/[0.05] p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-400/15 bg-cyan-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
                    Site Express
                  </span>

                  <h2 className="mt-7 max-w-[600px] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    Seu site pronto.
                    <br />
                    <span className="text-zinc-500">
                      Do domínio à publicação.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-[580px] text-sm leading-7 text-zinc-500">
                    Um pacote completo para colocar sua empresa na internet sem
                    precisar entender de hospedagem, domínio ou programação.
                  </p>
                </div>

                <div className="lg:text-right">
                  <span className="text-xs uppercase tracking-[0.13em] text-zinc-600">
                    A partir de
                  </span>

                  <strong className="mt-2 block text-6xl font-semibold tracking-[-0.07em]">
                    R$ 1.490
                  </strong>
                </div>
              </div>

              <div className="my-10 h-px bg-white/[0.07]" />

              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-[24px] border border-cyan-400/15 bg-cyan-400/[0.045] p-7">
                  <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-cyan-400/[0.08] blur-[45px]" />

                  <span className="relative text-xs font-semibold uppercase tracking-[0.17em] text-cyan-400">
                    PIX
                  </span>

                  <strong className="relative mt-4 block text-2xl">
                    50% + 50%
                  </strong>

                  <p className="relative mt-3 text-sm leading-6 text-zinc-500">
                    50% para iniciar o projeto e 50% após a aprovação, antes da
                    publicação definitiva.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-blue-400/15 bg-blue-400/[0.04] p-7">
                  <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-blue-400/[0.08] blur-[45px]" />

                  <span className="relative text-xs font-semibold uppercase tracking-[0.17em] text-blue-400">
                    Cartão de crédito
                  </span>

                  <strong className="relative mt-4 block text-2xl">
                    Em até 12x
                  </strong>

                  <p className="relative mt-3 text-sm leading-6 text-zinc-500">
                    Parcelamento em até 12 vezes, sujeito aos juros e taxas da
                    operadora da maquininha.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
                <div className="grid gap-4 text-sm text-zinc-500 sm:grid-cols-3">
                  <div>
                    <span className="block text-xs text-zinc-700">INCLUSO</span>
                    <strong className="mt-1 block text-zinc-300">
                      Domínio próprio*
                    </strong>
                  </div>

                  <div>
                    <span className="block text-xs text-zinc-700">
                      HOSPEDAGEM
                    </span>
                    <strong className="mt-1 block text-zinc-300">
                      Até 4 anos*
                    </strong>
                  </div>

                  <div>
                    <span className="block text-xs text-zinc-700">
                      MENSALIDADE
                    </span>
                    <strong className="mt-1 block text-zinc-300">
                      R$ 0
                    </strong>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[11px] leading-6 text-zinc-700">
                * Domínio gratuito no primeiro ano e hospedagem conforme o
                período contratado para o projeto. Renovações futuras não estão
                incluídas. Valores podem variar para necessidades fora do escopo
                padrão do Site Express.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold shadow-[0_15px_50px_rgba(0,174,255,.16)] transition hover:-translate-y-1"
              >
                Quero meu Site Express
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-28">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Dúvidas frequentes
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
              Antes de começar.
            </h2>

            <p className="mt-5 max-w-[360px] text-sm leading-7 text-zinc-500">
              Tudo que você precisa saber antes de contratar seu Site Express.
            </p>
          </div>

          <div>
            {[
              [
                "O domínio está incluso?",
                "Sim. O projeto inclui a configuração de um domínio próprio para sua empresa, como www.suaempresa.com.br. A gratuidade inicial do domínio segue as condições da hospedagem contratada.",
              ],
              [
                "A hospedagem está inclusa?",
                "Sim. No modelo inicial do Site Express, a hospedagem pode ficar incluída por até 4 anos, conforme o período contratado para a infraestrutura do projeto.",
              ],
              [
                "Vou pagar mensalidade?",
                "Não. O Site Express é vendido como projeto fechado. Renovações futuras de domínio ou hospedagem, após o período incluído, não fazem parte do preço inicial.",
              ],
              [
                "Em quanto tempo meu site fica pronto?",
                "O prazo padrão é de até 7 dias úteis após recebermos todo o material necessário.",
              ],
              [
                "Posso pedir alterações?",
                "Sim. O projeto inclui até duas rodadas de ajustes durante a etapa de revisão.",
              ],
              [
                "O formulário realmente funciona?",
                "Sim. Quando utilizado, configuramos o formulário para que os contatos sejam enviados corretamente.",
              ],
              [
                "Vocês fazem loja virtual ou sistemas?",
                "Não. Nosso foco é exclusivamente criação de sites institucionais profissionais.",
              ],
              [
                "Meu site ficará em primeiro lugar no Google?",
                "Não prometemos posição específica. Entregamos o projeto preparado com boas práticas técnicas básicas de SEO.",
              ],
              [
                "O que cobre o suporte pós-entrega?",
                "Durante 7 dias após a publicação corrigimos problemas técnicos relacionados ao projeto entregue. Novas funcionalidades ou alterações de conteúdo são orçadas separadamente.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group border-b border-white/[0.07] py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-zinc-200">
                  {question}

                  <span className="text-xl text-cyan-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-[720px] pt-4 text-sm leading-7 text-zinc-500">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 overflow-hidden border-t border-white/[0.06] py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-600/[0.07]" />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[190px]" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <Image
            src="/logo-simbolo.png"
            alt=""
            width={700}
            height={700}
          />
        </div>

        <div className="relative mx-auto max-w-[950px] px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Vamos começar?
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-6xl">
            Sua empresa merece uma presença{" "}
            <span className="text-cyan-400">
              à altura do trabalho que entrega.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-8 text-zinc-500">
            Conte um pouco sobre seu negócio e vamos criar sua presença
            profissional na internet.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-9 py-4 text-sm font-bold shadow-[0_20px_60px_rgba(0,174,255,.20)] transition hover:-translate-y-1"
          >
            Falar no WhatsApp
            <ArrowIcon />
          </a>

          <p className="mt-4 text-[11px] text-zinc-700">
            Atendimento online • Orçamento sem compromisso
          </p>
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-[#010204]">
        <div className="absolute bottom-[-210px] right-[-90px] opacity-[0.04]">
          <Image
            src="/logo-simbolo.png"
            alt=""
            width={700}
            height={700}
          />
        </div>

        <div className="absolute left-[10%] top-[-170px] h-[430px] w-[430px] rounded-full bg-blue-600/[0.065] blur-[150px]" />

        <div className="relative mx-auto max-w-[1420px] px-6 py-20 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_.65fr_.65fr_.75fr]">
            <div>
              <Image
                src="/logo-ljota.png"
                alt="LJota Tech"
                width={420}
                height={140}
                className="h-[76px] w-auto object-contain"
              />

              <h3 className="mt-7 max-w-[510px] text-3xl font-semibold leading-tight tracking-[-0.04em]">
                Sites profissionais para empresas que querem{" "}
                <span className="text-cyan-400">
                  ser levadas a sério online.
                </span>
              </h3>

              <p className="mt-5 max-w-[510px] text-sm leading-7 text-zinc-600">
                Sites institucionais modernos, objetivos e desenvolvidos para
                apresentar sua empresa de forma profissional.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Navegação
              </span>

              <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">
                <a href="#inicio" className="transition hover:text-white">
                  Início
                </a>
                <a href="#site-express" className="transition hover:text-white">
                  Site Express
                </a>
                <a href="#portfolio" className="transition hover:text-white">
                  Projetos
                </a>
                <a href="#processo" className="transition hover:text-white">
                  Como funciona
                </a>
                <a href="#investimento" className="transition hover:text-white">
                  Investimento
                </a>
                <a href="#faq" className="transition hover:text-white">
                  Dúvidas
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Site Express
              </span>

              <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">
                <span>A partir de R$ 1.490</span>
                <span>Domínio próprio*</span>
                <span>Hospedagem até 4 anos*</span>
                <span>PIX 50% + 50%</span>
                <span>Cartão em até 12x</span>
                <span>Até 7 dias úteis</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Contato
              </span>

              <p className="mt-6 text-sm leading-6 text-zinc-500">
                Quer tirar seu projeto do papel?
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.12]"
              >
                WhatsApp
                <ArrowIcon />
              </a>

              <p className="mt-5 text-xs leading-6 text-zinc-700">
                Atendimento online
                <br />
                Orçamento sem compromisso
              </p>
            </div>
          </div>

          <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

          <div className="flex flex-col justify-between gap-5 text-xs text-zinc-700 md:flex-row md:items-center">
            <p>© 2026 LJota Tech. Todos os direitos reservados.</p>

            <p className="tracking-[0.1em]">
              CONECTANDO EMPRESAS À TECNOLOGIA
            </p>
          </div>

          <p className="mt-5 text-[10px] leading-5 text-zinc-800">
            * Condições de domínio e hospedagem sujeitas ao período contratado.
            Parcelamento sujeito aos juros e taxas da operadora.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_rgba(37,211,102,.28)] transition hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}