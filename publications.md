---
layout: default
title: Publications
---

# {{ page.title }}

<div id="pub-controls" class="pub-controls">
  <input id="pub-search" type="search" placeholder="Search title, author, venue…" aria-label="Search publications" />
  <div class="pub-filters">
    <label><input type="checkbox" class="pub-type" value="journal" checked> Journal</label>
    <label><input type="checkbox" class="pub-type" value="conference" checked> Conference</label>
    <label><input type="checkbox" class="pub-type" value="preprint" checked> Preprint</label>
  </div>
</div>

{% assign csng_names = site.data.csng_names %}

{% comment %}
Normalize list, infer type if missing, then group by year.
{% endcomment %}
{% assign pubs_raw = site.data.publications | default: empty %}
{% assign pubs_sorted = pubs_raw | sort: 'year' | reverse %}
{% assign current_year = '' %}

<section id="publications" class="publications">
{% for entry in pubs_sorted %}

  {% assign lower_venue = entry.venue | downcase | default: '' %}
  {% assign lower_title = entry.title | downcase %}
  {% assign ptype = entry.type | default: '' %}

  {% if ptype == '' %}
    {% if lower_venue contains 'biorxiv' or lower_venue contains 'arxiv' %}
      {% assign ptype = 'preprint' %}
    {% elsif lower_venue contains 'iclr' or lower_venue contains 'neurips' or lower_venue contains 'cvpr' or lower_venue contains 'icml' or lower_venue contains 'eccv' %}
      {% assign ptype = 'conference' %}
    {% else %}
      {% assign ptype = 'journal' %}
    {% endif %}
  {% endif %}

  {% if current_year != entry.year %}
    {% unless forloop.first %}</div>{% endunless %}
    <h2 class="pub-year-heading" id="y{{ entry.year }}">{{ entry.year }}</h2>
    <div class="pub-year-group">
    {% assign current_year = entry.year %}
  {% endif %}

  <article class="pub-card" data-year="{{ entry.year }}" data-type="{{ ptype }}">
    <header class="pub-header">
      <h3 class="pub-title">
        {% if entry.pdf %}
          <a href="{{ entry.pdf }}" target="_blank" rel="noopener">{{ entry.title }}</a>
        {% elsif entry.url %}
          <a href="{{ entry.url }}" target="_blank" rel="noopener">{{ entry.title }}</a>
        {% else %}
          {{ entry.title }}
        {% endif %}
      </h3>
      <span class="pub-type-badge">{{ ptype | capitalize }}</span>
    </header>

    <p class="pub-authors">
      {% assign rendered_authors = '' %}
      {% for a in entry.authors %}
        {% assign fullname = a %}
        {% if csng_names contains fullname %}
          {% assign name_html = '<strong class="csng-author">' | append: fullname | append: '</strong>' %}
        {% else %}
          {% assign name_html = fullname %}
        {% endif %}
        {% if forloop.first %}
          {% assign rendered_authors = name_html %}
        {% else %}
          {% assign rendered_authors = rendered_authors | append: '; ' | append: name_html %}
        {% endif %}
      {% endfor %}
      {{ rendered_authors }}
    </p>

    <p class="pub-venue">
      <em>{{ entry.venue }}</em>
      {% if entry.note %} — {{ entry.note }}{% endif %}
    </p>

    <ul class="pub-links">
      {% if entry.pdf %}
        <li><a class="badge" href="{{ entry.pdf }}" target="_blank" rel="noopener">📄 PDF</a></li>
      {% endif %}
      {% if entry.doi %}
        <li><a class="badge" href="https://doi.org/{{ entry.doi }}" target="_blank" rel="noopener">🔗 DOI</a></li>
      {% endif %}
      {% if entry.code %}
        <li><a class="badge" href="{{ entry.code }}" target="_blank" rel="noopener">💻 Code</a></li>
      {% endif %}
      {% if entry.video %}
        <li><a class="badge" href="{{ entry.video }}" target="_blank" rel="noopener">🎥 Video</a></li>
      {% endif %}
      {% if entry.url and entry.pdf == nil %}
        <li><a class="badge" href="{{ entry.url }}" target="_blank" rel="noopener">🌐 Link</a></li>
      {% endif %}

      {% if entry.cite %}
        <li>
          <button class="badge badge-ghost"
                  data-cite="{{ entry.cite | strip_newlines | escape }}"
                  onclick="navigator.clipboard.writeText(this.dataset.cite)">
            📚 Copy citation
          </button>
        </li>
      {% endif %}
    </ul>

    {% if entry.abstract %}
      <details class="pub-abstract">
        <summary>Abstract</summary>
        <p>{{ entry.abstract }}</p>
      </details>
    {% endif %}
  </article>

  {% if forloop.last %}</div>{% endif %}
{% endfor %}
</section>

<script>
(function(){
  const search = document.querySelector('#pub-search');
  const checks = Array.from(document.querySelectorAll('.pub-type'));
  const cards = Array.from(document.querySelectorAll('.pub-card'));

  function normalize(s){ return (s || '').toLowerCase(); }

  function applyFilter(){
    const q = normalize(search.value);
    const enabled = new Set(checks.filter(c => c.checked).map(c => c.value));

    for (const card of cards){
      const type = card.dataset.type;
      const text = normalize(card.innerText);
      const matchQ = q === '' || text.indexOf(q) !== -1;
      const matchT = enabled.has(type);
      card.style.display = (matchQ && matchT) ? '' : 'none';
    }
  }

  search.addEventListener('input', applyFilter);
  checks.forEach(c => c.addEventListener('change', applyFilter));
})();
</script>