class SiteMenu extends HTMLElement {
  connectedCallback() {
    // Zjištění názvu aktuální stránky z URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    this.innerHTML = `
    <input type="checkbox" id="m" class="no-checkbox" />
    <label for="m" class="menu">
      <div class="round-menu-holder">
        <img class="logo-image-mobile" src="images/logo.png" alt="logo" />
        <h1 class="name-phone">Robin Josef Šafařík</h1>
      </div>
      <div class="hamburger-menu">
        <img class="menu-text-hamburger" src="images/icons8-menu-50.png" alt="menu" />
      </div>
    </label>

    <nav class="menu-box">
      <div class="menu-top-two-parts">
        <div class="menu-top">
          <img class="logo-image" src="images/logo.png" alt="logo" />
          <h1>Robin Josef Šafařík</h1>
        </div>
        <div class="line-separating"></div>
        <a href="index.html" class="button-en">CZ</a>
        <button class="button-cz">EN</button>
      </div>

      <div class="menu-center">
        ${this.createNavItem("about-en.html", "About", currentPage)}
        ${this.createNavItem("projects-en.html", "Projects", currentPage)}
        <!-- ${this.createNavItem("prednasky-cz.html", "Lectures (CZ)", currentPage)} -->
        ${this.createNavItem("contact-en.html", "Contact", currentPage)}
      </div>

      <div class="menu-bottom">
        <div class="R-track">
          <img class="R-track" src="images/r-track-hole.png" alt="resistor" />
        </div>
        <div class="square-holder-pins">
          <div class="pad-text">+</div>
          <div class="pad-text">-</div>
          <div class="pad-menu-minus"></div>
          <div class="pad-menu-plus"></div>
        </div>
        <!-- <a href="update-logs.html" class="update-logs">Update logs</a> -->
        <div class="hole-round"></div>
      </div>
    </nav>
    `;
  }

  createNavItem(url, text, currentPage) {
    const isActive = currentPage === url;

    // Pokud je stránka AKTIVNÍ, obalíme LEDky do .wrapper a přidáme rozsvícenou .led-on-indicating
    if (isActive) {
      return `
        <a href="${url}" class="title-and-image">
          <div class="menu-text">${text}</div>
          <div class="wrapper">
            <img class="led-on-indicating" src="images/led-on-trace.png" alt="LED on" />
            <img class="small-flat-led-menu" src="images/led-off-trace.png" alt="LED off" />
          </div>
          <img class="overlap-led-none" src="images/led-on-trace.png" alt="LED hover" />
        </a>
      `;
    }

    // Pokud NEJDE o aktivní stránku, vykreslí se standardní zhaslá LEDka
    return `
      <a href="${url}" class="title-and-image">
        <div class="menu-text">${text}</div>
        <img class="small-flat-led-menu" src="images/led-off-trace.png" alt="LED off" />
        <img class="overlap-led" src="images/led-on-trace.png" alt="LED hover" />
      </a>
    `;
  }
}

customElements.define("site-menu", SiteMenu);