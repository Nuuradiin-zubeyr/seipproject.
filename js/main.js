(function () {
  "use strict";

  var footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  var PROJECT_COMPONENT_CARDS = [
    { description: "Project Management", href: "#" },
    { description: "Access to Quality TVET Training", href: "#" },
    { description: "Entrepreneurship Development", href: "#" }
  ];

  function renderProjectCards() {
    var root = document.getElementById("project-cards");
    if (!root) return;

    var titleText = "Project component";

    PROJECT_COMPONENT_CARDS.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "project-card";

      var h3 = document.createElement("h3");
      h3.className = "project-card-title";
      h3.textContent = titleText;

      var p = document.createElement("p");
      p.className = "project-card-desc";
      p.textContent = item.description;

      var a = document.createElement("a");
      a.className = "project-card-btn";
      a.href = item.href;
      a.textContent = "Read More";

      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(a);
      root.appendChild(li);
    });
  }

  renderProjectCards();

  function initHomeBannerSlider() {
    var slides = document.querySelectorAll(".hero-banner .hero-banner-img--slide");
    if (!slides || slides.length < 2) return;

    var current = 0;

    function setSlide(next) {
      slides[current].classList.remove("is-active");
      slides[next].classList.add("is-active");
      current = next;
    }

    window.setInterval(function () {
      var next = (current + 1) % slides.length;
      setSlide(next);
    }, 3000);
  }

  initHomeBannerSlider();

  function initHomeFacebookVideoLinks() {
    var nodes = document.querySelectorAll("[data-fb-video-url]");
    if (!nodes || !nodes.length) return;

    var modal = document.getElementById("fb-video-modal");
    var iframe = document.getElementById("fb-video-iframe");
    var lastActive = null;
    if (!modal || !iframe) return;

    function youtubeIdFromUrl(url) {
      if (!url) return "";
      var m = String(url).match(/youtu\.be\/([A-Za-z0-9_-]{6,})/i);
      if (m && m[1]) return m[1];
      m = String(url).match(/[?&]v=([A-Za-z0-9_-]{6,})/i);
      if (m && m[1]) return m[1];
      return "";
    }

    function embedUrl(rawUrl) {
      var url = String(rawUrl || "").trim();
      if (!url) return "";

      if (/youtu\.be|youtube\.com/i.test(url)) {
        var id = youtubeIdFromUrl(url);
        if (!id) return "";
        return "https://www.youtube.com/embed/" + encodeURIComponent(id) + "?autoplay=1";
      }

      return (
        "https://www.facebook.com/plugins/video.php?href=" +
        encodeURIComponent(url) +
        "&show_text=false&autoplay=1"
      );
    }

    function openModal(url, opener) {
      if (!url) return;
      lastActive = opener || null;
      modal.setAttribute("aria-hidden", "false");
      modal.classList.add("is-open");
      iframe.src = embedUrl(url);
      document.body.classList.add("has-modal");
    }

    function closeModal() {
      modal.setAttribute("aria-hidden", "true");
      modal.classList.remove("is-open");
      iframe.src = "";
      document.body.classList.remove("has-modal");
      if (lastActive && lastActive.focus) lastActive.focus();
      lastActive = null;
    }

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var url = (el.getAttribute("data-fb-video-url") || "").trim();
      if (!url || url === "#") continue;

      if (el.tagName && el.tagName.toLowerCase() === "a") {
        el.setAttribute("href", url);
        el.removeAttribute("target");
        el.removeAttribute("rel");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          var u = (this.getAttribute("data-fb-video-url") || "").trim();
          openModal(u, this);
        });
      }
    }

    modal.addEventListener("click", function (e) {
      var t = e.target;
      if (!t) return;
      if (t && t.getAttribute && t.getAttribute("data-fb-video-close") === "true") {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  initHomeFacebookVideoLinks();

  var EVENT_ITEMS = [
    {
      variant: "orange",
      tag: "Steering committee",
      date: "Oct 2024",
      images: [
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.17 (1).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.17.jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.18 (1).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.18 (2).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.18 (3).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.18 (4).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.18.jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.19 (1).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.19 (2).jpeg",
        "images/Steering committee Oct 2024/WhatsApp Image 2026-04-15 at 10.04.19.jpeg"
      ],
      title: "Steering committee meeting",
      description:
        "Project steering committee meeting — key updates, decisions, and coordination.",
      href: "steering-committee-oct-2024.html"
    },
    {
      variant: "dark",
      tag: "Technical committee",
      date: "Oct 2024",
      images: [
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.49.jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.50 (1).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.50 (2).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.50 (3).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.50.jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.51 (1).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.51 (2).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.51 (3).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.51 (4).jpeg",
        "images/Technical committee October 2024/WhatsApp Image 2026-04-15 at 10.05.51.jpeg"
      ],
      title: "Technical committee meeting",
      description:
        "Technical committee meeting — implementation status, milestones, and next steps.",
      href: "technical-committee-oct-2024.html"
    },
    {
      variant: "white",
      tag: "Technical committee",
      date: "May 2025",
      images: [
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.49 (1).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.49 (2).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.49.jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.50 (1).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.50 (2).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.50 (3).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.50 (4).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.50.jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.07.51.jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.41.jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.42 (1).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.42 (2).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.42 (3).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.42.jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.43 (1).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.43 (2).jpeg",
        "images/Technical committee Meeting May 2025/WhatsApp Image 2026-04-15 at 10.11.43.jpeg"
      ],
      title: "Technical committee meeting",
      description:
        "Review of progress and technical actions supporting project delivery.",
      href: "technical-committee-may-2025.html"
    },
    {
      variant: "orange",
      tag: "Steering committee",
      date: "Jun 2025",
      images: [
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.21 (1).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.21.jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.22 (1).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.22 (2).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.22 (3).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.22 (4).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.22.jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.23 (1).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.23 (2).jpeg",
        "images/Steering committee meeting june 2025/WhatsApp Image 2026-04-15 at 10.14.23.jpeg"
      ],
      title: "Steering committee meeting",
      description:
        "Steering-level alignment with partners on priorities and governance.",
      href: "steering-committee-june-2025.html"
    },
    {
      variant: "dark",
      tag: "Technical committee",
      date: "Oct 2025",
      images: [
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.17 (1).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.17 (2).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.17.jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.18 (1).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.18 (2).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.18 (3).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.18 (4).jpeg",
        "images/Technical committee Oct 2025/WhatsApp Image 2026-04-15 at 10.20.18.jpeg"
      ],
      title: "Technical committee meeting",
      description:
        "Technical coordination meeting — monitoring, results, and support actions.",
      href: "technical-committee-oct-2025.html"
    },
    {
      variant: "white",
      tag: "Steering committee",
      date: "Nov 2025",
      images: [
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.42 (1).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.42 (2).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.42.jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.43 (1).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.43 (2).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.43 (3).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.43.jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.44 (1).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.44 (2).jpeg",
        "images/Steering November 2025/WhatsApp Image 2026-04-15 at 10.23.44.jpeg"
      ],
      title: "Steering committee meeting",
      description:
        "Steering committee meeting — strategic review and agreed decisions.",
      href: "steering-november-2025.html"
    }
  ];

  function renderEvents() {
    var root = document.getElementById("events-grid");
    if (!root) return;

    EVENT_ITEMS.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "event-card event-card--" + item.variant;

      var img =
        item && item.images && item.images.length
          ? item.images[Math.floor(Math.random() * item.images.length)]
          : item.image;

      if (img && item.variant !== "solid-dark") {
        var encodedImg = encodeURI(String(img));
        article.style.setProperty("--event-img", 'url("' + encodedImg + '")');
      }

      var inner = document.createElement("div");
      inner.className = "event-card-inner";

      var meta = document.createElement("div");
      meta.className = "event-card-meta";

      if (item.date) {
        var badge = document.createElement("span");
        badge.className = "event-card-badge";
        badge.textContent = item.date;
        meta.appendChild(badge);
      }

      if (item.tag) {
        var tag = document.createElement("span");
        tag.className = "event-card-tag";
        tag.textContent = item.tag;
        meta.appendChild(tag);
      }

      var h3 = document.createElement("h3");
      h3.className = "event-card-title";
      h3.textContent = item.title;

      var p = document.createElement("p");
      p.className = "event-card-desc";
      p.textContent = item.description;

      var a = document.createElement("a");
      a.className = "event-card-more";
      a.href = item.href;
      a.textContent = "View photos";

      inner.appendChild(meta);
      inner.appendChild(h3);
      inner.appendChild(p);
      inner.appendChild(a);
      article.appendChild(inner);
      root.appendChild(article);
    });
  }

  renderEvents();

  var PROGRAM_ITEMS = [
    {
      image: "images/program-entrepreneurship.svg",
      alt: "Entrepreneurship program illustration",
      title: "Entrepreneurship",
      description:
        "This course equips trainees with business development skills, enabling them to create, manage, and grow small businesses successfully."
    },
    {
      image: "images/program-renewable-energy.svg",
      alt: "Renewable energy program illustration",
      title: "Renewable Energy",
      description:
        "Participants learn about solar panel installation and maintenance, promoting access to clean energy and creating job opportunities in the renewable energy sector."
    },
    {
      image: "images/program-ict.svg",
      alt: "ICT program illustration",
      title: "ICT",
      description:
        "The course provides knowledge in web and app development, digital marketing, and content creation, helping youth to build careers in technology and online business."
    },
    {
      image: "images/program-basic-agriculture.svg",
      alt: "Basic agriculture program illustration",
      title: "Basic Agriculture",
      description:
        "Participants gain practical skills in basic agriculture, improving employability and supporting food security through modern, climate-smart practices."
    },
    {
      image: "images/program-plumber.svg",
      alt: "Plumber program illustration",
      title: "Plumber",
      description:
        "Practical plumbing skills covering basic installation, maintenance, fittings, and troubleshooting."
    },
    {
      image: "images/program-carpentry.svg",
      alt: "Carpentry program illustration",
      title: "Carpentry",
      description:
        "Carpentry basics including tool use, measuring, cutting, joining, and safe workshop practices."
    }
  ];

  function renderPrograms() {
    var root = document.getElementById("programs-grid");
    if (!root) return;

    PROGRAM_ITEMS.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "program-card";

      var figure = document.createElement("figure");
      figure.className = "program-card-media";

      var img = document.createElement("img");
      img.src = item.image;
      img.alt = item.alt;
      img.loading = "lazy";
      img.decoding = "async";
      figure.appendChild(img);

      var body = document.createElement("div");
      body.className = "program-card-body";

      var h3 = document.createElement("h3");
      h3.className = "program-card-name";
      h3.textContent = item.title;

      var p = document.createElement("p");
      p.className = "program-card-text";
      if (item.description) {
        p.textContent = item.description;
      }

      var footer = document.createElement("div");
      footer.className = "program-card-footer";
      footer.setAttribute("aria-hidden", "true");
      var line = document.createElement("span");
      line.className = "program-card-footer-line";
      var diamond = document.createElement("span");
      diamond.className = "program-card-diamond";
      footer.appendChild(line);
      footer.appendChild(diamond);

      body.appendChild(h3);
      if (item.bullets && item.bullets.length) {
        var ul = document.createElement("ul");
        ul.className = "program-card-list";
        item.bullets.forEach(function (b) {
          var li = document.createElement("li");
          li.textContent = b;
          ul.appendChild(li);
        });
        body.appendChild(ul);
      } else {
        body.appendChild(p);
      }
      body.appendChild(footer);

      article.appendChild(figure);
      article.appendChild(body);
      root.appendChild(article);
    });
  }

  renderPrograms();

  function detailUrl(id) {
    return "details.html?id=" + encodeURIComponent(String(id));
  }

  function renderLatestNews() {
    var root = document.getElementById("news-grid");
    var items = window.SEIP_NEWS_ARTICLES;
    if (!root || !items || !items.length) return;

    items.forEach(function (item) {
      var url = detailUrl(item.id);
      var article = document.createElement("article");
      article.className = "news-card";

      var imgLink = document.createElement("a");
      imgLink.className = "news-card-image-link";
      imgLink.href = url;
      imgLink.setAttribute("aria-label", item.title + " — view details");

      var img = document.createElement("img");
      img.src = item.image;
      img.alt = item.imageAlt;
      img.loading = "lazy";
      img.decoding = "async";
      imgLink.appendChild(img);

      var body = document.createElement("div");
      body.className = "news-card-body";

      var titleLink = document.createElement("a");
      titleLink.className = "news-card-heading-link";
      titleLink.href = url;

      var h3 = document.createElement("h3");
      h3.className = "news-card-headline";
      h3.textContent = item.title;

      titleLink.appendChild(h3);

      var excerpt = document.createElement("p");
      excerpt.className = "news-card-excerpt";
      excerpt.textContent = item.excerpt;

      body.appendChild(titleLink);
      body.appendChild(excerpt);

      var footerLink = document.createElement("a");
      footerLink.className = "news-card-footer-link";
      footerLink.href = url;
      footerLink.textContent = "Read More";

      article.appendChild(imgLink);
      article.appendChild(body);
      article.appendChild(footerLink);
      root.appendChild(article);
    });
  }

  renderLatestNews();

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var dropdowns = document.querySelectorAll(".has-dropdown");
  var dropdownBtns = document.querySelectorAll(".nav-dropdown-btn");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (!open) {
        dropdowns.forEach(function (d) {
          d.classList.remove("is-open");
          var b = d.querySelector(".nav-dropdown-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  function isMobileNav() {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  dropdownBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (!isMobileNav()) return;
      e.preventDefault();
      var item = btn.closest(".has-dropdown");
      var open = !item.classList.contains("is-open");
      dropdowns.forEach(function (d) {
        if (d !== item) {
          d.classList.remove("is-open");
          var b = d.querySelector(".nav-dropdown-btn");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (nav) nav.classList.remove("is-open");
      if (toggle) {
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      }
      dropdowns.forEach(function (d) {
        d.classList.remove("is-open");
        var b = d.querySelector(".nav-dropdown-btn");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    }
  });
})();
