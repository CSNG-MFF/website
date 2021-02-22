---
layout: default
title: people
---


<ul>
    {% for member in site.data.people %}
        <b href="https://github.com/{{ member.github }}">{{ member.name }} </b> <br /> 
        {{member.role}}  <br />
        <a href="mailto:{{member.email}}">{{member.email}}</a> <br />
        github: <a href="https://github.com/{{ member.github }}"> {{ member.github }} </a> 
        <div class="gravatar"></div> 
    {% endfor %}
</ul>

