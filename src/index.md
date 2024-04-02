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

{% for job in jobs %}

   <li class="list-item">
      <div class="meta">
        <div class="title">
          {{ job.title }}
        </div>
        <div class="dates">{{ job.date }} - {{ job.dateEnd }}</div>
      </div>
      <div class="project">
        {% for project in job.projects %}
          {{ project.title }}
          {{ project.excerpt }}
          {{ project.description }}
        {%endfor %}
      </div>
    </li>
{%endfor %}

</ul>
</div>
