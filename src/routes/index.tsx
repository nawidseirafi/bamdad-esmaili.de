import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Archive,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Headphones,
  Images,
  Instagram,
  Mic,
  Play,
  Video,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const emailUserParts = ["in", "fo"];
const emailDomainParts = ["bamdad", "-", "esmaili", ".", "de"];

const getEmailAddress = () => `${emailUserParts.join("")}@${emailDomainParts.join("")}`;

const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/20 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-background/35 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-secondary/85 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const HERO_IMAGE = assetPath("media/bamdad-esmaili.webp");
const HERO_BACKGROUND = assetPath("hero.png");
const CONTACT_BACKGROUND = assetPath("journalist-studio-hero.png");
const PORTRAIT_IMAGE = assetPath("media/portfolio/bamdad-esmaili-portrait.jpg");

const skills = [
  { label: "TV & Medien", value: 95 },
  { label: "Politische Analyse", value: 93 },
  { label: "Migration & Integration", value: 96 },
  { label: "Live & Moderation", value: 94 },
];

const services = [
  {
    n: "01",
    title: "Journalismus",
    text: "Reportagen, Interviews und Analysen zu Politik, Gesellschaft, Migration und internationalem Zeitgeschehen.",
  },
  {
    n: "02",
    title: "Dokumentationen",
    text: "Dokumentarische Formate über Menschen, Flucht, Exil, Integration und die Realität hinter politischen Entwicklungen.",
  },
  {
    n: "03",
    title: "Moderation & Live",
    text: "Live-Sendungen, Gespräche und aktuelle Einordnungen für TV, Onlineformate und deutsch-persische Communities.",
  },
];

const works = [
  {
    title: "Bildergalerie",
    cat: "Zur Galerie",
    img: assetPath("media/gallery-11.jpg"),
    href: "#galerie",
  },
  {
    title: "Online",
    cat: "Artikel öffnen",
    img: assetPath("media/migration-integration.jpeg"),
    media: "web",
  },
  {
    title: "TV",
    cat: "Video ansehen",
    img: HERO_IMAGE,
    media: "tv",
  },
  {
    title: "Radio",
    cat: "Audio hören",
    img: assetPath("media/radio.jpg"),
    media: "radio",
  },
];

const mediaCollections = {
  tv: {
    eyebrow: "TV",
    title: "TV-Beiträge & Liveschalten",
    description: "Ausgewählte bewegte Arbeiten aus Studio, Redaktion und Live-Berichterstattung.",
    Icon: Video,
    items: [
      {
        title: "Showreel Bamdad Esmaili",
        meta: "Liveschalten",
        src: assetPath("media/TV/Showreel Bamdad Esmaili (Liveschalten).mp4"),
        type: "video",
      },
    ],
  },
  radio: {
    eyebrow: "Radio",
    title: "Radio-Beiträge",
    description: "Reportagen, Analysen und Gespräche zum direkten Anhören.",
    Icon: Headphones,
    items: [
      {
        title: "Frau, Leben, Freiheit: Die Revolution im Iran",
        meta: "1LIVE · Reportage",
        src: assetPath("media/Radio/1livereportage_2023-01-02_fraulebenfreiheitdierevolutionimiran_1live.mp3"),
        type: "audio",
      },
      {
        title: "Afghanen über Abschiebung",
        meta: "Radio-Beitrag",
        src: assetPath("media/Radio/Afghanen über Abschiebung.mp3"),
        type: "audio",
      },
      {
        title: "Iranischer Sänger wechselt die Seiten",
        meta: "Radio-Beitrag",
        src: assetPath("media/Radio/Iranischer Sänger wechselt die Seiten.mp3"),
        type: "audio",
      },
      {
        title: "Raisi ist tot",
        meta: "Radio-Beitrag",
        src: assetPath("media/Radio/Raisi ist tot.mp3"),
        type: "audio",
      },
    ],
  },
  web: {
    eyebrow: "Online",
    title: "Online-Reportagen",
    description:
      "Veröffentlichte Webartikel mit Live-Link und gesichertem Screenshot, falls Originalseiten später nicht mehr erreichbar sind.",
    Icon: FileText,
    items: [
      {
        title: "Tod eines Geflüchteten in Essen",
        meta: "WDR · Politik in NRW",
        url: "https://www1.wdr.de/politik/politik-in-nrw/tod-eines-gefluechteten-in-essen-100.html",
        screenshot: assetPath("media/Web/screenshots/image1.png"),
        type: "article",
      },
      {
        title: "Exiliraner und die Zukunft des Iran",
        meta: "tagesschau.de · Gesellschaft",
        url: "https://www.tagesschau.de/inland/gesellschaft/exiliraner-zukunft-iran-100.html",
        screenshot: assetPath("media/Web/screenshots/image2.png"),
        type: "article",
      },
      {
        title: "Global Pop News",
        meta: "WDR COSMO · Musik",
        url: "https://www1.wdr.de/radio/cosmo/musik/global-pop-news/global-pop-news-6128.html",
        screenshot: assetPath("media/Web/screenshots/image3.png"),
        type: "article",
      },
      {
        title: "Radio3 aktuell",
        meta: "radio3 · Archiv",
        url: "https://www.radiodrei.de/programm/schema/sendungen/radio3_am_morgen/archiv/20250825_0600/radio3_aktuell_0720.html",
        screenshot: assetPath("media/Web/screenshots/image4.png"),
        type: "article",
      },
      {
        title: "Attentäter München: Hintergrund",
        meta: "tagesschau.de · Gesellschaft",
        url: "https://www.tagesschau.de/inland/gesellschaft/attentaeter-muenchen-hintergrund-100.html",
        screenshot: assetPath("media/Web/screenshots/image5.png"),
        type: "article",
      },
    ],
  },
} as const;

type MediaKey = keyof typeof mediaCollections;

const galleryItems = [
  { file: "bericht-aus-taschkent.jpg", title: "Bericht aus Taschkent" },
  { file: "bericht-aus-der-elfenbeinkueste.jpg", title: "Bericht aus der Elfenbeinküste" },
  { file: "champions-league-finale.jpg", title: "Champions League Finale" },
  { file: "champions-league.jpg", title: "Champions League" },
  { file: "dreh-in-athen.jpg", title: "Dreh in Athen" },
  { file: "dreh-in-dubai.jpg", title: "Dreh in Dubai" },
  { file: "dreh-in-idomeni.jpg", title: "Dreh in Idomeni" },
  { file: "dreh-in-istanbul.jpg", title: "Dreh in Istanbul" },
  { file: "dreh-in-kalamata.jpg", title: "Dreh in Kalamata" },
  { file: "dreh-in-london.jpg", title: "Dreh in London" },
  { file: "dreh-in-oesterreich.jpg", title: "Dreh in Österreich" },
  { file: "dreharbeiten-in-brasilien.jpg", title: "Dreharbeiten in Brasilien" },
  { file: "erste-radio-erfahrungen.jpg", title: "Erste Radio Erfahrungen" },
  { file: "gefluechteter-als-schwimmlehrer.jpg", title: "Geflüchteter als Schwimmlehrer" },
  { file: "interview-angela-merkel.jpg", title: "Interview Angela Merkel" },
  { file: "interview-aryana-sayeed.jpg", title: "Interview Aryana Sayeed" },
  { file: "interview-ben-kingsley.jpg", title: "Interview Ben Kingsley" },
  { file: "interview-dariush.jpg", title: "Interview Dariush" },
  { file: "interview-ebi.jpg", title: "Interview Ebi" },
  { file: "interview-frank-walter-steinmeier.jpg", title: "Interview Frank Walter Steinmeier" },
  { file: "interview-franz-beckenbauer.jpg", title: "Interview Franz Beckenbauer" },
  { file: "interview-golpa.jpg", title: "Interview Golpa" },
  { file: "interview-googoosh.jpg", title: "Interview Googoosh" },
  { file: "interview-peter-maffay.jpg", title: "Interview Peter Maffay" },
  { file: "interview-ramin-javadi.jpg", title: "Interview Ramin Javadi" },
  { file: "interview-shaggy.jpg", title: "Interview Shaggy" },
  { file: "interview-thomas-de-maiziere.jpg", title: "Interview Thomas De Maiziere" },
  { file: "interview-in-bonn.jpg", title: "Interview in Bonn" },
  { file: "interview-mit-reza-pahlavi.jpg", title: "Interview mit Reza Pahlavi" },
  { file: "karneval-in-venedig.jpg", title: "Karneval in Venedig" },
  { file: "live-aus-athen.jpg", title: "Live aus Athen" },
  { file: "live-aus-muenchen-2.jpg", title: "Live aus München 2" },
  { file: "live-aus-muenchen.jpg", title: "Live aus München" },
  { file: "live-im-radio.jpg", title: "Live im Radio" },
  { file: "moderation-10-jahre-wdrforyou.jpg", title: "Moderation 10 Jahre WDRforyou" },
  { file: "reportage-auf-lesbos.jpg", title: "Reportage auf Lesbos" },
  { file: "reportage-in-belgrad.jpg", title: "Reportage in Belgrad" },
  { file: "reportage-in-serbien.jpg", title: "Reportage in Serbien" },
  { file: "zu-besuch-beim-bundespraesidenten.jpg", title: "Zu Besuch beim Bundespräsidenten" },
  { file: "phoenix-live-3.jpg", title: "phoenix live 3" },
];

const galleryImages = galleryItems.map(({ file, title }, index) => ({
  title,
  context: "Galerie",
  img: assetPath(`media/galerie/${file}`),
  className: index % 11 === 0 ? "sm:col-span-2" : index % 7 === 0 ? "md:col-span-2" : "",
}));

type GalleryImageData = (typeof galleryImages)[number];

const INITIAL_GALLERY_COUNT = 5;

const timeline = [
  {
    when: "Seit den 1990er-Jahren",
    role: "Freier Journalist, Reporter & Moderator",
    place: "Radio • TV • Online",
    text: "Journalistische Arbeit für Hörfunk, Fernsehen und digitale Formate mit Fokus auf gesellschaftliche, politische und kulturelle Themen.",
  },
  {
    when: "Seit vielen Jahren",
    role: "Reporter & Autor",
    place: "WDR • Deutsche Welle • BBC • Internationale Medien",
    text: "Reportagen, Beiträge, Interviews und Moderationen zu Migration, Integration und politischen Entwicklungen in Deutschland und Europa.",
  },
  {
    when: "Seit 2015",
    role: "Internationale Reportagen & Dokumentationen",
    place: "Europa • Naher Osten • Migration",
    text: "Begleitung von Fluchtbewegungen aus Iran und Afghanistan sowie Reportagen über Exil, Integration und Schicksale entlang internationaler Routen.",
  },
];

const focus = [
  {
    title: "Deutsch-persische Formate",
    place: "WDRforyou",
    text: "Beiträge und Moderationen auf Deutsch und Persisch für Geflüchtete, Migranten und internationale Communities.",
  },
  {
    title: "Internationaler Journalismus",
    place: "Migration • Gesellschaft • Politik",
    text: "Berichterstattung über Entwicklungen im Iran, in Deutschland und innerhalb der iranischen Diaspora.",
  },
  {
    title: "Persönlicher Hintergrund",
    place: "Exil & Teilhabe",
    text: "Geboren in Teheran, während des Iran-Irak-Krieges selbst nach Deutschland geflüchtet — eine Erfahrung, die seinen Blick bis heute prägt.",
  },
];

const stats = [
  { value: "30+", label: "Jahre im Journalismus" },
  { value: "3", label: "Radio • TV • Online" },
  { value: "1000+", label: "Beiträge & Interviews" },
  { value: "20+", label: "Länder bereist" },
];

const topics = [
  {
    title: "Iran & Diaspora",
    img: assetPath("media/iran-diaspora.jpg"),
    text: "Politische und gesellschaftliche Entwicklungen im Iran und das Leben der Diaspora in Europa.",
  },
  {
    title: "Politik & Gesellschaft",
    img: assetPath("media/politics.png"),
    text: "Einordnungen zu Asylpolitik, Aufenthaltsrecht und den Debatten, die Deutschland bewegen.",
  },
  {
    title: "Migration & Integration",
    img: assetPath("media/migration-integration.jpeg"),
    text: "Geschichten von Flucht, Ankommen und Teilhabe — entlang der Routen und danach.",
  },
];

const nav = [
  { href: "#ueber", label: "Über" },
  { href: "#arbeit", label: "Arbeiten" },
  { href: "#werdegang", label: "Werdegang" },
  { href: "#kontakt", label: "Kontakt" },
];

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@BTalks-Bamdad", Icon: Youtube, hasMenu: true },
  { label: "X", href: "https://x.com/besmaili", Icon: XPlatformIcon },
  { label: "Instagram", href: "https://www.instagram.com/bamdad_esmaili/?hl=de", Icon: Instagram },
];

const youtubeChannels = [
  { label: "YouTube Deutsch", href: "https://www.youtube.com/@BTalks-Bamdad" },
  { label: "YouTube Persisch", href: "https://www.youtube.com/@besmaili" },
];

const heroHighlights = [
  { title: "TV-Journalist", text: "WDR • DW • YouTube", Icon: Video },
  { title: "Dokumentation", text: "Deutschland • Europa", Icon: FileText },
  { title: "Live-Berichte", text: "Politik • Gesellschaft • Migration", Icon: Mic },
];

function Index() {
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaKey | null>(null);
  const visibleGalleryImages = isGalleryExpanded
    ? galleryImages
    : galleryImages.slice(0, INITIAL_GALLERY_COUNT);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg tracking-tight">
            Bamdad <span className="text-primary">Esmaili</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="label-eyebrow transition-colors hover:text-foreground"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <SocialRail />

      <main id="top">
        {/* Hero */}
        <section className="relative min-h-[calc(100svh-73px)] overflow-hidden md:min-h-[calc(100svh-73px)]">
          <img
            src={HERO_BACKGROUND}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-[74%_center] md:object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/72 via-background/32 via-58% to-background/18 md:from-background/48 md:via-background/10 md:via-42% md:to-background/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[32rem] bg-gradient-to-t from-background/92 via-background/78 via-55% to-transparent"
            aria-hidden
          />
          <div className="relative z-20 mx-auto flex min-h-[calc(100svh-73px)] max-w-6xl items-center px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <p className="label-eyebrow text-primary">Journalist · Reporter · Moderator</p>
              <h1 className="mt-6 text-5xl leading-[0.95] tracking-tight drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[6.5rem]">
                Ich bin
                <br />
                <span className="italic text-primary">Bamdad</span> Esmaili
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/78">
                Deutsch-iranischer Journalist. Seit den 1990er-Jahren zwischen Redaktion, Straße und
                Fluchtroute — für WDR, Deutsche Welle, BBC und eigene Formate.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#arbeit"
                  className={primaryButtonClass}
                >
                  Arbeiten ansehen
                </a>
                <a
                  href="#kontakt"
                  className={secondaryButtonClass}
                >
                  Kontakt
                </a>
              </div>
              <SocialLinks className="mt-8 lg:hidden" />
            </div>
          </div>
          <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-1 border-t border-white/18 px-6 sm:grid-cols-3">
            {heroHighlights.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="flex items-center gap-5 border-white/14 py-7 sm:border-l sm:px-8 first:sm:border-l-0"
              >
                <Icon className="h-8 w-8 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="mt-1 text-sm text-foreground/68">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Über */}
        <section id="ueber" className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-eyebrow">Über</p>
          <div className="mt-8 grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-muted-foreground">
              <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">
                Journalismus beginnt dort, wo Schlagzeilen enden.
              </h2>
              <p className="leading-relaxed">
                Bamdad Esmaili ist deutsch-iranischer Journalist, Reporter und Moderator. In der
                iranischen Community wird er oft als einer der meistgefolgten iranischen
                Journalisten in Deutschland bezeichnet — auch weil er seit Jahren in engem täglichem
                Austausch mit der Community steht und politische, gesellschaftliche und kulturelle
                Entwicklungen im Iran sowie die Lebensrealität von Iranern und Afghanen in
                Deutschland kontinuierlich begleitet und journalistisch einordnet.
              </p>
              <p className="leading-relaxed">
                Seit den 1990er-Jahren arbeitet er für Radio, Fernsehen und Onlineformate, unter
                anderem für den WDR, die Deutsche Welle, BBC sowie weitere öffentlich-rechtliche und
                internationale Medien. Neben seiner Arbeit für klassische Medien berichtet er
                regelmäßig auf seinem eigenen YouTube-Kanal über aktuelle Entwicklungen im Iran, die
                iranische Diaspora, Migration, Integration sowie gesellschaftliche und politische
                Themen in Deutschland und Europa.
              </p>
              <p className="leading-relaxed">
                Seit 2015 berichtet er intensiv über die Fluchtbewegungen aus dem Iran und
                Afghanistan. In zahlreichen Reportagen, Livesendungen und Dokumentationen begleitet
                er Menschen auf ihrem Weg nach Europa und beim Ankommen in Deutschland. Dafür war er
                unter anderem in Flüchtlingslagern und entlang wichtiger Fluchtrouten in
                Griechenland, Italien, Frankreich, Deutschland, England sowie entlang der
                Balkanroute unterwegs. Seine Arbeiten beschäftigen sich mit Asylpolitik,
                Integration, Visa- und Aufenthaltsfragen, aber auch mit persönlichen Geschichten von
                Hoffnung, Verlust und Neuanfang.
              </p>
              <p className="leading-relaxed">
                Ein besonderer Fokus seiner Arbeit liegt auf deutsch-persischen Formaten und der
                journalistischen Vermittlung zwischen unterschiedlichen Lebensrealitäten. Für das
                WDR-Format „WDRforyou“ berichtet er seit vielen Jahren auf Deutsch und Persisch über
                Themen, die Geflüchtete und Migranten direkt betreffen.
              </p>
              <p className="leading-relaxed">
                Bamdad Esmaili wurde in Teheran geboren und kam während des Iran-Irak-Krieges
                selbst als Geflüchteter nach Deutschland. Diese persönliche Erfahrung prägt bis
                heute seine journalistische Arbeit und seinen Blick auf Migration, Exil und
                gesellschaftliche Teilhabe.
              </p>
            </div>
            <div className="space-y-6">
              <figure className="overflow-hidden rounded-sm border border-border bg-card/40">
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Portrait von Bamdad Esmaili"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[50%_28%] grayscale"
                />
              </figure>
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{s.label}</span>
                    <span className="font-display text-lg text-primary">{s.value}%</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-border">
                    <div className="h-px bg-primary" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="mt-20 border-l-2 border-primary pl-6 md:pl-10">
            <blockquote className="font-display text-2xl italic leading-snug sm:text-3xl">
              „Wahrer Journalismus beginnt dort, wo Schlagzeilen enden — in den Lebensrealitäten,
              Hoffnungen, Konflikten und unerzählten Geschichten echter Menschen jenseits von
              Grenzen, Kulturen und politischen Krisen."
            </blockquote>
            <figcaption className="mt-4 label-eyebrow">— Bamdad Esmaili</figcaption>
          </figure>
        </section>

        {/* Was ich tue */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="label-eyebrow">Was ich tue</p>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.n}
                  className="hover-lift border border-transparent bg-background p-8"
                >
                  <span className="font-display text-3xl text-primary">{s.n}</span>
                  <h3 className="mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="arbeit" className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between">
            <p className="label-eyebrow">Ausgewählte Arbeiten</p>
            <span className="label-eyebrow">04</span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {works.map((w, i) => {
              const cardClassName = `hover-lift group overflow-hidden rounded-sm border border-border ${
                i % 3 === 0 ? "sm:col-span-2" : ""
              } ${w.href || w.media ? "block cursor-pointer" : ""}`;
              const cardContent = (
                <>
                  <div className="relative overflow-hidden">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      className={`w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 ${
                        i % 3 === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                      }`}
                    />
                    {(w.href || w.media) && (
                      <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-background/70 text-primary backdrop-blur transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {w.media === "radio" ? (
                          <Headphones className="h-5 w-5" aria-hidden />
                        ) : w.media === "web" ? (
                          <FileText className="h-5 w-5" aria-hidden />
                        ) : w.href === "#galerie" ? (
                          <Images className="h-5 w-5" aria-hidden />
                        ) : (
                          <Play className="h-5 w-5 fill-current" aria-hidden />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between px-6 py-5">
                    <h3 className="text-xl">{w.title}</h3>
                    <span className="label-eyebrow transition-colors group-hover:text-primary">
                      {w.cat}
                    </span>
                  </div>
                </>
              );

              return w.href ? (
                <a key={w.title} href={w.href} className={cardClassName}>
                  {cardContent}
                </a>
              ) : w.media ? (
                <button
                  key={w.title}
                  type="button"
                  onClick={() => setSelectedMedia(w.media)}
                  className={`${cardClassName} text-left`}
                >
                  {cardContent}
                </button>
              ) : (
                <article key={w.title} className={cardClassName}>
                  {cardContent}
                </article>
              );
            })}
          </div>

          <div id="galerie" className="mt-24 border-t border-border pt-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="label-eyebrow">Galerie</p>
                <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Momente aus der Arbeit</h2>
              </div>
              <span className="label-eyebrow">
                {String(visibleGalleryImages.length).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-10 grid auto-rows-[18rem] grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleGalleryImages.map((image) => (
                <GalleryImage
                  key={image.title}
                  image={image}
                  onOpen={() => setSelectedGalleryIndex(galleryImages.indexOf(image))}
                />
              ))}
            </div>
            {galleryImages.length > INITIAL_GALLERY_COUNT && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsGalleryExpanded((expanded) => !expanded)}
                  className={secondaryButtonClass}
                >
                  {isGalleryExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Werdegang */}
        <section id="werdegang" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="label-eyebrow">Beruflicher Werdegang</p>
            <div className="mt-10 grid gap-16 md:grid-cols-2">
              <div>
                <h2 className="text-3xl">Erfahrung</h2>
                <ol className="mt-8 space-y-10 border-l border-border pl-8">
                  {timeline.map((t) => (
                    <li key={t.role} className="relative">
                      <span className="absolute -left-[2.19rem] top-2 h-2 w-2 rounded-full bg-primary" />
                      <p className="label-eyebrow">{t.when}</p>
                      <h3 className="mt-2 text-xl">{t.role}</h3>
                      <p className="text-sm text-primary">{t.place}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-3xl">Schwerpunkte</h2>
                <div className="mt-8 space-y-6">
                  {focus.map((f) => (
                    <div key={f.title} className="hover-lift rounded-sm border border-border p-6">
                      <h3 className="text-xl">{f.title}</h3>
                      <p className="text-sm text-primary">{f.place}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-px rule-top bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-6 py-10 text-center">
                  <p className="font-display text-5xl text-primary">{s.value}</p>
                  <p className="mt-2 label-eyebrow">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themen

        <section id="themen" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="label-eyebrow">Aktuelle Themen</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {topics.map((t) => (
                <article
                  key={t.title}
                  className="hover-lift rounded-sm border border-border bg-background"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-t-sm object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
*/}
        {/* Kontakt */}
        <section id="kontakt" className="relative overflow-hidden border-t border-border">
          <img
            src={CONTACT_BACKGROUND}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55 saturate-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-background/46" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.62)_100%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
            <p className="label-eyebrow text-primary">Kontakt</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
              Eine Geschichte, die erzählt werden muss?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Für Anfragen zu Reportagen, Interviews, Moderationen oder Kooperationen:
            </p>
            <EmailLink
              className={`mt-10 ${primaryButtonClass} px-8 py-4`}
            />
            <SocialLinks className="mx-auto mt-8 justify-center lg:hidden" />
            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {youtubeChannels.map((channel) => (
                <a
                  key={channel.href}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label-eyebrow text-foreground/62 transition-colors hover:text-primary"
                >
                  {channel.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GalleryViewer
        images={galleryImages}
        selectedIndex={selectedGalleryIndex}
        onSelectedIndexChange={setSelectedGalleryIndex}
      />
      <MediaViewer selectedMedia={selectedMedia} onSelectedMediaChange={setSelectedMedia} />

      <footer className="relative z-20 border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Bamdad Esmaili · Design:{" "}
            <a
              href="https://seirafi.de"
              target="_blank"
              rel="noreferrer"
              className="relative z-30 inline-block text-primary hover:underline"
            >
              seirafi.de
            </a>
          </span>
          <div className="flex flex-wrap gap-5">
            <LegalDialog title="Impressum" trigger="Impressum">
              <ImprintContent />
            </LegalDialog>
            <LegalDialog title="Datenschutzerklärung" trigger="Datenschutz">
              <PrivacyContent />
            </LegalDialog>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;

function GalleryImage({
  image,
  onOpen,
}: {
  image: GalleryImageData;
  onOpen: () => void;
}) {
  const { title, context, img, className } = image;

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`hover-lift group relative overflow-hidden rounded-sm border border-border bg-background text-left ${className}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/88 via-background/36 to-transparent px-5 py-5"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 px-5 py-5">
        <p className="label-eyebrow text-foreground/58">{context}</p>
        <h3 className="mt-2 font-display text-2xl font-normal text-foreground">{title}</h3>
      </div>
    </button>
  );
}

function GalleryViewer({
  images,
  selectedIndex,
  onSelectedIndexChange,
}: {
  images: GalleryImageData[];
  selectedIndex: number | null;
  onSelectedIndexChange: (index: number | null) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const open = selectedIndex !== null;
  const activeIndex = selectedIndex ?? 0;
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showImage(activeIndex - 1);
      }

      if (event.key === "ArrowRight") {
        showImage(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const showImage = (index: number) => {
    const nextIndex = (index + images.length) % images.length;
    onSelectedIndexChange(nextIndex);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(swipeDistance) < 50) {
      return;
    }

    showImage(swipeDistance > 0 ? activeIndex - 1 : activeIndex + 1);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onSelectedIndexChange(null);
        }
      }}
    >
      <DialogContent className="max-h-[92svh] max-w-6xl overflow-hidden border-border bg-background/95 p-0 backdrop-blur-xl sm:rounded-sm">
        <DialogHeader className="border-b border-border px-6 py-5 pr-14">
          <p className="label-eyebrow">
            Galerie · {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </p>
          <DialogTitle className="font-display text-3xl font-normal">
            {activeImage?.title}
          </DialogTitle>
        </DialogHeader>
        <div
          className="relative bg-black/20"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-[72svh] w-full items-center justify-center px-4 py-4 sm:px-8"
            key={activeImage?.img}
          >
            <img
              src={activeImage?.img}
              alt={activeImage?.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <button
            type="button"
            onClick={() => showImage(activeIndex - 1)}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/70 text-foreground transition-colors hover:bg-secondary sm:left-6"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => showImage(activeIndex + 1)}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-background/70 text-foreground transition-colors hover:bg-secondary sm:right-6"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MediaViewer({
  selectedMedia,
  onSelectedMediaChange,
}: {
  selectedMedia: MediaKey | null;
  onSelectedMediaChange: (media: MediaKey | null) => void;
}) {
  const open = selectedMedia !== null;
  const collection = selectedMedia ? mediaCollections[selectedMedia] : mediaCollections.tv;
  const { Icon } = collection;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onSelectedMediaChange(null);
        }
      }}
    >
      <DialogContent className="max-h-[92svh] max-w-5xl overflow-y-auto border-border bg-background/95 p-0 backdrop-blur-xl sm:rounded-sm">
        <DialogHeader className="border-b border-border px-6 py-5 pr-14">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-secondary text-primary">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="label-eyebrow">{collection.eyebrow}</p>
              <DialogTitle className="mt-2 font-display text-3xl font-normal">
                {collection.title}
              </DialogTitle>
            </div>
          </div>
          <p className="max-w-2xl pt-2 text-sm leading-relaxed text-muted-foreground">
            {collection.description}
          </p>
        </DialogHeader>

        {selectedMedia === "tv" ? (
          <div className="space-y-5 p-4 sm:p-6">
            {mediaCollections.tv.items.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-sm border border-border bg-black">
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="aspect-video w-full bg-black object-contain"
                />
                <div className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <span className="label-eyebrow">{item.meta}</span>
                </div>
              </article>
            ))}
          </div>
        ) : selectedMedia === "web" ? (
          <div className="p-4 sm:p-6">
            <div className="grid gap-5 md:grid-cols-2">
              {mediaCollections.web.items.map((item) => (
                <article
                  key={item.url}
                  className="overflow-hidden rounded-sm border border-border bg-background"
                >
                  <a
                    href={item.screenshot}
                    target="_blank"
                    rel="noreferrer"
                    className="group/screenshot block overflow-hidden bg-black/30"
                    aria-label={`Archiv-Screenshot zu ${item.title} öffnen`}
                  >
                    <img
                      src={item.screenshot}
                      alt={`Screenshot des Artikels: ${item.title}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top grayscale transition-all duration-700 group-hover/screenshot:scale-[1.02] group-hover/screenshot:grayscale-0"
                    />
                  </a>
                  <div className="space-y-4 p-5">
                    <div>
                      <p className="label-eyebrow">{item.meta}</p>
                      <h3 className="mt-2 font-display text-2xl leading-tight">{item.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${primaryButtonClass} min-h-10 gap-2 px-4 py-2`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden />
                        Live-Artikel
                      </a>
                      <a
                        href={item.screenshot}
                        target="_blank"
                        rel="noreferrer"
                        className={`${secondaryButtonClass} min-h-10 gap-2 px-4 py-2`}
                      >
                        <Archive className="h-4 w-4" aria-hidden />
                        Screenshot
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-px bg-border">
            {mediaCollections.radio.items.map((item, index) => (
              <article
                key={item.src}
                className="grid gap-4 bg-background px-5 py-5 sm:grid-cols-[4rem_1fr] sm:items-center sm:px-6"
              >
                <div className="font-display text-3xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg text-foreground">{item.title}</h3>
                    <span className="label-eyebrow">{item.meta}</span>
                  </div>
                  <audio src={item.src} controls preload="metadata" className="w-full" />
                </div>
              </article>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>

      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center text-primary/85 transition-colors hover:text-primary"
        >
          <Icon className="h-5 w-5" aria-hidden />
        </a>
      ))}
    </div>
  );
}

function XPlatformIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M13.9 10.47 21.35 2h-1.76l-6.47 7.35L7.96 2H2l7.81 11.12L2 22h1.76l6.83-7.76L16.04 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.11L4.4 3.3h2.72l5.08 7.12.79 1.11 6.6 9.24h-2.72l-5.39-7.55Z" />
    </svg>
  );
}

function SocialRail() {
  return (
    <aside
      aria-label="Social Media Kanäle"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex"
    >
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map(({ label, href, Icon, hasMenu }) =>
          hasMenu ? (
            <div key={label} className="group relative flex items-center">
              <a
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noreferrer"
                className="text-primary/85 transition-colors hover:text-primary focus:text-primary"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
              <span
                className="absolute left-5 top-1/2 hidden h-20 w-5 -translate-y-1/2 group-hover:block group-focus-within:block"
                aria-hidden
              />
              <div className="pointer-events-none absolute left-9 top-1/2 w-44 -translate-y-1/2 border border-white/10 bg-background/92 px-3 py-2 opacity-0 shadow-xl backdrop-blur transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <p className="label-eyebrow mb-2 text-foreground/45">YouTube</p>
                {youtubeChannels.map((channel) => (
                  <a
                    key={channel.href}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-primary focus:text-primary"
                  >
                    {channel.label.replace("YouTube ", "")}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer"
              className="text-primary/85 transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          ),
        )}
      </div>
    </aside>
  );
}

function LegalDialog({
  title,
  trigger,
  children,
}: {
  title: string;
  trigger: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger className="label-eyebrow transition-colors hover:text-foreground">
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-h-[85svh] max-w-3xl overflow-y-auto border-border bg-background/95 p-0 backdrop-blur-xl sm:rounded-sm">
        <DialogHeader className="border-b border-border px-6 py-5">
          <p className="label-eyebrow">Rechtliches</p>
          <DialogTitle className="font-display text-3xl font-normal">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 px-6 py-6 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function EmailLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [emailAddress, setEmailAddress] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (emailAddress) {
      return;
    }

    event.preventDefault();
    setEmailAddress(getEmailAddress());
  };

  return (
    <a
      className={className}
      href={emailAddress ? `mailto:${emailAddress}` : "#email-anzeigen"}
      onClick={handleClick}
      data-contact="email"
    >
      {children ?? emailAddress ?? "E-Mail-Adresse anzeigen"}
    </a>
  );
}

function ImprintContent() {
  return (
    <>
      <div>
        <h3 className="text-lg text-foreground">Angaben gemäß § 5 TMG</h3>
        <p className="mt-3">
          Bamdad Esmaili
          <br />
          Journalist, Reporter und Moderator
          <br />
          c/o Autorenglück #44926
          <br />
          Albert-Einstein-Straße 47
          <br />
          02977 Hoyerswerda
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Kontakt</h3>
        <p className="mt-3">
          E-Mail:{" "}
          <EmailLink className="text-primary hover:underline" />
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Bildnachweise</h3>
        <p className="mt-3">Einige Bilder auf dieser Website stammen von Raha Darvishpour.</p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Verantwortlich für den Inhalt</h3>
        <p className="mt-3">
          Bamdad Esmaili
          <br />
          Journalist, Reporter und Moderator
          <br />
          Anschrift wie oben
        </p>
      </div>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <div>
        <h3 className="text-lg text-foreground">Verantwortlicher</h3>
        <p className="mt-3">
          Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist Bamdad
          Esmaili. Kontakt per E-Mail:{" "}
          <EmailLink className="text-primary hover:underline" />
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Keine Cookies und kein Tracking</h3>
        <p className="mt-3">
          Diese Website setzt keine Cookies, verwendet kein Tracking, keine Analytics-Tools, keine
          Werbenetzwerke und keine Social-Media-Pixel. Es werden keine Einwilligungsbanner benötigt,
          solange keine solchen Dienste nachträglich eingebunden werden.
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Zugriffsdaten</h3>
        <p className="mt-3">
          Beim Aufruf dieser Website können durch den Hosting-Anbieter technisch erforderliche
          Server-Logdaten verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit des Abrufs,
          aufgerufene Seite, Browsertyp und Betriebssystem. Die Verarbeitung dient ausschließlich
          der sicheren und stabilen Bereitstellung der Website.
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Kontaktaufnahme</h3>
        <p className="mt-3">
          Wenn Sie per E-Mail Kontakt aufnehmen, werden die übermittelten Angaben zur Bearbeitung
          der Anfrage verarbeitet. Diese Daten werden nicht ohne Einwilligung an Dritte
          weitergegeben.
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Keine eingebundenen Drittanbieter</h3>
        <p className="mt-3">
          Bilder, Schriften und sonstige statische Inhalte werden lokal von dieser Website
          ausgeliefert. Es werden keine externen Schriftanbieter, Karten, Videos, Kommentar-Dienste
          oder Social-Media-Widgets eingebunden.
        </p>
        <p className="mt-3">
          Einige der auf dieser Website verwendeten Bilder stammen von Raha Darvishpour.
        </p>
      </div>
      <div>
        <h3 className="text-lg text-foreground">Ihre Rechte</h3>
        <p className="mt-3">
          Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die
          Verarbeitung personenbezogener Daten.
        </p>
      </div>
    </>
  );
}
