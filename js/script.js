(() => {
    const stage = document.querySelector("[data-hero-stage]");
    const header = document.querySelector(".home-page > header") || document.querySelector("header");

    if (!stage) {
        return;
    }

    const root = document.documentElement;
    const homePage = document.querySelector(".home-page") || document.body;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stageTop = 0;
    let stageHeight = 0;
    let viewportHeight = 0;
    let ticking = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const smoothstep = (value) => value * value * (3 - 2 * value);

    const setStageValue = (name, value) => {
        stage.style.setProperty(name, value);
    };

    const setStaticHero = () => {
        setStageValue("--hero-progress", "0");
        setStageValue("--hero-headline-scale", "1");
        setStageValue("--hero-visual-scale", "1");
        setStageValue("--hero-visual-x", "0px");
        setStageValue("--hero-visual-y", "0px");
        setStageValue("--hero-grid-opacity", "1");
        setStageValue("--hero-glow-opacity", "1");
        setStageValue("--hero-cta-y", "0px");
    };

    const measure = () => {
        const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
        const rect = stage.getBoundingClientRect();

        root.style.setProperty("--home-header-height", `${headerHeight}px`);
        homePage.style.setProperty("--home-header-height", `${headerHeight}px`);
        stageTop = rect.top + window.scrollY;
        stageHeight = stage.offsetHeight;
        viewportHeight = window.innerHeight || root.clientHeight || 1;
    };

    const updateHero = () => {
        ticking = false;

        if (reduceMotion.matches) {
            setStaticHero();
            return;
        }

        const scrollDistance = Math.max(1, stageHeight - viewportHeight);
        const rawProgress = clamp((window.scrollY - stageTop) / scrollDistance, 0, 1);
        const progress = smoothstep(rawProgress);
        const isCompact = window.innerWidth <= 620;

        const headlineScale = isCompact ? 1 - progress * 0.035 : 1 - progress * 0.08;
        const visualScale = isCompact ? 1 - progress * 0.2 : 1 - progress * 0.1;
        const visualX = isCompact ? progress * 18 : progress * 48;
        const visualY = isCompact ? progress * -22 : progress * -36;
        const ctaY = isCompact ? progress * -5 : progress * -12;
        const gridOpacity = isCompact ? 1 - progress * 0.45 : 1 - progress * 0.32;
        const glowOpacity = 1 - progress * 0.26;

        setStageValue("--hero-progress", progress.toFixed(4));
        setStageValue("--hero-headline-scale", headlineScale.toFixed(4));
        setStageValue("--hero-visual-scale", visualScale.toFixed(4));
        setStageValue("--hero-visual-x", `${visualX.toFixed(2)}px`);
        setStageValue("--hero-visual-y", `${visualY.toFixed(2)}px`);
        setStageValue("--hero-grid-opacity", gridOpacity.toFixed(4));
        setStageValue("--hero-glow-opacity", glowOpacity.toFixed(4));
        setStageValue("--hero-cta-y", `${ctaY.toFixed(2)}px`);
    };

    const requestUpdate = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(updateHero);
    };

    const refresh = () => {
        measure();
        requestUpdate();
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    window.addEventListener("load", refresh, { passive: true });

    if (typeof reduceMotion.addEventListener === "function") {
        reduceMotion.addEventListener("change", refresh);
    } else if (typeof reduceMotion.addListener === "function") {
        reduceMotion.addListener(refresh);
    }

    refresh();
})();
