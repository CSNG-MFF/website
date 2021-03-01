---
layout: default
title: people
---

{% for member in site.data.people %}
<div>
        <div class="gravatar" style="background-image: url(/website/assets/img/{{ member.image }})"></div> 
        <div class="info-person">
            <b>{{ member.name }} </b> <br /> 
            {{member.role}}  <br />
            <a href="mailto:{{member.email}}">{{member.email}}</a> <br />
            github: <a href="https://github.com/{{ member.github }}"> {{ member.github }} </a> 
        </div>
</div>
{% endfor %}

