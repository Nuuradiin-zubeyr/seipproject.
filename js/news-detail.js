(function () {
  "use strict";

  var articles = window.SEIP_NEWS_ARTICLES;
  var root = document.getElementById("news-detail-root");
  var titleEl = document.getElementById("news-detail-title");
  if (!root || !articles || !titleEl) return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var article = null;
  for (var i = 0; i < articles.length; i++) {
    if (String(articles[i].id) === id) {
      article = articles[i];
      break;
    }
  }

  document.title = article
    ? article.title + " | SEIP Project — News"
    : "News details | SEIP Project";

  if (!article) {
    titleEl.textContent = "News not found";
    root.innerHTML =
      '<p class="detail-lead">No article matches this link. <a href="index.html#latest-news">Return to Latest News</a>.</p>';
    return;
  }

  titleEl.textContent = article.title;

  if (article.published) {
    var meta = document.createElement("p");
    meta.className = "detail-meta";
    meta.textContent = article.published;
    root.appendChild(meta);
  }

  var img = document.createElement("img");
  img.className = "detail-hero-img";
  img.src = article.image;
  img.alt = article.imageAlt;
  img.loading = "eager";
  img.decoding = "async";

  var heroFig = document.createElement("figure");
  heroFig.className = "detail-hero-figure";
  heroFig.appendChild(img);
  root.appendChild(heroFig);

  var wrap = document.createElement("div");
  wrap.className = "detail-body detail-prose";
  article.body.forEach(function (para, idx) {
    var p = document.createElement("p");
    p.className = "detail-paragraph" + (idx === 0 ? " detail-paragraph--lead" : "");
    p.textContent = para;
    wrap.appendChild(p);
  });
  root.appendChild(wrap);

  if (article.gallery && article.gallery.length) {
    var section = document.createElement("section");
    section.className = "detail-gallery-section";
    section.setAttribute("aria-labelledby", "detail-gallery-heading");

    var gh = document.createElement("h2");
    gh.id = "detail-gallery-heading";
    gh.className = "detail-gallery-title";
    gh.textContent = "Photo gallery";
    section.appendChild(gh);

    var gallery = document.createElement("div");
    gallery.className = "detail-gallery";
    gallery.setAttribute("role", "group");
    gallery.setAttribute("aria-label", "Gallery images");

    article.gallery.forEach(function (item) {
      var card = document.createElement("figure");
      card.className = "detail-gallery-card";

      var shot = document.createElement("img");
      shot.className = "detail-gallery-img";
      shot.src = item.src;
      shot.alt = item.alt;
      shot.loading = "lazy";
      shot.decoding = "async";

      card.appendChild(shot);
      gallery.appendChild(card);
    });

    section.appendChild(gallery);
    root.appendChild(section);
  }

  var replyForm = document.querySelector(".detail-reply-form");
  if (replyForm) {
    replyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("reply-status");
      if (status) {
        status.textContent =
          "This page is a demo — comments are not saved. Connect a server or form service to store submissions.";
      }
    });
  }
})();
