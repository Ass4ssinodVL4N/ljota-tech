import Image from "next/image";

const whatsappNumber = "5511981432524";

const whatsappGeneral =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vim pelo site da LJota Tech e gostaria de saber qual plano é mais indicado para o meu negócio."
  )}`;

const whatsappStart =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vi o plano Site Start de R$ 890 no site da LJota Tech e gostaria de saber mais."
  )}`;

const whatsappExpress =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Tenho interesse no Site Express de R$ 1.490 e gostaria de saber mais."
  )}`;

const whatsappPremium =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para um Site Premium da LJota Tech."
  )}`;

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M3.5 12H20.5M12 3C14.3 5.5 15.5 8.5 15.5 12C15.5 15.5 14.3 18.5 12 21C9.7 18.5 8.5 15.5 8.5 12C8.5 8.5 9.7 5.5 12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M12 3L21 8L12 13L3 8L12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M3 12L12 17L21 12M3 16L12 21L21 16"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
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

const plans = [
  {
    name: "Site Start",
    eyebrow: "Para começar profissional",
    price: "R$ 890",
    description:
      "Ideal para profissionais e pequenos negócios que precisam de uma presença online objetiva e profissional.",
    features: [
      "Site institucional One Page",
      "Design personalizado",
      "Responsivo",
      "WhatsApp integrado",
      "Domínio próprio por 1 ano*",
      "Hospedagem por 1 ano*",
      "SSL / HTTPS",
      "1 rodada de ajustes",
      "7 dias de garantia técnica",
      "Prazo padrão de até 5 dias úteis",
    ],
    href: whatsappStart,
    cta: "Quero o Site Start",
    featured: false,
  },
  {
    name: "Site Express",
    eyebrow: "Mais escolhido",
    price: "R$ 1.490",
    description:
      "Para empresas que querem uma apresentação mais completa, com mais conteúdo e recursos para facilitar novos contatos.",
    features: [
      "Estrutura institucional mais completa",
      "Design personalizado",
      "Responsivo",
      "WhatsApp integrado",
      "Formulário de contato",
      "Google Maps, quando aplicável",
      "SEO técnico básico",
      "Domínio próprio por 1 ano*",
      "Hospedagem por 1 ano*",
      "SSL / HTTPS",
      "2 rodadas de ajustes",
      "7 dias de garantia técnica",
    ],
    href: whatsappExpress,
    cta: "Quero o Site Express",
    featured: true,
  },
  {
    name: "Site Premium",
    eyebrow: "Para projetos mais robustos",
    price: "A partir de R$ 2.990",
    description:
      "Para empresas que precisam de uma estrutura multipáginas e uma presença digital mais completa.",
    features: [
      "Site institucional com até 5 páginas",
      "Design personalizado",
      "Responsivo",
      "WhatsApp integrado",
      "Formulários",
      "Google Maps, quando aplicável",
      "SEO técnico por página",
      "SEO e compartilhamento otimizado por página",
      "Sitemap e robots",
      "Google Analytics + Search Console",
      "Domínio próprio por 1 ano*",
      "Hospedagem por 1 ano*",
      "7 dias de garantia técnica",
      "Prazo definido após briefing",
    ],
    href: whatsappPremium,
    cta: "Solicitar orçamento",
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020408] text-white selection:bg-cyan-400 selection:text-black">
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
            <a href="#inicio" className="transition hover:text-white">Início</a>
            <a href="#solucoes" className="transition hover:text-white">Soluções</a>
            <a href="#portfolio" className="transition hover:text-white">Projetos</a>
            <a href="#processo" className="transition hover:text-white">Como funciona</a>
            <a href="#planos" className="transition hover:text-white">Planos</a>
            <a href="#faq" className="transition hover:text-white">Dúvidas</a>
          </nav>

          <a
            href={whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.15]"
          >
            Criar meu site
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section id="inicio" className="relative z-10 flex min-h-screen items-center overflow-hidden pt-[78px]">
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

            <p className="mt-8 max-w-[650px] text-[17px] leading-8 text-zinc-400">
              Sites profissionais para empresas e prestadores de serviços, com
              design personalizado, domínio próprio e hospedagem inclusa no
              primeiro ano.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#planos"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold shadow-[0_18px_55px_rgba(0,174,255,.20)] transition hover:-translate-y-1"
              >
                Conhecer os planos
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
              {["Design personalizado","Domínio próprio","Responsivo","WhatsApp integrado"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-cyan-400"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[610px] lg:block">
            <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.12] blur-[150px]" />
            <div className="absolute right-0 top-[35px] w-[88%] rotate-[1deg] overflow-hidden rounded-[28px] border border-white/[0.12] bg-[#05080d] p-2 shadow-[0_55px_130px_rgba(0,0,0,.7)]">
              <div className="overflow-hidden rounded-[22px]">
                <img src="/climapro.png" alt="Exemplo de site profissional" className="h-auto w-full" />
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
                <span className="mt-1 block text-[10px] text-zinc-500">Adaptado ao seu segmento</span>
              </div>
            </div>

            <div className="absolute bottom-[35px] right-[-5px] z-20 rounded-2xl border border-cyan-400/20 bg-[#071019]/95 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <CodeIcon />
                </div>
                <div>
                  <strong className="block text-xs">Tecnologia + Design</strong>
                  <span className="mt-1 block text-[10px] text-zinc-500">Estrutura pensada para seu negócio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.06] bg-[#03060a]/85">
        <div className="mx-auto grid max-w-[1420px] grid-cols-2 px-6 py-8 md:grid-cols-4 lg:px-10">
          {[
            ["Site profissional","Feito para representar sua empresa"],
            ["Domínio próprio","Seu endereço na internet"],
            ["Sem mensalidade fixa","Projeto fechado"],
            ["Qualidade em todos","O escopo muda, não o padrão"],
          ].map(([title,text]) => (
            <div key={title} className="border-white/[0.06] px-5 py-3 md:border-r last:border-r-0">
              <strong className="block text-sm">{title}</strong>
              <span className="mt-1 block text-xs leading-5 text-zinc-600">{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="mx-auto grid max-w-[1420px] gap-16 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Presença digital</span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Seu cliente forma uma opinião{" "}
              <span className="text-zinc-600">antes mesmo de falar com você.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[17px] leading-8 text-zinc-400">
              Quando alguém pesquisa sua empresa, quer entender rapidamente quem você é, o que oferece e se pode confiar no seu trabalho.
            </p>
            <p className="mt-6 text-[17px] leading-8 text-zinc-400">
              A LJota Tech organiza essa apresentação em um site profissional, claro e preparado para facilitar o próximo passo: o contato.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur">
                <strong className="text-sm">Pequenas e médias empresas</strong>
                <p className="mt-2 text-sm leading-6 text-zinc-500">Uma vitrine digital profissional para sua marca.</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur">
                <strong className="text-sm">Prestadores de serviços</strong>
                <p className="mt-2 text-sm leading-6 text-zinc-500">Apresente seu trabalho e facilite pedidos de orçamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[170px]" />
        <div className="relative mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Nosso padrão</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Sua empresa merece ser levada a sério.
              <br />
              <span className="text-cyan-400">Seu site também.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-8 text-zinc-400">
              Do Site Start ao Premium, mantemos o mesmo cuidado com design, responsividade e apresentação. O que muda é a estrutura necessária para cada negócio.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { icon:<CodeIcon />, title:"Design profissional", text:"Visual adaptado à identidade e ao segmento da sua empresa." },
              { icon:<SpeedIcon />, title:"Performance e responsividade", text:"Experiência pensada para celular, tablet e computador." },
              { icon:<LayersIcon />, title:"Estrutura certa", text:"Você escolhe o tamanho do projeto, não a qualidade da entrega." },
            ].map((item) => (
              <div key={item.title} className="rounded-[26px] border border-white/[0.07] bg-[#05090f]/80 p-7 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="mx-auto max-w-[850px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Por que a LJota Tech?</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Tecnologia sem complicação.
              <br />
              <span className="text-zinc-600">Um site pensado para o seu negócio.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Design personalizado","Nada de aparência genérica. O projeto é adaptado ao segmento e à identidade da sua empresa."],
              ["Atendimento direto","Você acompanha o projeto de forma simples, com escopo, etapas e ajustes bem definidos."],
              ["Foco em contato","Estrutura pensada para apresentar seu negócio e facilitar o contato de novos clientes."],
              ["Pronto para publicar","Configuração de domínio, hospedagem e HTTPS conforme o plano contratado."],
            ].map(([title,text]) => (
              <div key={title} className="rounded-[26px] border border-white/[0.07] bg-[#05090f]/80 p-7 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-300">
                  <CheckIcon />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 py-28">
        <div className="mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Projetos demonstrativos</span>
              <h2 className="mt-5 max-w-[800px] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Diferentes segmentos.
                <br />
                <span className="text-zinc-600">A mesma atenção aos detalhes.</span>
              </h2>
            </div>
            <p className="text-sm leading-7 text-zinc-500">
              Veja na prática o padrão visual que podemos criar para diferentes segmentos. Os projetos abaixo são conceitos demonstrativos, não clientes reais.
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
                  <span className={`text-xs font-semibold uppercase tracking-[0.17em] ${project.accent}`}>
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 max-w-[540px] text-sm leading-6 text-zinc-500">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-600">
                    <span className="rounded-full border border-white/[0.06] px-3 py-1.5">Responsivo</span>
                    <span className="rounded-full border border-white/[0.06] px-3 py-1.5">WhatsApp</span>
                    <span className="rounded-full border border-white/[0.06] px-3 py-1.5">Design personalizado</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-zinc-700">
            * Marcas e projetos apresentados acima são conceitos fictícios criados exclusivamente para demonstração.
          </p>
        </div>
      </section>

      <section id="planos" className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[190px]" />
        <div className="relative mx-auto max-w-[1420px] px-6 lg:px-10">
          <div className="mx-auto max-w-[860px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Escolha sua estrutura</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Um plano para cada momento do seu negócio.
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-8 text-zinc-400">
              Todos seguem o mesmo padrão de qualidade. O que muda é a quantidade de conteúdo, páginas, recursos e complexidade.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-cyan-400/35 bg-gradient-to-b from-cyan-400/[0.09] via-[#07111a] to-[#04080d] shadow-[0_30px_90px_rgba(0,174,255,.12)] lg:-translate-y-3 lg:hover:-translate-y-4"
                    : "border-white/[0.08] bg-[#05090f]/85"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-5 top-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">
                    Mais escolhido
                  </div>
                )}

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">{plan.eyebrow}</span>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{plan.name}</h3>
                <div className="mt-6">
                  <strong className={`block font-semibold tracking-[-0.055em] ${plan.name === "Site Premium" ? "text-4xl" : "text-5xl"}`}>
                    {plan.price}
                  </strong>
                </div>
                <p className="mt-5 min-h-[84px] text-sm leading-7 text-zinc-500">{plan.description}</p>
                <div className="my-7 h-px bg-white/[0.07]" />
                <div className="flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                      <span className="mt-0.5 shrink-0 text-cyan-400"><CheckIcon /></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition hover:-translate-y-1 ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-[0_15px_50px_rgba(0,174,255,.16)]"
                      : "border border-white/[0.10] bg-white/[0.04] text-zinc-100 hover:border-cyan-400/25 hover:bg-white/[0.07]"
                  }`}
                >
                  {plan.cta}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-[900px] gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-4 text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-700">PIX</span>
              <strong className="mt-1 block text-sm text-zinc-300">50% no início + 50% na entrega</strong>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-4 text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-700">CARTÃO</span>
              <strong className="mt-1 block text-sm text-zinc-300">Até 12x*</strong>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-black/10 px-5 py-4 text-center">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-700">MENSALIDADE</span>
              <strong className="mt-1 block text-sm text-zinc-300">Sem mensalidade fixa obrigatória</strong>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-[920px] text-center text-[11px] leading-6 text-zinc-700">
            * Domínio e hospedagem estão incluídos por 12 meses nos planos apresentados, sujeitos às condições da infraestrutura utilizada.
            Após esse período, é necessária renovação para manter domínio e hospedagem ativos. Parcelamento sujeito aos juros e taxas da operadora.
            Projetos fora do escopo padrão recebem orçamento específico.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Planos LJota Tech</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Encontre a estrutura ideal para o seu negócio.
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-zinc-500">
              Do essencial ao projeto mais completo, escolha a solução que melhor atende às necessidades da sua empresa.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto rounded-[28px] border border-white/[0.07] bg-[#05090f]/80">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="p-5 text-zinc-500">Recurso</th>
                  <th className="p-5 text-white">Start</th>
                  <th className="p-5 text-cyan-300">Express</th>
                  <th className="p-5 text-white">Premium</th>
                </tr>
              </thead>
              <tbody className="text-zinc-500">
                {[
                  ["Design personalizado","✓","✓","✓"],
                  ["Responsivo","✓","✓","✓"],
                  ["WhatsApp","✓","✓","✓"],
                  ["Domínio + hospedagem 1 ano","✓","✓","✓"],
                  ["Site institucional One Page","✓","—","—"],
                  ["Formulário de contato","—","✓","✓"],
                  ["Google Maps","—","✓","✓"],
                  ["SEO técnico básico","—","✓","✓"],
                  ["Site institucional com até 5 páginas","—","—","✓"],
                  ["SEO técnico por página","—","—","✓"],
                  ["Google Analytics + Search Console","—","—","✓"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/[0.05] last:border-b-0">
                    {row.map((cell,index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`p-5 ${index === 2 ? "bg-cyan-400/[0.025]" : ""} ${cell === "✓" ? "text-cyan-400" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="rounded-[30px] border border-white/[0.07] bg-[#05090f]/80 p-7 sm:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Contratação sem complicação</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Você sabe exatamente o que acontece depois do primeiro contato.
            </h2>

            <div className="mt-8 grid gap-3 text-sm text-zinc-500 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["1","Conversa inicial","Entendemos seu negócio e o que você precisa."],
                ["2","Proposta + contrato","Escopo, prazo e valor ficam definidos antes do início."],
                ["3","50% + desenvolvimento","Com a entrada confirmada e o briefing recebido, o projeto começa."],
                ["4","Aprovação + publicação","Após os ajustes e o pagamento final, colocamos o site no ar."],
              ].map(([number,title,desc]) => (
                <div key={number} className="rounded-2xl border border-white/[0.055] bg-black/10 p-5">
                  <span className="text-cyan-400">{number}</span>
                  <strong className="mt-2 block text-zinc-200">{title}</strong>
                  <p className="mt-2 leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="relative z-10 border-y border-white/[0.06] bg-white/[0.018] py-28">
        <div className="mx-auto max-w-[1420px] px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Processo simples</span>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Da escolha do plano ao site publicado.
          </h2>
          <p className="mt-5 max-w-[680px] text-sm leading-7 text-zinc-500">
            Um processo objetivo, com escopo definido e etapas claras.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["01","Escolha","Entendemos sua necessidade e indicamos a estrutura adequada."],
              ["02","Briefing","Você envia informações, serviços, logo, fotos e referências."],
              ["03","Criação","Desenvolvemos estrutura, conteúdo e identidade visual."],
              ["04","Ajustes","Você revisa o projeto e utiliza as rodadas previstas no plano."],
              ["05","Publicação","Após aprovação e pagamento final, colocamos o projeto no ar."],
            ].map(([number,title,text]) => (
              <div key={number} className="rounded-[26px] border border-white/[0.07] bg-[#05090f]/80 p-6 backdrop-blur-xl">
                <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.07]">{number}</span>
                <div className="mt-7 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[180px]" />
        <div className="relative mx-auto max-w-[980px] px-6">
          <div className="overflow-hidden rounded-[34px] border border-cyan-400/20 bg-gradient-to-br from-[#07131d] via-[#050a10] to-[#020407] p-1">
            <div className="rounded-[30px] border border-white/[0.05] p-8 sm:p-12">
              <div className="mx-auto max-w-[760px] text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Formas de pagamento</span>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Comece com 50%.</h2>
                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  No Pix, você paga 50% para iniciar e 50% após a aprovação do projeto, antes da publicação definitiva.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] border border-cyan-400/15 bg-cyan-400/[0.045] p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.17em] text-cyan-400">PIX</span>
                  <strong className="mt-4 block text-2xl">50% + 50%</strong>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">Entrada para iniciar + saldo após aprovação.</p>
                </div>

                <div className="rounded-[24px] border border-blue-400/15 bg-blue-400/[0.04] p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.17em] text-blue-400">Cartão de crédito</span>
                  <strong className="mt-4 block text-2xl">Em até 12x</strong>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Parcelamento sujeito aos juros e taxas da operadora da maquininha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-8 overflow-hidden rounded-[30px] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.055] via-[#050a10] to-blue-500/[0.04] p-8 md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300">
              <ShieldIcon />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Garantia técnica</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Seu projeto não termina na publicação.</h2>
              <p className="mt-3 max-w-[850px] text-sm leading-7 text-zinc-500">
                Após a publicação, você conta com 7 dias de garantia técnica para correção de eventuais problemas relacionados ao desenvolvimento entregue. Novas páginas, funcionalidades ou alterações de conteúdo não fazem parte da garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 border-t border-white/[0.06] bg-white/[0.018] py-28">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Dúvidas frequentes</span>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">Antes de começar.</h2>
            <p className="mt-5 max-w-[360px] text-sm leading-7 text-zinc-500">
              Tudo que você precisa saber antes de escolher seu plano.
            </p>
          </div>

          <div>
            {[
              ["Qual é a diferença entre os planos?","A qualidade visual e técnica é mantida em todos. O que muda é a estrutura do projeto, quantidade de páginas, recursos e número de revisões previstas."],
              ["O site ficará sendo meu?","Sim. Após a conclusão e quitação do projeto, o site desenvolvido para sua empresa é entregue conforme o escopo contratado. Serviços de terceiros, como domínio e hospedagem, continuam sujeitos às regras e renovações dos respectivos provedores."],
              ["Preciso pagar mensalidade?","Não existe mensalidade fixa obrigatória da LJota Tech no projeto inicial. Após os 12 meses incluídos, domínio e hospedagem precisam ser renovados para permanecer ativos."],
              ["Como funciona o pagamento?","No Pix, trabalhamos com 50% para iniciar o projeto e 50% após a aprovação, antes da publicação definitiva. Também aceitamos cartão de crédito em até 12x, sujeito aos juros e taxas da operadora."],
              ["Preciso já ter domínio?","Não. Se você ainda não possui domínio, ajudamos na escolha e configuração. Os planos apresentados incluem domínio por 12 meses, sujeito à disponibilidade do nome escolhido."],
              ["Quem fornece textos, fotos e informações?","O cliente envia as informações principais, serviços, contatos, logo, fotos e referências disponíveis. A LJota Tech organiza esse material dentro da estrutura do site e pode orientar sobre o que é necessário para o projeto."],
              ["O domínio está incluso?","Sim. Os planos apresentados incluem domínio próprio por 12 meses, sujeito às condições da infraestrutura utilizada e à disponibilidade do nome escolhido."],
              ["A hospedagem está inclusa?","Sim. Os planos apresentados incluem hospedagem por 12 meses. Depois desse período, é necessária renovação para manter o site publicado."],
              ["Vou pagar mensalidade para a LJota Tech?","Não há mensalidade fixa obrigatória no projeto inicial. Após o período incluso, domínio e hospedagem precisam ser renovados para continuar ativos."],
              ["Em quanto tempo meu site fica pronto?","O Site Start possui prazo padrão de até 5 dias úteis após o recebimento de todo o material. Express e Premium têm prazo definido conforme o briefing e a complexidade do projeto."],
              ["Posso pedir alterações?","Sim. O Site Start inclui 1 rodada de ajustes e o Site Express inclui 2. No Premium, a quantidade de revisões é definida na proposta conforme o projeto."],
              ["O formulário realmente funciona?","Sim. Nos planos em que estiver incluído, configuramos o formulário para que os contatos sejam enviados corretamente."],
              ["Vocês fazem loja virtual, sistema ou área de login?","Esses serviços não fazem parte dos planos apresentados. Nosso foco atual é criação de sites institucionais profissionais. Necessidades fora desse escopo precisam ser avaliadas antes de qualquer proposta."],
              ["Meu site ficará em primeiro lugar no Google?","Não prometemos posição específica. Entregamos a estrutura técnica prevista em cada plano seguindo boas práticas de SEO, sem garantia de ranking, tráfego ou vendas."],
              ["O que cobre a garantia técnica?","Durante 7 dias após a publicação, corrigimos problemas técnicos relacionados ao projeto entregue. Novas páginas, funcionalidades ou mudanças de conteúdo são serviços adicionais."],
            ].map(([question,answer]) => (
              <details key={question} className="group border-b border-white/[0.07] py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-zinc-200">
                  {question}
                  <span className="text-xl text-cyan-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[720px] pt-4 text-sm leading-7 text-zinc-500">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-t border-white/[0.06] py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-600/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[190px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <Image src="/logo-simbolo.png" alt="" width={700} height={700} className="h-auto w-auto" />
        </div>

        <div className="relative mx-auto max-w-[950px] px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Vamos começar?</span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-6xl">
            Não sabe qual plano escolher?
            <br />
            <span className="text-cyan-400">A gente ajuda você a decidir.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-8 text-zinc-500">
            Conte um pouco sobre sua empresa e o que você precisa. Indicamos a opção mais adequada para o seu momento, sem compromisso.
          </p>
          <a
            href={whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-9 py-4 text-sm font-bold shadow-[0_20px_60px_rgba(0,174,255,.20)] transition hover:-translate-y-1"
          >
            Quero um orçamento
            <ArrowIcon />
          </a>
          <p className="mt-4 text-[11px] text-zinc-700">Atendimento online • Orçamento sem compromisso</p>
        </div>
      </section>

      <footer className="relative z-10 overflow-hidden border-t border-white/[0.06] bg-[#010204]">
        <div className="absolute bottom-[-210px] right-[-90px] opacity-[0.04]">
          <Image src="/logo-simbolo.png" alt="" width={700} height={700} className="h-auto w-auto" />
        </div>
        <div className="absolute left-[10%] top-[-170px] h-[430px] w-[430px] rounded-full bg-blue-600/[0.065] blur-[150px]" />

        <div className="relative mx-auto max-w-[1420px] px-6 py-20 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_.65fr_.8fr_.75fr]">
            <div>
              <Image src="/logo-ljota.png" alt="LJota Tech" width={420} height={140} className="h-[76px] w-auto object-contain" />
              <h3 className="mt-7 max-w-[510px] text-3xl font-semibold leading-tight tracking-[-0.04em]">
                Sua empresa merece ser levada a sério.
                <br />
                <span className="text-cyan-400">Seu site também.</span>
              </h3>
              <p className="mt-5 max-w-[510px] text-sm leading-7 text-zinc-600">
                Sites institucionais e soluções web para empresas e profissionais.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Navegação</span>
              <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">
                <a href="#inicio" className="transition hover:text-white">Início</a>
                <a href="#solucoes" className="transition hover:text-white">Soluções</a>
                <a href="#portfolio" className="transition hover:text-white">Projetos</a>
                <a href="#processo" className="transition hover:text-white">Como funciona</a>
                <a href="#planos" className="transition hover:text-white">Planos</a>
                <a href="#faq" className="transition hover:text-white">Dúvidas</a>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Nossos sites</span>
              <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-500">
                <a
                  href={whatsappStart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-300"
                >
                  Site Start — R$ 890
                </a>

                <a
                  href={whatsappExpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 transition hover:text-cyan-200"
                >
                  Site Express — R$ 1.490
                </a>

                <a
                  href={whatsappPremium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-300"
                >
                  Site Premium — R$ 2.990+
                </a>

                <a href="#planos" className="transition hover:text-white">
                  Domínio + hospedagem 1 ano*
                </a>

                <a href="#planos" className="transition hover:text-white">
                  PIX 50% + 50%
                </a>

                <a href="#planos" className="transition hover:text-white">
                  Cartão em até 12x
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Contato</span>
              <p className="mt-6 text-sm leading-6 text-zinc-500">Não sabe qual plano escolher?</p>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.12]"
              >
                Falar no WhatsApp
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
            <p className="tracking-[0.1em]">CONECTANDO EMPRESAS À TECNOLOGIA</p>
          </div>

          <p className="mt-5 text-[10px] leading-5 text-zinc-800">
            * Domínio e hospedagem inclusos por 12 meses, sujeitos às condições da infraestrutura utilizada.
            Após o período incluso, é necessária renovação. Parcelamento sujeito aos juros e taxas da operadora.
          </p>
        </div>
      </footer>

      <a
        href={whatsappGeneral}
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
