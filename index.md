---
layout: default
title: Latest Recipes
---

<h1>Latest Recipes</h1>
<ul>
  {% assign newest = site.recipes | sort: "date" | reverse %}
  {% for recipe in newest limit:10 %}
    <li>
      <a href="{{ recipe.url }}">{{ recipe.title }}</a>
      — {{ recipe.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
