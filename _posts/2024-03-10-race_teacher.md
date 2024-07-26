---
layout: post
title:  RACE QA
categories: influence
nodate: True
tex: True
---

*Hover or click on a token generated from the LLM to view the in-context datamodel weights for the prompt tokens.*

Here we consider a QA example from the RACE dataset. Notice the negative datamodel weights for "his" in "his/her", indicating that the presence of the male pronoun **decreases** the probability of generating the correct answer of "C. teacher", even though it does not refer to the author and is irrelevant to the task.

(Note that we do not show weights for the question and options since they are much larger than the weights for the rest of the prompt that we'd like to visualize.)

<hr>

<script type='module' src='/assets/js/highlighting.js'></script>
<div id="scoresContainer" data-fname="race"></div>

### Prompt
<span class="context"> Last</span><span class="context"> week</span><span class="context"> I</span><span class="context"> talked</span><span class="context"> with</span><span class="context"> some</span><span class="context"> of</span><span class="context"> my</span><span class="context"> students</span><span class="context"> about</span><span class="context"> what</span><span class="context"> they</span><span class="context"> wanted</span><span class="context"> to</span><span class="context"> do</span><span class="context"> after</span><span class="context"> they</span><span class="context"> graduated</span><span class="context">,</span><span class="context"> and</span><span class="context"> what</span><span class="context"> kind</span><span class="context"> of</span><span class="context"> job</span><span class="context"> prospects</span><span class="context"> they</span><span class="context"> thought</span><span class="context"> they</span><span class="context"> had</span><span class="context">.</span><span class="context"> Given</span><span class="context"> that</span><span class="context"> I</span><span class="context"> teach</span><span class="context"> students</span><span class="context"> who</span><span class="context"> are</span><span class="context"> training</span><span class="context"> to</span><span class="context"> be</span><span class="context"> doctors</span><span class="context">,</span><span class="context"> I</span><span class="context"> was</span><span class="context"> surprised</span><span class="context"> do</span><span class="context"> find</span><span class="context"> that</span><span class="context"> most</span><span class="context"> thought</span><span class="context"> that</span><span class="context"> they</span><span class="context"> would</span><span class="context"> not</span><span class="context"> be</span><span class="context"> able</span><span class="context"> to</span><span class="context"> get</span><span class="context"> the</span><span class="context"> jobs</span><span class="context"> they</span><span class="context"> wanted</span><span class="context"> without</span><span class="context"> "</span><span class="context">out</span><span class="context">side</span><span class="context"> help</span><span class="context">".</span><span class="context"> "</span><span class="context">What</span><span class="context"> kind</span><span class="context"> of</span><span class="context"> help</span><span class="context"> is</span><span class="context"> that</span><span class="context">?"</span><span class="context"> I</span><span class="context"> asked</span><span class="context">,</span><span class="context"> expecting</span><span class="context"> them</span><span class="context"> to</span><span class="context"> tell</span><span class="context"> me</span><span class="context"> that</span><span class="context"> they</span><span class="context"> would</span><span class="context"> need</span><span class="context"> a</span><span class="context"> or</span><span class="context"> family</span><span class="context"> friend</span><span class="context"> to</span><span class="context"> help</span><span class="context"> them</span><span class="context"> out</span><span class="context">.</span><span class="context"> "</span><span class="context">Sur</span><span class="context">gery</span><span class="context"> </span><span class="context">,"</span><span class="context"> one</span><span class="context"> replied</span><span class="context">.</span><span class="context"> I</span><span class="context"> was</span><span class="context"> pretty</span><span class="context"> al</span><span class="context">armed</span><span class="context"> by</span><span class="context"> that</span><span class="context"> response</span><span class="context">.</span><span class="context"> It</span><span class="context"> seems</span><span class="context"> that</span><span class="context"> the</span><span class="context"> gradu</span><span class="context">ates</span><span class="context"> of</span><span class="context"> today</span><span class="context"> are</span><span class="context"> increasingly</span><span class="context"> willing</span><span class="context"> to</span><span class="context"> go</span><span class="context"> under</span><span class="context"> the</span><span class="context"> knife</span><span class="context"> to</span><span class="context"> get</span><span class="context"> ahead</span><span class="context"> of</span><span class="context"> others</span><span class="context"> when</span><span class="context"> it</span><span class="context"> comes</span><span class="context"> to</span><span class="context"> getting</span><span class="context"> a</span><span class="context"> job</span><span class="context"> .</span><span class="context"> One</span><span class="context"> girl</span><span class="context"> told</span><span class="context"> me</span><span class="context"> that</span><span class="context"> she</span><span class="context"> was</span><span class="context"> considering</span><span class="context"> surgery</span><span class="context"> to</span><span class="context"> increase</span><span class="context"> her</span><span class="context"> height</span><span class="context">.</span><span class="context"> "</span><span class="context">They</span><span class="context"> break</span><span class="context"> your</span><span class="context"> legs</span><span class="context">,</span><span class="context"> put</span><span class="context"> in</span><span class="context"> special</span><span class="context"> extending</span><span class="context"> screw</span><span class="context">s</span><span class="context">,</span><span class="context"> and</span><span class="context"> slowly</span><span class="context"> expand</span><span class="context"> the</span><span class="context"> gap</span><span class="context"> between</span><span class="context"> the</span><span class="context"> two</span><span class="context"> ends</span><span class="context"> of</span><span class="context"> the</span><span class="context"> bone</span><span class="context"> as</span><span class="context"> it</span><span class="context"> re</span><span class="context">-</span><span class="context">g</span><span class="context">rows</span><span class="context">,</span><span class="context"> you</span><span class="context"> can</span><span class="context"> get</span><span class="context"> at</span><span class="context"> least</span><span class="context"> </span><span class="context">5</span><span class="context"> cm</span><span class="context"> t</span><span class="context">aller</span><span class="context">!"</span><span class="context"> At</span><span class="context"> that</span><span class="context"> point</span><span class="context">,</span><span class="context"> I</span><span class="context"> was</span><span class="context"> shocked</span><span class="context">.</span><span class="context"> I</span><span class="context"> am</span><span class="context"> short</span><span class="context">,</span><span class="context"> I</span><span class="context"> can</span><span class="context">'</span><span class="context">t</span><span class="context"> deny</span><span class="context"> that</span><span class="context">,</span><span class="context"> but</span><span class="context"> I</span><span class="context"> don</span><span class="context">'</span><span class="context">t</span><span class="context"> think</span><span class="context"> I</span><span class="context"> would</span><span class="context"> put</span><span class="context"> myself</span><span class="context"> through</span><span class="context"> months</span><span class="context"> of</span><span class="context"> ag</span><span class="context">ony</span><span class="context"> just</span><span class="context"> to</span><span class="context"> be</span><span class="context"> a</span><span class="context"> few</span><span class="context"> cent</span><span class="context">imet</span><span class="context">res</span><span class="context"> t</span><span class="context">aller</span><span class="context">.</span><span class="context"> I</span><span class="context"> don</span><span class="context">'</span><span class="context">t</span><span class="context"> even</span><span class="context"> bother</span><span class="context"> to</span><span class="context"> wear</span><span class="context"> shoes</span><span class="context"> with</span><span class="context"> thick</span><span class="context"> sol</span><span class="context">es</span><span class="context">,</span><span class="context"> as</span><span class="context"> I</span><span class="context">'</span><span class="context">m</span><span class="context"> not</span><span class="context"> trying</span><span class="context"> to</span><span class="context"> hide</span><span class="context"> the</span><span class="context"> fact</span><span class="context"> that</span><span class="context"> I</span><span class="context"> am</span><span class="context"> just</span><span class="context"> not</span><span class="context"> tall</span><span class="context">!</span><span class="context"> It</span><span class="context"> seems</span><span class="context"> to</span><span class="context"> me</span><span class="context"> that</span><span class="context"> there</span><span class="context"> is</span><span class="context"> a</span><span class="context"> trend</span><span class="context"> towards</span><span class="context"> wanting</span><span class="context"> "</span><span class="context">per</span><span class="context">fection</span><span class="context">"</span><span class="context"> ,</span><span class="context"> and</span><span class="context"> that</span><span class="context"> is</span><span class="context"> an</span><span class="context"> ideal</span><span class="context"> that</span><span class="context"> just</span><span class="context"> does</span><span class="context"> not</span><span class="context"> exist</span><span class="context"> in</span><span class="context"> reality</span><span class="context">.</span><span class="context"> No</span><span class="context"> one</span><span class="context"> is</span><span class="context"> born</span><span class="context"> perfect</span><span class="context">,</span><span class="context"> yet</span><span class="context"> magazines</span><span class="context">,</span><span class="context"> TV</span><span class="context"> shows</span><span class="context"> and</span><span class="context"> movies</span><span class="context"> present</span><span class="context"> images</span><span class="context"> of</span><span class="context"> thin</span><span class="context">,</span><span class="context"> tall</span><span class="context">,</span><span class="context"> beautiful</span><span class="context"> people</span><span class="context"> as</span><span class="context"> being</span><span class="context"> the</span><span class="context"> norm</span><span class="context">.</span><span class="context"> Ad</span><span class="context">vert</span><span class="context">is</span><span class="context">ements</span><span class="context"> for</span><span class="context"> slim</span><span class="context">ming</span><span class="context"> a</span><span class="context">ids</span><span class="context">,</span><span class="context"> beauty</span><span class="context"> treatments</span><span class="context"> and</span><span class="context"> cos</span><span class="context">metic</span><span class="context"> surgery</span><span class="context"> clin</span><span class="context">ics</span><span class="context"> fill</span><span class="context"> the</span><span class="context"> pages</span><span class="context"> of</span><span class="context"> newspapers</span><span class="context">,</span><span class="context"> further</span><span class="context"> creating</span><span class="context"> an</span><span class="context"> idea</span><span class="context"> that</span><span class="context"> "</span><span class="context">per</span><span class="context">fection</span><span class="context">"</span><span class="context"> is</span><span class="context"> a</span><span class="context"> requirement</span><span class="context">,</span><span class="context"> and</span><span class="context"> that</span><span class="context"> it</span><span class="context"> must</span><span class="context"> be</span><span class="context"> purchased</span><span class="context">,</span><span class="context"> no</span><span class="context"> matter</span><span class="context"> what</span><span class="context"> the</span><span class="context"> cost</span><span class="context">.</span><span class="context"> In</span><span class="context"> my</span><span class="context"> opinion</span><span class="context">,</span><span class="context"> skills</span><span class="context">,</span><span class="context"> rather</span><span class="context"> than</span><span class="context"> appearance</span><span class="context">,</span><span class="context"> should</span><span class="context"> determine</span><span class="context"> how</span><span class="context"> successful</span><span class="context"> a</span><span class="context"> person</span><span class="context"> is</span><span class="context"> in</span><span class="context"> his</span><span class="context">/</span><span class="context">her</span><span class="context"> chosen</span><span class="context"> career</span><span class="context">.</span><br><br>
We can know from the passage that the author works as a_.<br>
A. doctor<br>
B. model<br>
C. teacher<br>
D. reporter

<hr>

<div id="generation-container">
<h3 id="generation">Generation</h3>
<span class="generation"> C</span><span class="generation">.</span><span class="generation"> teacher</span><span class="generation"> </span>
  <div id="probability-container">
    <div id="probability-bar">
      <div id="probability-fill"></div>
    </div>
    <span id="probability-value">0.00</span>
  </div>
  <br><br><br>
</div>