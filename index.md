---
layout: page
title: Latest Recipes
---

<div class="wrapper">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
  <hr />

  <ul class="recipe-list">
    {% assign newest = site.recipes | sort: "date" | reverse %}
    {% for recipe in newest %}
      <li>
        <a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a>
        <span class="date">{{ recipe.date | date: "%b %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>

  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | relative_url }}">← Newer</a>
    {% endif %}
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | relative_url }}">Older →</a>
    {% endif %}
  </div>
</div>
