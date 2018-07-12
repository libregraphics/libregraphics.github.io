---
layout: default
title: Libre Graphics Tools
---



<div class="grid grid-pad">


    <div class="col-1-3 mobile-col-1-1">

       <h4> Instead of beign stuck with expensive propietery tools, use powerful Free and Open Source softwares, for your design projects. Don't forget to tell the developers what features you need. <a href='#' id='slideToggle2'>Learn More</a></h4>
    </div>

<br />

<div style="display:none;" class="slideTogglebox2">
<div class="col-1-2 mobile-col-1-1">
        This is just a collection of links to libre design software and resources. I built this page to keep track of my tools.

You are invited to contribute to and improve.



        <li>Free To Copy and Distribute</li>
        <li>Free To Copy and Distribute</li>
        <li>Free To Copy and Distribute</li>
        <li>Free To Copy and Distribute</li>
        <li>Free To Copy and Distribute</li>
        <li>Free To Copy and Distribute</li>
	</div>
	</div>
  </div>




<div id="directory">
{% for cat in site.category-list %}

<h6 class="category">
 {{ cat }}
 </h6>
<ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% for pc in page.categories %}
        {% if pc == cat %}
        <a class="tool_link tile" href="{{ page.homepage }}" target="_blank">
          <li><img style="width: 100px;" src="{{ page.id }}/{{ page.icon }}"> {{ page.title }}</li></a>
        {% endif %}   <!-- cat-match-p -->
      {% endfor %}  <!-- page-category -->
    {% endif %}   <!-- resource-p -->
  {% endfor %}  <!-- page -->
  </ul>

{% endfor %}  <!-- cat -->


{% capture index %}












<script type="text/javascript">


$("#slideToggle").click(function () {
   $('.slideTogglebox').slideToggle();
});
    $("#slideToggle2").click(function () {
   $('.slideTogglebox2').slideToggle();
});


</script>



{% endcapture %}
{{ index | markdownify }}
