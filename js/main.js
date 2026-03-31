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

  var EVENT_ITEMS = [
    {
      variant: "orange",
      image: "images/banner.jpeg",
      title: "Project Technical Steering Committee Meeting",
      description:
        "Photo group by Molsa Officials, line Ministries representative & Private sector Partners.",
      href: "#"
    },
    {
      variant: "white",
      image: "images/IMG-20250413-WA0003.jpg",
      title: "Project Technical Committee Meeting",
      description:
        "Photo group by Molsa Officials, line Ministries representative & Private sector Partners.",
      href: "#"
    },
    {
      variant: "dark",
      image: "images/banner.jpeg",
      title: "Launching Ceremony of Scholarships",
      description:
        "Renewable energy training scholarship launching ceremony at Hayle Barise Technical School.",
      href: "#"
    },
    {
      variant: "solid-dark",
      image: "",
      title: "Minister Yusuf Observation",
      description:
        "Ministry Yusuf Visiting Training areas at Hayle Barise Technical School after Launching Ceremony.",
      href: "#"
    },
    {
      variant: "orange",
      image: "images/Tvet-image-2.jpg",
      title: "Second Steering committee Meeting",
      description:
        "Minister Ainanshe's Opening Remarks of the Second Steering committee meeting held in Mogadishu.",
      href: "#"
    },
    {
      variant: "white",
      image: "images/Tvet-Image.jpg",
      title: "DG YUSUF & Project Manager Xaambe",
      description:
        "DG YUSUF & Project Manager Xaambe Having Engagement with international Partners ( SIDA ).",
      href: "#"
    }
  ];

  function renderEvents() {
    var root = document.getElementById("events-grid");
    if (!root) return;

    EVENT_ITEMS.forEach(function (item) {
      var article = document.createElement("article");
      article.className = "event-card event-card--" + item.variant;

      if (item.image && item.variant !== "solid-dark") {
        article.style.setProperty("--event-img", 'url("' + item.image + '")');
      }

      var inner = document.createElement("div");
      inner.className = "event-card-inner";

      var h3 = document.createElement("h3");
      h3.className = "event-card-title";
      h3.textContent = item.title;

      var p = document.createElement("p");
      p.className = "event-card-desc";
      p.textContent = item.description;

      var a = document.createElement("a");
      a.className = "event-card-more";
      a.href = item.href;
      a.textContent = "More";

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
      image: "images/image1.png",
      alt: "Two professionals collaborating at a desk with a laptop in a modern office",
      title: "Entrepreneurship",
      description:
        "This course equips trainees with business development skills, enabling them to create, manage, and grow small businesses successfully."
    },
    {
      image: "images/image2.png",
      alt: "Trainees in safety vests and hard hats with solar equipment at a renewable energy site",
      title: "Renewable Energy",
      description:
        "Participants learn about solar panel installation and maintenance, promoting access to clean energy and creating job opportunities in the renewable energy sector."
    },
    {
      image: "images/image3.jpg",
      alt: "Digital technology concept with laptop, globe, and multimedia icons representing ICT",
      title: "ICT",
      description:
        "The course provides knowledge in web and app development, digital marketing, and content creation, helping youth to build careers in technology and online business."
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
      p.textContent = item.description;

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
      body.appendChild(p);
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
