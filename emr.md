---
marp: true

math: mathjax

style: |
    section {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    section.uvod {
        justify-content: center;
    }

    .sloupce {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        justify-items: center;
        gap: 2rem;
        margin: auto;
    }

    .mrizkasest {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    .mrizkasest2 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
        row-gap:0rem;
    }

    .uprostred {
        margin: auto;
        font-size: 3rem;
    }

    .jedenuprostred {
        margin: auto;
        height: 450px;
    }

    .popisek {
        font-size: xx-small;
        color: gray;
    }

    .fotopopisek {
        display: grid;
        grid-template-columns: 1fr; 
        place-content: center;     
        place-items: left;        
        width: max-content;
        height: max-content;                
        margin: auto;
    }

    .dvojobrazekjedna {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 0;
    }

    .dvojobrazek {
        width: 100%;       /* Obrázek se roztáhne maximálně na šířku svého sloupce */
        max-height: 180px; /* Zabrání tomu, aby byl moc vysoký */
        object-fit: contain; /* Pěkně zachová poměr stran bez pokřivení */
    }
    .flex {
        display: flex;
        flex-direction:column;
    }
    .twogrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Dva stejně velké sloupce */
        gap: 1rem;                             /* Mezera mezi sloupci */
        width: 100%;                           /* Roztáhne mřížku na plnou šířku */
    }
    .poloobrazek {
        max-width:10%;
    }
    .fourgrid {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2);
        column-gap: 2rem;
        width:100%
    }
    .fourgrid_res {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2);
        column-gap: 2rem;

        width:500px;
        margin:auto;
    }
    .dvojmrizka {
        display:grid;
        grid-template-rows:repeat(2, 1fr);
        grid-template-columns:1;
        gap:0;
        margin:auto;
    }
    .obrazekdvoj {
        max-width:400px;
    }
    .obrazekdvoj2 {
        max-width:300px;
        justify-self:center;
    }
    .dvojflex {
        display:flex;
        flex-direction:row;
        gap:3rem;
    }
    .dvojflex_col {
        display:flex;
        flex-direction:column;
        gap:0;
    }
    .velkepismo {
        font-size:xxx-large;
    }
    .dolnorovnice {
        position: absolute;
        bottom: 30px;
        margin-left: 0;
        width: 100%;
        text-align: left;
        font-size:x-large;
        color:rgb(100, 100, 100);
    }
    .stajlung {
        width:300px;
    }
    .stajlung2 {
        width:200px;
    }
    .stajlung3 {
        height:225px;
        width:auto;
    }
    .stajlung3_abs {
        position:absolute;
        right:0;
        top:0;
        height:300px;
        border: 1px solid grey;
        width:auto;
    }
    .stajlung4 {
        height:250px;
        width:auto;
        object-fit:contain;
    }
    .stajlung5 {
        height:210px;
        width:auto;
        object-fit:contain;
    }
    .flexrow {
        display:flex;
        flex-direction:row;
        gap:1rem;
    }
    .flexrowmid {
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap:1rem;
        width:100%;
    }
    .flexcol {
        display:flex;
        flex-direction:column;
        gap:1rem;
        justify-content:center;
        align-items:center;
        margin:auto;
    }
    section.mensi {
        p:not(.popisek) {
            font-size: x-large;
        }
    }
    .vlevodole {
        align-self:flex-start;
        bottom:0;
    }
    .vodoznak {
        font-family:"Times New Roman";
        font-size:xxx-large;
        color: rgba(0, 0, 0, 0.15);
        transform:rotate(25deg);
        position:absolute;
        top:50%;
        left:auto;
        right:auto; 
    }
    .rovnice {
        font-size:xxx-large;
        border: 2px solid black;
        width:min-content;
        padding-left:10px;
        padding-right:10px;
        padding-top:10px;
    }
    .ing {
        border: 1px solid gray;
    }

---

# Za hrotem digitální tužky: Fyzika, elektronika a elektromagnetická rezonance

### _Robin Josef Šafařík, 2026_

<!--
_class: uvod
-->

---

<div class="flexcol">
    <div class="flexrow">
        <div class="dvojflex_col">
            <img class="stajlung" src="openalt26/fotki/tablet.avif"/>
            <p class="popisek">Zdroj: sc04.alicdn.com</p>
        </div>
        <div class="stajlung">
            <img style="width:500px;" src="openalt26/fotki/remarkable.webp"/>
            <p class="popisek">Zdroj: prod.website-files.com</p>
        </div>
        <div class="dvojflex_col">
            <img class="stajlung" src="openalt26/fotki/wacom.avif"/>
            <p class="popisek">Zdroj: heureka.group</p>
        </div>
    </div>
    <div class="flexrow">
        <div class="dvojflex_col">
            <img class="stajlung3" src="openalt26/fotki/psaniWacom.jpg"/>
            <p class="popisek">Zdroj: alza.cz</p>
        </div>
        <div class="dvojflex_col">
            <img class="stajlung3" src="openalt26/fotki/mobil.png"/>
            <p class="popisek">Zdroj: business.hanvonugee.com</p>
        </div>
    </div>
</div>

---

<!--
_class: mensi
-->

# Technologie snímání rukopisu
<div class="flexcol">
    <div class="flexrow">
        <div class="dvojflex_col">
            <img class="stajlung4" src="openalt26/fotki/tech/resistive-touch-panel.webp"/>
            <p class="popisek">Zdroj: ldycdn.com</p>
            <strong>Rezistivní (odporová)</strong>
        </div>
        <div class="dvojflex_col">
            <img class="stajlung4" src="openalt26/fotki/tech/capacitive.png"/>
            <p class="popisek">Zdroj: researchgate.net</p>
            <strong>Kapacitivní s aktivním stylusem</strong>
        </div>
        <div class="dvojflex_col">
            <img class="stajlung4" src="openalt26/fotki/tech/digitizer_jp.gif"/>
            <p class="popisek">Zdroj: tablet.wacom.co.jp</p>
            <strong>EMR = elmag. rezonanční</strong>
        </div>
    </div>
    <p class="vlevodole">... infračervená laserová, optická, akustická,  atd. atd. </p>
</div>

<!--
- Technologií snímání dig. tužky je opravdu hodně
- Elmag - vzbudit zvědavost, jak to funguje tak precizně bez baterie
-->





---

# Elektromagnetické pole

<div class="fotopopisek">

<img class="jedenuprostred" src="openalt26/fotki/magnetic_field.webp" />

<p class="popisek">
Zdroj obrázku: https://media.geeksforgeeks.org/wp-content/uploads/20251211112403202726/magnetic_field.webp
</p>

</div>

---

# Kondenzátor? Cívka?

<div class="fourgrid">
<div style="text-align: bottom;">
<img class="" src="openalt26/fotki/kondenzatory_typy.webp"/>
<p class="popisek">Zdroj: jlcpcb.com</p>
</div>
<div>
<img src="openalt26/fotki/Types-of-Inductor.jpg"/>
<p class="popisek">Zdroj: rfcafe.com</p>  
</div>

<div style="text-align: bottom;">

### Kondenzátor
Zásobárna **elektrického** pole
(akumuluje elektrický náboj)
</div>

<div style="text-align: bottom;">

### Cívka
Zásobárna **magnetického** pole
("setrvačník" elektrického proudu)
</div>
</div>

<!-- 
Nezapomenout zmínit: Kondik nemá rád změny napětí a cívka nemá ráda změny proudu 
-->

---

# Elektromagnetická indukce

<div class="fotopopisek">

<img class="jedenuprostred" src="openalt26/fotki/indukcnost.jpg" />

<p class="popisek">
Zdroj obrázku: openbooks.lib.msu.edu</p>

</div>

---

<!--
Koncepty, které potřebuji vysvětlit:
Co je to cívka
co je to EMR
jak funguje elektromagnetické pole

Narozdíl od kapacitního snímání stylusu, který potřebuje baterii pro svou funkčnost, emr stylus ji nepotřebuje,

Tak, začnu s tou zajímavější částí (ony všechny jsou zajímavé a tato je jedna z nich). Co se děje v chytrém peru z fyzikálního hlediska?
-->

<div class="mrizkasest">
<img src="openalt26/rcl/r.png" />
<div></div>
<div></div>
<img src="openalt26/sin/0.png" />
<div></div>
<div></div>
<div>

Bez fázového posunu

</div>

</div>

---

<div class="mrizkasest">
<img src="openalt26/rcl/r.png" />
<img src="openalt26/rcl/c.png" />
<div></div>
<img src="openalt26/sin/0.png" />
<img src="openalt26/sin/c.png" />
<div></div>
<div>

Bez fázového posunu

</div>

<div>

Fázový posun $+ 90 \degree$
$(+ \frac{\pi}{2} rad)$

</div>

</div>

---

<div class="mrizkasest">
<img src="openalt26/rcl/r.png" />
<img src="openalt26/rcl/c.png" />
<img src="openalt26/rcl/l.png" />

<img src="openalt26/sin/0.png" />
<img src="openalt26/sin/c.png" />
<img src="openalt26/sin/l.png" />
<div>

Bez fázového posunu

</div>

<div>

Fázový posun $+ 90 \degree$
$(+ \frac{\pi}{2} rad)$

</div>

<div>

Fázový posun $- 90 \degree$
$(- \frac{\pi}{2} rad)$

</div>

</div>


---

<div class="dvojmrizka">

<img class="obrazekdvoj" src="openalt26/rcl/rcl_source.png"/>
<img class="obrazekdvoj" src="openalt26/sin/lc_napeti_proud_proud.png"/>



</div>

---

# EMR = elektromagnetická rezonance

<div class="dvojmrizka">

<img class="obrazekdvoj" src="openalt26/rcl/rcl_source.png"/>
<img class="obrazekdvoj" src="openalt26/sin/lc_proud_proud.png"/>



</div>

---

# EMR = elektromagnetická rezonance
<div class="flexrowmid">
<div class="dvojmrizka">

<img class="obrazekdvoj2" src="openalt26/rcl/lc_.png"/>
<img class="obrazekdvoj2" src="openalt26/sin/lc_proud_proud.png"/>

</div>

<div class="fotopopisek">
<img class="ing" src="openalt26/fotki/damped_sine.png"/>
<p class="popisek">
Zdroj obrázku: chem.libretexts.org
</p>
</div>
</div>

---

# Reaktance
## = odpor závislý na frekvenci

<div class="flexcol">
<div class="twogrid">
<div>
<div class="rovnice">

$X_C = \frac{1}{2 \pi f C}$
</div>

kde:

$X_C$ = Reaktance kondenzátoru v $\Omega$
$C$ = Kapacita kondenzátoru ve $F$
</div>
<div>
<div class="rovnice">

$X_L = 2 \pi f L$
</div>

kde:

$X_L$ = Reaktance cívky v $\Omega$
$L$ = Indukčnost cívky v $H$ 
</div>
</div>

</div>


---

# Rezonanční frekvence

<div class="flexrow">
<img class="stajlung3_abs" src="openalt26/fotki/rovnice/rovnice.png"/>
<div class="flexcol">
<div class="velkepismo">

## $f_r = \frac{1}{2 \pi \sqrt{L C}}$
</div>

... kde:
$f_r$ = **rezonanční** frekvence v $Hz$
$C$ = kapacita kondenzátoru ve $F$
$L$ = indukčnost cívky v $H$


</div>
</div>

---


# Rezonanční frekvence

<div class="dvojflex">
<div class="dvojmrizka">

<img class="obrazekdvoj2" src="openalt26/rcl/lc_.png"/>
<img class="obrazekdvoj2" src="openalt26/sin/lc_proud_proud.png"/>

</div>

<div>
<div class="velkepismo">

## $f_r = \frac{1}{2 \pi \sqrt{L C}}$
</div>

... kde:
$f_r$ = **rezonanční** frekvence v $Hz$
$C$ = kapacita kondenzátoru ve $F$
$L$ = indukčnost cívky v $H$
</div>

</div>

---

# Rezonanční frekvence

<div class="dvojflex">
<div class="dvojmrizka">

<img class="obrazekdvoj2" src="openalt26/rcl/lc_.png"/>
<img class="obrazekdvoj2" src="openalt26/sin/lc_proud_proud.png"/>

</div>

<div>
<div class="velkepismo">

## $f_r = \frac{1}{2 \pi \sqrt{L C}}$
</div>

... kde:
$f_r$ = **rezonanční** frekvence v $Hz$
$C$ = kapacita kondenzátoru ve $F$
$L$ = indukčnost cívky v $H$
</div>

</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>


---

<div class="fotopopisek">
<img class="jedenuprostred" src="openalt26/rcl/rcl_tuzka.png"/>

## pasivní EMR stylus
</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>

---

<div class="fotopopisek">
<img class="jedenuprostred" src="openalt26/fotki/digitizer_vrstvy.jpg"/>
<p class="popisek">
Zdroj obrázku: https://business.hanvonugee.com/uploads/20250418/481d39d82a8dbc8f6db8d70a41a88daf.jpg
</p>
</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>

---

<div class="fotopopisek">
<img class="jedenuprostred" src="openalt26/fotki/samsung.png"/>
<p class="popisek">
Zdroj obrázku: https://business.hanvonugee.com/uploads/20250418/481d39d82a8dbc8f6db8d70a41a88daf.jpg
</p>
</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>

---

# Snímání polohy stylusu 

<div class="flexrow">
<img class="stajlung5" src="openalt26/fotki/mrizka_ja.jpg"/>
<div class="mrizkasest2">
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/x4.png"/>

Horizontální 1
</div>
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/x5.png"/>

Horizontální 2
</div>
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/x6.png"/>

Horizontální 3
</div>
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/y1.png"/>

Vertikální 1
</div>
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/y2.png"/>

Vertikální 2
</div>
<div class="fotopopisek">
<img class="stajlung5" src="openalt26/fotki/anteny/y3.png"/>

Vertikální 3
</div>
</div>
</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>

---

# Jak funguje přítlak a stisk tlačítek
<div class="flexrow">
<div class="flexcol">

<div class="flexrow">
<div class="fotopopisek">
<img class="stajlung" src="openalt26/fotki/l_var.webp"/>
<p class="popisek">
Zdroj obrázku: imimg.com
</p>
</div>

<div class="fotopopisek">
<img class="stajlung" src="openalt26/fotki/nib.jpg"/>
<p class="popisek">
Zdroj obrázku: media-amazon.com
</div>
</div>

Přítlak - **variabilní** cívka / kondenzátor
</div>

<div class="flexcol">
<div class="fotopopisek">
<img class="stajlung" src="openalt26/rcl/tlacitko.png"/>
<p class="popisek">
</p>
</div>

Tlačítka - posun $f_r$
</div>

</div>

<div class="dolnorovnice">

$f_r = \frac{1}{2 \pi \sqrt{L C}}$

</div>

---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem

<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>


---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- EMR DIGITIZÉR = vrstva komunikující se stylusem

<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>



---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem
- Zde dříve něco bylo, ale bude to přeskočeno



<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>



---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno


<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>



---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno

<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>



---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno

<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>



---

# technologie EMR

<div class="flexrow">

- Wacom 1987 [<sup>[1]</sup>](https://cs.wikipedia.org/wiki/Wacom#Bez_displeje)
- DIGITIZÉR = vrstva komunikující se stylusem
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno
- Zde dříve něco bylo, ale bude to přeskočeno

<div class="dvojflex_col">
<img class="stajlung" src="openalt26/fotki/tech/digitizer_waacom_tech.jpg"/>
</div>
</div>
<p class="vodoznak">
Prezentace neslouží k propagaci konkrétních značek.
</p>


---