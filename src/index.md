---
title: Hello Wold
layout: "base.njk"
---

<div class="wrapper">
  <div class="header">
    <div class="employers">Werkgever</div>
    <div class="projects">Projecten</div>
  </div>

<ul>
{% for job in collections.jobs | sort: data.date %}
   <li class="list-item">
      <div class="meta">
        <div class="title">
          {{ job.data.title }}
        </div>
        <div class="dates">{{ job.data.date | date }} - {{ job.data.dateEnd | date }}</div>
      </div>
      <div>
        <h2>{{ job.data.title }}</h2>
        {{ job.content }}</div>
    </li>
{%endfor %}
</ul>
</div>
