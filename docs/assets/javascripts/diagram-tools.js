(function () {
  var activeViewer = null;
  var activeZoom = 1;
  var activeBaseWidth = 0;

  function createButton(label, className) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = label;
    return button;
  }

  function diagramTitle(diagram) {
    var heading = diagram.closest(".md-content__inner");
    var current = diagram.previousElementSibling;

    while (current) {
      if (/^H[1-6]$/.test(current.tagName)) {
        return current.textContent.replace("¶", "").trim();
      }
      current = current.previousElementSibling;
    }

    if (heading) {
      var firstHeading = heading.querySelector("h1");
      if (firstHeading) {
        return firstHeading.textContent.replace("¶", "").trim();
      }
    }

    return "Mermaid diagram";
  }

  function getSvgWidth(svg) {
    if (!svg) {
      return 0;
    }

    var viewBox = svg.getAttribute("viewBox");
    if (viewBox) {
      var parts = viewBox.split(/\s+/).map(Number);
      if (parts.length === 4 && parts[2] > 0) {
        return parts[2];
      }
    }

    var width = parseFloat(svg.getAttribute("width"));
    if (width > 0) {
      return width;
    }

    return svg.getBoundingClientRect().width;
  }

  function getImageWidth(image) {
    if (!image) {
      return 0;
    }

    return Math.max(image.naturalWidth || 0, image.getBoundingClientRect().width || 0);
  }

  function getViewerGraphic() {
    if (!activeViewer) {
      return null;
    }

    return activeViewer.querySelector(".diagram-viewer__body svg, .diagram-viewer__body img");
  }

  function applyZoom() {
    if (!activeViewer) {
      return;
    }

    var graphic = getViewerGraphic();
    if (!graphic) {
      return;
    }

    graphic.style.width = Math.round(activeBaseWidth * activeZoom) + "px";
    graphic.style.maxWidth = "none";
    graphic.style.height = "auto";

    var reset = activeViewer.querySelector("[data-diagram-reset]");
    if (reset) {
      reset.textContent = Math.round(activeZoom * 100) + "%";
    }
  }

  function setZoom(zoom) {
    activeZoom = Math.max(0.35, Math.min(zoom, 3));
    applyZoom();
  }

  function fitToWidth() {
    if (!activeViewer || !activeBaseWidth) {
      return;
    }

    var body = activeViewer.querySelector(".diagram-viewer__body");
    var available = Math.max(body.clientWidth - 64, 240);
    setZoom(Math.min(2, available / activeBaseWidth));
  }

  function closeViewer() {
    if (!activeViewer) {
      return;
    }

    activeViewer.classList.remove("is-open");
    activeViewer.setAttribute("aria-hidden", "true");
    activeViewer.querySelector(".diagram-viewer__body").replaceChildren();
    document.body.classList.remove("diagram-viewer-open");
    activeViewer = null;
  }

  function ensureViewer() {
    var existing = document.querySelector(".diagram-viewer");
    if (existing) {
      return existing;
    }

    var viewer = document.createElement("div");
    viewer.className = "diagram-viewer";
    viewer.setAttribute("aria-hidden", "true");
    viewer.innerHTML = [
      '<div class="diagram-viewer__panel" role="dialog" aria-modal="true" aria-label="图表查看器">',
      '  <div class="diagram-viewer__toolbar">',
      '    <div class="diagram-viewer__title"></div>',
      '    <button type="button" class="diagram-viewer__button" data-diagram-fit>适合宽度</button>',
      '    <button type="button" class="diagram-viewer__button" data-diagram-zoom-out>缩小</button>',
      '    <button type="button" class="diagram-viewer__button" data-diagram-reset>100%</button>',
      '    <button type="button" class="diagram-viewer__button" data-diagram-zoom-in>放大</button>',
      '    <button type="button" class="diagram-viewer__button" data-diagram-close>关闭</button>',
      "  </div>",
      '  <div class="diagram-viewer__body" tabindex="0"></div>',
      "</div>"
    ].join("");

    viewer.addEventListener("click", function (event) {
      if (event.target === viewer || event.target.closest("[data-diagram-close]")) {
        closeViewer();
      }
    });

    viewer.querySelector("[data-diagram-zoom-in]").addEventListener("click", function () {
      setZoom(activeZoom + 0.25);
    });

    viewer.querySelector("[data-diagram-zoom-out]").addEventListener("click", function () {
      setZoom(activeZoom - 0.25);
    });

    viewer.querySelector("[data-diagram-reset]").addEventListener("click", function () {
      setZoom(1);
    });

    viewer.querySelector("[data-diagram-fit]").addEventListener("click", function () {
      fitToWidth();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeViewer();
      }
    });

    document.body.appendChild(viewer);
    return viewer;
  }

  function openViewer(diagram, options) {
    var settings = options || {};
    var viewer = ensureViewer();
    var clone = diagram.cloneNode(true);
    var sourceSvg = diagram.querySelector("svg");
    var sourceImage = diagram.matches && diagram.matches("img") ? diagram : diagram.querySelector("img");
    var clonedSvg = clone.querySelector("svg");
    var clonedImage = clone.matches && clone.matches("img") ? clone : clone.querySelector("img");
    var body = viewer.querySelector(".diagram-viewer__body");
    var title = settings.title || diagramTitle(diagram);

    activeBaseWidth = Math.max(
      getSvgWidth(sourceSvg),
      getImageWidth(sourceImage),
      sourceSvg ? sourceSvg.getBoundingClientRect().width : 0,
      settings.minWidth || 1000
    );
    activeZoom = Math.max(1, Math.min(1.35, (window.innerWidth - 96) / activeBaseWidth));

    if (clonedSvg) {
      clonedSvg.removeAttribute("width");
      clonedSvg.removeAttribute("height");
    }

    if (clonedImage) {
      clonedImage.removeAttribute("width");
      clonedImage.removeAttribute("height");
      clonedImage.classList.add("diagram-viewer__image");
    }

    viewer.querySelector(".diagram-viewer__title").textContent = title;
    body.replaceChildren(clone);
    activeViewer = viewer;
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("diagram-viewer-open");
    setZoom(1);
    if (activeBaseWidth > body.clientWidth * 1.15) {
      fitToWidth();
    }
    body.focus();
  }

  function enhanceDiagrams() {
    document.querySelectorAll(".md-typeset .mermaid").forEach(function (diagram) {
      if (diagram.closest(".diagram-frame") || diagram.closest(".diagram-viewer")) {
        return;
      }

      var frame = document.createElement("figure");
      frame.className = "diagram-frame";

      var actions = document.createElement("figcaption");
      actions.className = "diagram-actions";

      var expand = createButton("放大查看", "diagram-button");
      expand.setAttribute("aria-label", "放大查看图表");
      expand.addEventListener("click", function () {
        openViewer(diagram);
      });

      actions.appendChild(expand);
      diagram.parentNode.insertBefore(frame, diagram);
      frame.appendChild(actions);
      frame.appendChild(diagram);
    });
  }

  function enhanceSvgImages() {
    document.querySelectorAll(".md-typeset img[src$='.svg'], .md-typeset img[src*='.svg?']").forEach(function (image) {
      if (image.closest(".diagram-frame") || image.closest(".diagram-viewer")) {
        return;
      }

      var parent = image.parentElement;
      var frame = document.createElement("figure");
      var actions = document.createElement("figcaption");
      var expand = createButton("放大查看", "diagram-button");
      var title = image.getAttribute("alt") || "SVG 图表";

      frame.className = "diagram-frame diagram-frame--svg";
      actions.className = "diagram-actions";
      expand.setAttribute("aria-label", "放大查看 SVG 图表");
      expand.addEventListener("click", function () {
        openViewer(image, {
          title: title,
          minWidth: 1200
        });
      });

      actions.appendChild(expand);

      if (parent && parent.tagName === "P" && parent.childElementCount === 1 && parent.textContent.trim() === "") {
        parent.parentNode.insertBefore(frame, parent);
        frame.appendChild(actions);
        frame.appendChild(image);
        parent.remove();
      } else {
        image.parentNode.insertBefore(frame, image);
        frame.appendChild(actions);
        frame.appendChild(image);
      }
    });
  }

  function scheduleEnhance() {
    window.setTimeout(function () {
      enhanceDiagrams();
      enhanceSvgImages();
    }, 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleEnhance);
  } else {
    scheduleEnhance();
  }

  window.addEventListener("mermaid:rendered", scheduleEnhance);

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(scheduleEnhance);
  }
})();
