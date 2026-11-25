import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export function usePremiumMotion(scope: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    if (!scope.current) return;

    const media = gsap.matchMedia();
    const refresh = () => ScrollTrigger.refresh();
    const refreshFrame = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh, { once: true });

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const headings = gsap.utils.toArray<HTMLElement>(
          ".intro-panel h1, .section-heading h2, .accreditation-copy h2, .testing-content > h2, .portal-copy h2, .conversation-inner h2, .faq-heading h2",
        );

        headings.forEach((heading, index) => {
          gsap.fromTo(
            heading,
            { autoAlpha: 0, y: index % 2 === 0 ? 34 : 26, clipPath: "inset(0 0 18% 0)" },
            {
              autoAlpha: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 0.82,
              ease: EASE,
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                once: true,
              },
              onComplete: () => gsap.set(heading, { clearProps: "opacity,visibility,transform,clipPath" }),
            },
          );
        });

        const supportingCopy = gsap.utils.toArray<HTMLElement>(
          ".intro-panel > p, .split-heading > p, .accreditation-block, .portal-copy > p, .conversation-inner > div:last-child",
        );

        supportingCopy.forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              delay: Math.min(index * 0.035, 0.16),
              ease: EASE,
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
              onComplete: () => gsap.set(element, { clearProps: "opacity,visibility,transform" }),
            },
          );
        });

        const cards = gsap.utils.toArray<HTMLElement>(".value-card-wrap");
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 30 + (index % 2) * 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              delay: (index % 2) * 0.09,
              ease: EASE,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
              onComplete: () => gsap.set(card, { clearProps: "opacity,visibility,transform" }),
            },
          );
        });

        const imageReveals = gsap.utils.toArray<HTMLElement>(".image-reveal");
        imageReveals.forEach((frame, index) => {
          const image = frame.querySelector("img");
          const direction = index % 2 === 0 ? "0 0 100% 0" : "0 100% 0 0";

          gsap.fromTo(
            frame,
            { clipPath: `inset(${direction})` },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 0.92,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: frame,
                start: "top 88%",
                once: true,
              },
              onComplete: () => gsap.set(frame, { clearProps: "clipPath" }),
            },
          );

          if (image) {
            gsap.fromTo(
              image,
              { scale: 1.09 },
              {
                scale: 1,
                duration: 1.15,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: frame,
                  start: "top 88%",
                  once: true,
                },
                onComplete: () => gsap.set(image, { clearProps: "transform" }),
              },
            );
          }
        });

        const hero = scope.current?.querySelector<HTMLElement>(".hero");
        if (hero) {
          gsap.to(".hero-media", {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.9,
            },
          });

          gsap.to(".hero-content", {
            yPercent: 16,
            autoAlpha: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        const parallaxImages = gsap.utils.toArray<HTMLElement>(".parallax-media img");
        parallaxImages.forEach((image) => {
          gsap.fromTo(
            image,
            { yPercent: -4, scale: 1.06 },
            {
              yPercent: 4,
              scale: 1.06,
              ease: "none",
              scrollTrigger: {
                trigger: image.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });

        gsap.to(".conversation-orb-one", {
          xPercent: 18,
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: ".conversation-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".conversation-orb-two", {
          xPercent: -14,
          yPercent: 16,
          ease: "none",
          scrollTrigger: {
            trigger: ".conversation-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }, scope);

      ScrollTrigger.refresh();
      return () => context.revert();
    });

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        ".intro-panel h1, .section-heading h2, .accreditation-copy h2, .testing-content > h2, .portal-copy h2, .conversation-inner h2, .faq-heading h2, .value-card-wrap, .image-reveal",
        { clearProps: "all" },
      );
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", refresh);
      media.revert();
    };
  }, [scope]);
}
