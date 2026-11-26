import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  X,
} from "lucide-react";
import {
  faqs,
  heroSlides,
  navigation,
  sectors,
  serviceValues,
  testingServices,
} from "./content";
import { usePremiumMotion } from "./usePremiumMotion";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal is-visible ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<number | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpen = useRef(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      window.requestAnimationFrame(() => menuCloseRef.current?.focus());
      document.addEventListener("keydown", handleEscape);
    } else if (wasMenuOpen.current) {
      menuToggleRef.current?.focus();
    }

    wasMenuOpen.current = menuOpen;

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Virologica home">
          <img src="/images/logo.png" alt="Virologica" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <div className={item.children ? "nav-group has-children" : "nav-group"} key={item.label}>
              <a href={item.href}>
                {item.label}
                {item.children && <ChevronDown size={14} aria-hidden="true" />}
              </a>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <a href={child.href} key={child.label}>
                      {child.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-link" href="https://portal.virologica.co.uk/tickets-view">
            Customer Portal
          </a>
          <a className="button button-small" href="https://meetings-eu1.hubspot.com/laura-sellars">
            Book a Consultation
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          ref={menuToggleRef}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu />
        </button>
      </div>

      <button
        className={`mobile-menu-backdrop ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-header">
          <a href="#top" aria-label="Virologica home" onClick={closeMenu}>
            <img src="/images/logo.png" alt="Virologica" />
          </a>
          <button
            className="mobile-menu-close"
            type="button"
            ref={menuCloseRef}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => {
            const submenuOpen = openMobileGroup === index;
            return (
              <div
                className="mobile-nav-group"
                style={{ "--menu-index": index } as React.CSSProperties}
                key={item.label}
              >
                <div className="mobile-nav-row">
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`${submenuOpen ? "Close" : "Open"} ${item.label} submenu`}
                      aria-expanded={submenuOpen}
                      onClick={() => setOpenMobileGroup(submenuOpen ? null : index)}
                    >
                      <ChevronDown aria-hidden="true" />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div className={`mobile-subnav ${submenuOpen ? "is-open" : ""}`} aria-hidden={!submenuOpen}>
                    <div>
                      {item.children.map((child) => (
                        <a href={child.href} onClick={closeMenu} key={child.label}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-actions">
            <a href="https://portal.virologica.co.uk/tickets-view" onClick={closeMenu}>
              Customer portal
            </a>
            <a href="https://meetings-eu1.hubspot.com/laura-sellars" onClick={closeMenu}>
              Book a consultation <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="https://virologica.co.uk/contact/" onClick={closeMenu}>
              Contact us
            </a>
          </div>
          <div className="mobile-social">
            <span>Connect with us</span>
            <a href="https://www.linkedin.com/company/virologica-ltd/" aria-label="Virologica on LinkedIn">
              <Linkedin aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}

function HeroWave({ id }: { id: string }) {
  const wave =
    "M-80 162 C120 34 292 44 458 137 C646 242 792 20 982 94 C1168 166 1294 213 1520 34";
  const crossingWave =
    "M-60 64 C174 220 360 18 586 138 C790 247 930 22 1134 118 C1306 198 1400 202 1520 106";

  return (
    <div className="hero-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`${id}-stroke`} x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="0.45" stopColor="#d500f9" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d500f9" stopOpacity="0.26" />
            <stop offset="1" stopColor="#241447" stopOpacity="0" />
          </linearGradient>
          <pattern id={`${id}-dots`} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.15" fill="#ffffff" fillOpacity="0.42" />
          </pattern>
        </defs>

        <path d={`${wave} L1520 280 L-80 280 Z`} fill={`url(#${id}-fill)`} />
        <path d={`${crossingWave} L1520 280 L-80 280 Z`} fill={`url(#${id}-dots)`} opacity="0.42" />
        <g fill="none" vectorEffect="non-scaling-stroke">
          <path d={wave} stroke={`url(#${id}-stroke)`} strokeWidth="3" />
          <path d={crossingWave} stroke="rgba(255,255,255,0.52)" strokeWidth="1.5" />
          <path d={wave} stroke="rgba(213,0,249,0.34)" strokeWidth="12" opacity="0.4" />
          <path d={crossingWave} stroke="rgba(255,255,255,0.13)" strokeWidth="15" opacity="0.34" />
        </g>
      </svg>
    </div>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      heroSlides.map(
        (slide) =>
          new Promise<void>((resolve) => {
            const image = new Image();
            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = slide.image;
            if (image.complete) resolve();
          }),
      ),
    ).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!imagesReady) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % heroSlides.length),
      6500,
    );
    return () => window.clearInterval(interval);
  }, [imagesReady]);

  return (
    <section
      className={`hero ${imagesReady ? "images-ready" : ""}`}
      aria-label="Featured testing services"
      style={{ backgroundImage: `url(${heroSlides[0].image})` }}
    >
      {heroSlides.map((slide, index) => (
        <article
          className={`hero-slide ${index === activeSlide ? "is-active" : ""}`}
          aria-hidden={index !== activeSlide}
          key={slide.title}
        >
          <div className="hero-media">
            <img
              src={slide.image}
              alt={slide.alt}
              loading="eager"
              decoding="async"
            />
            <div className="hero-wash" />
          </div>
          <HeroWave id={`hero-wave-${index}`} />
          <div className="container hero-content">
            <div className="hero-copy">
              <h2 aria-label={slide.title}>
                {slide.title.split(" ").map((word, wordIndex) => (
                  <span className="hero-word-mask" aria-hidden="true" key={`${word}-${wordIndex}`}>
                    <span
                      className="hero-word"
                      style={{ "--word-index": wordIndex } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h2>
              <p className="hero-support">{slide.text}</p>
              <a
                className="button button-light hero-cta"
                href={slide.href}
                tabIndex={index === activeSlide ? 0 : -1}
              >
                Learn More <span className="sr-only">about {slide.title}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      ))}

      <div className="hero-pagination" aria-label="Choose a hero slide">
        {heroSlides.map((slide, index) => (
          <button
            type="button"
            className={index === activeSlide ? "is-active" : ""}
            aria-label={`Show ${slide.title}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            key={slide.title}
          >
            <span />
          </button>
        ))}
      </div>

    </section>
  );
}

function IntroAndValues() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const handleCardClick = (index: number) => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      toggleCard(index);
    }
  };

  return (
    <section className="intro-section" id="introduction">
      <div className="container">
        <Reveal className="intro-panel">
          <div>
            <span className="eyebrow">Virologica</span>
            <h1>Trusted Viral &amp; Microbiology Testing Services in the UK</h1>
          </div>
          <p>Providing customised lab testing and expert viral testing services</p>
        </Reveal>

        <div className="value-grid">
          {serviceValues.map((item, index) => (
            <Reveal className={`value-card-wrap value-card-${index + 1}`} delay={index * 80} key={item.title}>
              <article
                className={`value-card ${flippedCards.includes(index) ? "is-flipped" : ""}`}
                role="button"
                tabIndex={0}
                aria-pressed={flippedCards.includes(index)}
                aria-label={`${flippedCards.includes(index) ? "Show image for" : "Show details for"} ${item.title}`}
                onClick={() => handleCardClick(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleCard(index);
                  }
                }}
              >
                <div className="value-card-inner">
                  <div className="value-card-face value-card-front value-card-image-face" aria-hidden="true">
                    <img src={item.image} alt="" loading="eager" decoding="async" />
                    <span className="value-card-overlay" />
                    <div className="value-card-image-copy">
                      <span>0{index + 1}</span>
                      <strong>{item.title}</strong>
                    </div>
                  </div>
                  <div className="value-card-face value-card-back value-card-text-face">
                    <span className="card-index">0{index + 1}</span>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const [activeSector, setActiveSector] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationFrame = 0;
    const updateActiveSector = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const panels = [...gallery.querySelectorAll<HTMLElement>(".sector-panel-wrap")];
        const nearest = panels.reduce(
          (result, panel, index) => {
            const distance = Math.abs(panel.offsetLeft - gallery.offsetLeft - gallery.scrollLeft);
            return distance < result.distance ? { index, distance } : result;
          },
          { index: 0, distance: Number.POSITIVE_INFINITY },
        );
        setActiveSector(nearest.index);
      });
    };

    gallery.addEventListener("scroll", updateActiveSector, { passive: true });
    return () => {
      gallery.removeEventListener("scroll", updateActiveSector);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const moveSectorSlider = (direction: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const nextIndex = Math.max(0, Math.min(sectors.length - 1, activeSector + direction));
    const panel = gallery.querySelectorAll<HTMLElement>(".sector-panel-wrap")[nextIndex];
    if (!panel) return;

    setActiveSector(nextIndex);
    gallery.scrollTo({
      left: panel.offsetLeft - gallery.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section className="section sectors-section" id="sectors">
      <div className="container">
        <Reveal className="section-heading split-heading">
          <div>
            <span className="eyebrow">Sectors</span>
            <h2>Sectors</h2>
          </div>
          <p>
            Our professional team of specialists provides accurate viral and microbiology testing services,
            delivering reliable results and actionable insights for your research and projects. As a trusted
            testing lab, we ensure high-quality testing standards that help you make informed decisions with
            confidence.
          </p>
        </Reveal>

        <div className="sector-grid sector-gallery" ref={galleryRef}>
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Reveal
                className={`sector-panel-wrap ${activeSector === index ? "is-active" : ""}`}
                delay={index * 70}
                key={sector.title}
              >
                <a
                  className="sector-card"
                  href={sector.href}
                  onMouseEnter={() => setActiveSector(index)}
                  onFocus={() => setActiveSector(index)}
                >
                  <div className="sector-image">
                    <img src={sector.image} alt="" loading="eager" decoding="async" />
                    <span className="sector-icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="sector-copy">
                    <span className="card-index">0{index + 1}</span>
                    <h3>{sector.title}</h3>
                    <p>{sector.text}</p>
                    <span className="text-link" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
        <div className="sector-slider-controls" aria-label="Sector slider controls">
          <button
            type="button"
            aria-label="Previous sector"
            disabled={activeSector === 0}
            onClick={() => moveSectorSlider(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="sector-slider-progress" aria-hidden="true">
            <span
              style={{
                width: `${100 / sectors.length}%`,
                transform: `translateX(${activeSector * 100}%)`,
              }}
            />
          </div>
          <span className="sector-slider-count">
            0{activeSector + 1} <i>/</i> 0{sectors.length}
          </span>
          <button
            type="button"
            aria-label="Next sector"
            disabled={activeSector === sectors.length - 1}
            onClick={() => moveSectorSlider(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Accreditation() {
  return (
    <section className="section accreditation-section">
      <div className="accreditation-bg" aria-hidden="true" />
      <div className="container accreditation-grid">
        <Reveal className="accreditation-copy">
          <span className="eyebrow eyebrow-light">Accreditation</span>
          <h2>ISO/IEC 17025 Accreditation</h2>
          <div className="accreditation-block">
            <h3>Our accredited methods</h3>
            <p>
              Virologica has received ISO 17025 accreditations from UKAS within the scope of ISO 18184
              antiviral antiviral activity of textiles and ASTM D7907 bactericidal activity of medical gloves
              . We are the only company in the UK to hold a UKAS accreditation for these methods.
            </p>
          </div>
          <div className="accreditation-block">
            <h3>What does ISO/IEC 17025 mean for my test?</h3>
            <p>
              For our ISO/IEC 17025 accreditation, we undergo annual audits to check the competence of our
              test methods, quality management system, recording and reporting alongside the calibration and
              maintenance of our equipment.
            </p>
          </div>
        </Reveal>

        <Reveal className="accreditation-mark image-reveal" delay={160}>
          <div className="mark-ring">
            <BadgeCheck aria-hidden="true" />
          </div>
          <img
            src="/images/accreditation.svg"
            alt="Accreditation Symbol Testing ILAC UKAS - ISO 17025 accredited lab - Virologica"
            loading="eager"
          />
        </Reveal>
      </div>
    </section>
  );
}

function TestingServices() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="section testing-section" id="testing-services">
      <div className="container testing-grid">
        <Reveal className="testing-image image-reveal parallax-media">
          <img
            src="/images/testing-services.jpg"
            alt="Professional laboratory testing services: A technician conducting a detailed microscopic analysis of a specimen for quality control - Virologica"
            loading="eager"
          />
          <span className="testing-image-label">Testing Services</span>
        </Reveal>

        <Reveal className="testing-content" delay={120}>
          <span className="eyebrow">Testing Services</span>
          <h2>Testing Services</h2>
          <div className="service-tabs" role="tablist" aria-label="Testing Services">
            {testingServices.map((item, index) => {
              const isActive = activeService === index;
              return (
                <div className={`service-tab-item ${isActive ? "is-active" : ""}`} key={item.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${item.id}`}
                    onClick={() => setActiveService(index)}
                  >
                    <span className="service-tab-number">0{index + 1}</span>
                    <strong>{item.label}</strong>
                  </button>
                  <div
                    className="service-tab-description"
                    id={`service-panel-${item.id}`}
                    role="tabpanel"
                    aria-hidden={!isActive}
                  >
                    <div>
                      <p>{item.text}</p>
                      <a href={item.href} tabIndex={isActive ? 0 : -1}>
                        Learn More <span className="sr-only">about {item.label}</span>
                        <ArrowRight size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <a className="button button-outline testing-view-all" href="https://virologica.co.uk/testing-services">
            View All <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const swipeStart = useRef<number | null>(null);
  const testimonialCount = 3;

  const moveTestimonial = (direction: number) => {
    setActiveTestimonial((current) => (current + direction + testimonialCount) % testimonialCount);
  };

  return (
    <section className="testimonial-section" aria-label="What Our Customers Say">
      <div className="container testimonial-heading">
        <span className="eyebrow">Testimonials</span>
        <h2>
          What <span>Our Customers</span> Say
        </h2>
      </div>

      <div
        className="testimonial-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        onTouchStart={(event) => {
          swipeStart.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (swipeStart.current === null) return;
          const distance = (event.changedTouches[0]?.clientX ?? swipeStart.current) - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(distance) < 45) return;
          moveTestimonial(distance < 0 ? 1 : -1);
        }}
      >
        <button
          className="testimonial-arrow testimonial-arrow-prev"
          type="button"
          aria-label="Previous testimonial"
          onClick={() => moveTestimonial(-1)}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className="testimonial-stage">
          {Array.from({ length: testimonialCount }, (_, index) => {
            let offset = index - activeTestimonial;
            if (offset > 1) offset -= testimonialCount;
            if (offset < -1) offset += testimonialCount;
            const isActive = offset === 0;

            return (
              <article
                className={`testimonial-slide ${isActive ? "is-active" : ""}`}
                style={
                  {
                    "--testimonial-offset": `${offset * 82}%`,
                    "--testimonial-order": Math.abs(offset),
                  } as React.CSSProperties
                }
                aria-hidden={!isActive}
                key={index}
              >
                <Quote className="quote-icon" aria-hidden="true" />
                <blockquote>
                  “Virologica delivers expert microbiology services that drive our antimicrobial innovation.
                  Their specialised knowledge and reliable support have been key to our success. We truly
                  appreciate their excellent service and expertise.”
                </blockquote>
                <p className="testimonial-source">Scientist, UK R&amp;D Business</p>
              </article>
            );
          })}
        </div>

        <button
          className="testimonial-arrow testimonial-arrow-next"
          type="button"
          aria-label="Next testimonial"
          onClick={() => moveTestimonial(1)}
        >
          <ChevronRight aria-hidden="true" />
        </button>

        <div className="testimonial-dots" aria-label="Choose a testimonial">
          {Array.from({ length: testimonialCount }, (_, index) => (
            <button
              type="button"
              className={activeTestimonial === index ? "is-active" : ""}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeTestimonial === index}
              onClick={() => setActiveTestimonial(index)}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerPortal() {
  const items = ["Enquiring about a test", "Receiving quotes", "Logging in test items", "Receiving reports"];

  return (
    <section className="section portal-section">
      <div className="container portal-grid">
        <Reveal className="portal-copy">
          <span className="eyebrow eyebrow-light">Customer Portal</span>
          <h2>Customer Portal</h2>
          <p>Every aspect of your project can be managed through our customer portal:</p>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a className="button button-light" href="https://portal.virologica.co.uk/tickets-view">
            Customer Login <ExternalLink size={17} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="portal-image image-reveal parallax-media" delay={120}>
          <img src="/images/customer-portal.jpg" alt="" loading="eager" decoding="async" />
        </Reveal>
      </div>
    </section>
  );
}

function Conversation() {
  return (
    <section className="conversation-section">
      <div className="conversation-orb conversation-orb-one" aria-hidden="true" />
      <div className="conversation-orb conversation-orb-two" aria-hidden="true" />
      <Reveal className="container conversation-inner">
        <div>
          <span className="eyebrow eyebrow-light">Start The Conversation</span>
          <h2>Start The Conversation</h2>
        </div>
        <div>
          <p>Contact us today to explore how we can support you with your next project.</p>
          <a className="button button-light" href="https://virologica.co.uk/contact">
            Get a Fast Quote <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <Reveal className="faq-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Question</h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openQuestion === index;
            return (
              <Reveal delay={index * 35} key={faq.question}>
                <div className={`faq-item ${open ? "is-open" : ""}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenQuestion(open ? -1 : index)}
                  >
                    <span className="faq-number">0{index + 1}</span>
                    <span>{faq.question}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`}>
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" aria-label="Virologica home">
            <img src="/images/logo.png" alt="Virologica" />
          </a>
          <a href="mailto:info@virologica.co.uk">
            <Mail aria-hidden="true" /> info@virologica.co.uk
          </a>
          <a href="tel:01925909090">
            <Phone aria-hidden="true" /> 01925 909090
          </a>
        </div>

        <div className="footer-address">
          <h2>Head office</h2>
          <p>
            <MapPin aria-hidden="true" />
            <span>
              Unit 14 Daresbury Court,
              <br />
              Evenwood Close,
              <br />
              Runcorn WA7 1LZ
            </span>
          </p>
        </div>

        <div className="footer-accreditation">
          <img
            src="/images/accreditation.svg"
            alt="Accreditation Symbol Testing ILAC UKAS - ISO 17025 accredited lab - Virologica"
            loading="eager"
          />
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Virologica. All rights reserved.</p>
        <nav aria-label="Legal and social links">
          <a href="https://virologica.co.uk/privacy-policy">Privacy policy</a>
          <a href="https://virologica.co.uk/cookie-policy">Cookie policy</a>
          <span>Quality policy</span>
          <a className="linkedin-link" href="https://www.linkedin.com/company/virologica-ltd/" aria-label="Linkedin">
            <Linkedin aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  usePremiumMotion(pageRef);

  return (
    <div id="top" ref={pageRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <IntroAndValues />
        <Sectors />
        <Accreditation />
        <TestingServices />
        <Testimonial />
        <CustomerPortal />
        <Conversation />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </div>
  );
}
