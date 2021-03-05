---
theme: gaia 
# _class: lead
# paginate: true
backgroundColor: #FFF
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

![bg left:40%](https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80)

## Beyond Beamer

$\LaTeX$ Beamer is ok, but there are other things out there! 

An intro to Presentation Ecosystems

```
https://marp.app/
https://revealjs.com/
https://impress.js.org/
https://github.com/iberianpig/fusuma
```

---
 
 ![bg right:30%](https://images.unsplash.com/photo-1609348954993-bc615fa8694f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80)

<!-- _class: lead -->
#### The case **for** $\LaTeX$ Beamer

* Well established. Implies: 
	* stable / few bugs 
	* large online support community
	* many extra packages / features e.g. [focus theme](https://github.com/elauksap/focus-beamertheme)
* Looks reasonably good
* same syntax as papers written in $\LaTeX$  - code can be reused
* Portability through ```pdf``` format
---

 ![bg right:30%](https://images.unsplash.com/photo-1531913223931-b0d3198229ee?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHVuaGFwcHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)

<!-- _class: lead -->
#### The case **against** $\LaTeX$ Beamer 


* Looks boring - most people use standard theme - other themes have fairly uniform look. 
* Lack of flexibility in page setup. Who really understands the copy/paste $\TeX$ code snippet to fix some minor issue?
* Output necessarily pdf (?) - Recommend  ```pandoc```  for file conversion. But even pandoc struggles with LaTeX.
* [GOV.UK](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/) knows.
---

<!-- This is a presenter note for this page. -->
<!-- This is all the cool stuff that I want to mention but is not on the slide -->

 ![bg right:30%](https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80)


<!-- _class: lead -->
#### The case **against** $\LaTeX$ Beamer 

##### *What about...*
* Modern Features:
	* Display animations, simulations, videos
	* Potentially embed content from webpages, Tweets,...
* Pleasant permanent display of slides online 
* Web Design: potentially 1000s of cool libraries that could be used 
* Presenter mode?

---

<!-- _class: lead -->
## Do we actually want to program stuff?

<div class="mermaid">
graph LR
 WYSIWYG? == YES ==> Code
 WYSIWYG? -- NO --> PK[PowerPoint <br> Keynote, etc.]
 Code --> LaTeX
 Code ==> Markdown
 Code ==> H[HTML, CSS]
 Markdown --> Javascript
 H --> Javascript
 subgraph s[<i>the cool kids! </i>]
    Markdown
    H
    Javascript
 end
</div>

---

<!-- _class: lead -->
### Markdown
This presentation is written in Markdown using ![width:200 height:20%](https://marp.app/assets/marp.svg)

The code of one of the previous pages is _that_ simple:
```md
---
 
![bg right:30%](image.png)
#### The case **for** $\LaTeX$ Beamer

* Well established. Implies: 
	* stable / few bugs 
	* large online support community
	* many extra packages / features e.g. [focus theme](https://github.com/elauksap/focus-beamertheme)
* Looks reasonably good
* same syntax as papers written in $\LaTeX$  - code can be reused.
* Portability through ```pdf``` format.

---
```

---

![bg right:25% height:50%](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png)
<!-- _class: lead -->
### HTML / CSS / Javascript

 - Let us check how [impress.js](https://impress.js.org/) introduce themselves.
 - Edin's [presentation](https://zhero9.github.io/slides/NSW/indexE-lse.html#/step-startPage)
 - Embedding [Animations](https://bentonatura.github.io/slides_blackbox/blackbox-focs-short.html#/step-variable-fixing) 

- How to get started?
  * [reveal.js](https://revealjs.com/) (55k stars on GitHub) has a great documentation and samples.
  * In general: Take a presentation you like and modify the source code.
---

<!-- _class: lead -->
Source code for slide with animation

```html
<div id="step-variable-fixing" class="step" >
  <h2 class="center-text">Feasibility Algorithm</h2>
    <div class=theorem>
    Assume that the system <font class="fr">$$x \in W + d, x \ge 0$$</font>  is feasible. 
    Then there exists a feasible solution such that <font class="fr">$${\color{#FF6384} \|x - d\|_\infty } \le {\color{#FF9F40} \kappa_W 
    \|{\color{#268bd2}d^-}\|_1}$$.</font>
  </div>
   <div class="box" style="width: 55%">
    <b>Recursive algorithm:</b> 
    <ul class="lst" style="margin-top: -2px">
    	<li> Use <font class="em2"> approximate solver </font> to get <font class="fr">near feasible</font><br>
    		$$z\in W+d$$ with $$\|z^-\|_1$$ &quot;small&quot;.
    	<li> $$I:=\{i\in [n]:\, z_i> \kappa_W \|z^-\|_1\}, J:= [n]\setminus I$$.
    	<li> By proximity, there exists a feasible solution with $$x_I>0$$.
    	<li> Recurse on the subspace <font class="fr">$$W'=\mathrm{proj}_J(W)$$</font> with $$d'=d_J$$.
    </ul>
    <b>Runtime if executed carefully: </b> 
    <font class="fr">$$$O(mn^{\omega+o(1)}\log(\kappa_W))$$$</font>.
    </div>
 <div class="box" style="margin-top:-20pt; width: 40%;margin-left: 10pt;">
    <canvas id="chart_canvas2"></canvas>
    <br>
    <canvas id="chart_canvas4"></canvas>
  </div>
</div>
```

<!-- mermaid.js -->
<script src="https://unpkg.com/mermaid@8.1.0/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>
