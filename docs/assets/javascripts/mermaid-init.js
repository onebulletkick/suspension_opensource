(function () {
  async function renderMermaid() {
    if (!window.mermaid) {
      return;
    }

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict"
    });

    await window.mermaid.run({
      querySelector: ".mermaid:not([data-processed='true'])"
    });

    window.dispatchEvent(new CustomEvent("mermaid:rendered"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMermaid);
  } else {
    renderMermaid();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(renderMermaid);
  }
})();
