---
layout: default
title: people
---

{% for person in site.data.people %}

<div class="gravatar" style="background-image: url(./assets/img/{{ person.image }})"></div>   
<div class="info-person">
        {% if person.website %}
                <a href="{{person.website}}" title="Personal website">{{person.name}}</a>  <br />
        {% else %}
                <b>{{ person.name }} </b> <br /> 
        {% endif %}
        {{person.role}}  <br />
        <a href="mailto:{{person.email}}">{{person.email}}</a> <br />
        <div class="social">
                {% if person.github %}
                        <a href="https://github.com/{{person.github}}" title="Fork me on GitHub"><i class="icon-github-circled"></i></a> 
                {% endif %}
                {% if person.google_scholar %}
                        <a href="{{person.google_scholar}}" title="Google Scholar profile"><i class="ai ai-google-scholar-square fa-3x"></i></a>
                {% endif %}
                {% if person.twitter %}
                        <a href="https://twitter.com/{{person.twitter}}" title="Connect with me on Twitter"><i class="icon-twitter"></i></a>
                {% endif %}
                {% if person.linkedin %}
                        <a href="https://linkedin.com/in/{{person.linkedin}}" title="Connect with me on Linkedin"><i class="icon-linkedin-squared"></i></a>
                {% endif %}
        </div>
</div>
{% endfor %}