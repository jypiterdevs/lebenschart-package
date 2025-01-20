(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.searchable-dropdown{position:relative;z-index:auto}.searchable-dropdown:focus{outline:inherit}.selected-container{position:relative;display:flex;align-items:center;height:100%}.search-input{height:100%;flex-grow:1;cursor:pointer;display:flex;align-items:center;justify-content:space-between;border:none;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;color:inherit!important}.search-input:focus{outline:none}.search-input::placeholder{color:#888}.dropdown-arrow{font-size:.8rem;margin-left:10px;color:#343a40}.dropdown-arrow:after{content:"▼"}.searchable-dropdown.open .dropdown-arrow:after{content:"▲"}.dropdown-container{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;margin-top:4px;box-shadow:0 2px 8px #0000001a;display:none;z-index:1000}.searchable-dropdown.open .dropdown-container{display:block}.options-list{max-height:200px;overflow-y:auto;padding:0;margin:0;list-style:none}.options-list li{padding:8px 15px;cursor:pointer;transition:background-color .2s;color:#213547}.options-list li:hover{background-color:#f3f4f6}.options-list::-webkit-scrollbar{width:6px}.options-list::-webkit-scrollbar-track{background:#f1f1f1}.options-list::-webkit-scrollbar-thumb{background:#888;border-radius:3px}.options-list::-webkit-scrollbar-thumb:hover{background:#555}@media (prefers-color-scheme: dark){.selected-option{background:#1a1a1a;color:#ffffffde;border-color:#333}.dropdown-container{background:#1a1a1a;border-color:#333}.search-input{background:#1a1a1a;color:#ffffffde;border-bottom-color:#333}.search-input::placeholder{color:#666}.options-list li{color:#ffffffde}.options-list li:hover{background-color:#2a2a2a;color:#646cff}}.phone-input-container{position:relative;width:100%}.phone-input-wrapper{position:relative;display:flex;overflow:hidden}.country-selector{display:flex;align-items:center;padding:auto;border:none;cursor:pointer;background-color:transparent}.country-selector:hover{background-color:#f3f4f6}.country-flag{margin-right:.25rem}.country-code{font-size:.875rem;color:#4b5563}.phone-number-input{flex:1;border:none;outline:none;width:100%;margin-left:10px}.country-option{width:100%;padding:.5rem 1rem;text-align:left;border:none;background:none;display:flex;align-items:center;gap:.5rem;cursor:pointer}.country-option:hover{background-color:#f9fafb}.country-name{font-size:.875rem;color:#6b7280}.country-dropdown-container{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;margin-top:4px;box-shadow:0 2px 8px #0000001a;display:none;z-index:1000;overflow:auto;height:200px}.pac-container{margin-top:4px}.pac-item{padding:8px 15px;border:none}.pac-logo:after{display:none}.pac-icon{background-image:url(https://developer.allabouthumandesign.de/static/icons/location-pin.svg)!important;background-repeat:no-repeat;background-position:0 0;background-size:14px 18px}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
const c = {
  name: {
    required: "Feld ist erforderlich",
    minLength: "Name benötigt mindestens 2 Zeichen",
    maxLength: "Name darf maximal 50 Zeichen enthalten"
  },
  day: {
    required: "Feld ist erforderlich"
  },
  month: {
    required: "Feld ist erforderlich"
  },
  year: {
    required: "Feld ist erforderlich"
  },
  time: {
    required: "Feld ist erforderlich",
    format: "Ungültiges Zeitformat"
  },
  date: {
    invalid: "Datum ist ungültig"
  },
  location: {
    required: "Feld ist erforderlich",
    invalid: "Bitte wähle eine gültige Stadt aus den Vorschlägen"
  },
  email: {
    required: "Feld ist erforderlich",
    invalid: "Ungültige E-Mail-Adresse"
  },
  phone: {
    required: "Feld ist erforderlich",
    invalid: "Ungültige Telefonnummer"
  }
}, U = {
  name: C,
  firstname: C,
  lastname: C,
  day: M,
  month: _,
  year: z,
  date: G,
  time: N,
  customTime: N,
  location: x,
  email: H,
  phone: j
};
function P(t) {
  return U[t] || null;
}
const f = {
  CLOSE: "dropdown:close",
  OPEN: "dropdown:open",
  CHANGE: "dropdown:change"
}, b = {
  CHANGE: "time:change",
  BLUR: "time:blur",
  ERROR: "time:error"
}, y = {
  VALID: "chartForm:valid",
  INVALID: "chartForm:invalid"
}, v = {
  PLACE_CHANGED: "google:place_changeg",
  PLACE_DELETED: "google:place_deleted"
}, E = {
  CHANGE: "phone:change",
  FOCUSOUT: "phone:focusout"
};
function D(t, e = {}, n = !0) {
  return new CustomEvent(t, {
    bubbles: n,
    detail: e
  });
}
function d(t, e, n = {}) {
  if (!t) {
    console.error(`Cannot dispatch event '${e}' on an undefined target.`);
    return;
  }
  const r = D(e, n);
  t.dispatchEvent(r);
}
function C(t) {
  return t.value.trim() === "" ? c.name.required : t.value.length < 2 ? c.name.minLength : t.value.length > 50 ? c.name.maxLength : null;
}
function M(t) {
  return t.value.trim() === "" ? c.day.required : null;
}
function _(t) {
  return t.value.trim() === "" ? c.month.required : null;
}
function z(t) {
  return t.value.trim() === "" ? c.year.required : null;
}
function N(t) {
  return t.value.trim() === "" ? c.time.required : /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(t.value) ? null : c.time.format;
}
function G(t) {
  return /^\d{4}-\d{2}-\d{2}$/.test(t.value) ? null : c.date.invalid;
}
function V(t, e, n) {
  const r = parseInt(t.value, 10), o = parseInt(e.value, 10) - 1, i = parseInt(n.value, 10), s = new Date(i, o, r);
  return s.getFullYear() !== i || s.getMonth() !== o || s.getDate() !== r ? c.date.invalid : null;
}
function x(t) {
  return t.value.trim() === "" ? c.location.required : t.getAttribute("place-changed") !== "true" ? c.location.invalid : null;
}
function H(t) {
  return t.value.trim() === "" ? c.email.required : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value) ? null : c.email.invalid;
}
function j(t) {
  const e = t.value.trim();
  return !e || e === "+" ? c.phone.required : /^\+\d{1,4}\d{6,15}$/.test(e) ? null : c.phone.invalid;
}
function B(t) {
  const e = t.querySelectorAll("input, select"), n = [];
  return e.forEach((r) => {
    const o = r.getAttribute("chart-form"), i = P(o);
    if (i) {
      const s = i(r);
      s && n.push({ field: r, error: s });
    } else
      console.warn(`No validation function defined for type: ${o}`);
  }), n.length === 0 ? d(t, y.VALID, { form: t }) : d(t, y.INVALID, { form: t, errors: n }), n;
}
function K(t) {
  const e = (n) => {
    if (t.every((o) => o.value.trim() !== "")) {
      const o = V(...t);
      o ? t.forEach((i) => {
        const s = i.closest('[chart-form="input-wrapper"]');
        O(s, o, i);
      }) : t.forEach((i) => {
        const s = i.closest('[chart-form="input-wrapper"]');
        R(s, i);
      });
    }
  };
  t.forEach((n) => {
    n.addEventListener("dropdown:change", e);
  });
}
function u(t, e) {
  const n = () => {
    t.closest("form");
    let r = null;
    const o = P(e);
    o && (r = o(t));
    const i = t.closest('[chart-form="input-wrapper"]');
    if (!i)
      throw new Error('Field must be inside a div with the attribute chart-form="input-wrapper"');
    r ? O(i, r, t) : R(i, t);
  };
  e !== "location" && t.addEventListener("input", n), t.addEventListener("focusout", function() {
    n();
  }), t.addEventListener(f.CLOSE, function() {
    n();
  }), t.addEventListener(f.CHANGE, function() {
    n();
  }), e === "location" && (t.addEventListener(v.PLACE_CHANGED, function() {
    n();
  }), t.addEventListener(v.PLACE_DELETED, function() {
    n();
  })), t.addEventListener(E.CHANGE, function() {
    console.log("phone change", t.value), n();
  }), t.addEventListener(E.FOCUSOUT, function() {
    console.log("phone focusout"), n();
  });
}
function W(t) {
  const e = B(t);
  if (e.length > 0)
    e.forEach(({ field: n, error: r }) => {
      const o = n.closest('[chart-form="input-wrapper"]');
      O(o, r, n);
    });
  else
    return !0;
  return !1;
}
function O(t, e, n) {
  t.classList.add("error"), t.classList.remove("success"), n.classList.add("error"), n.classList.remove("success");
  const r = t.getAttribute("chart-form-error-class") || "input-error";
  let o = t.querySelector('[chart-form="input-error"]');
  o || (o = document.createElement("div"), o.classList.add(r), o.setAttribute("chart-form", "input-error"), t.appendChild(o)), o.textContent = e;
}
function R(t, e) {
  t.classList.remove("error"), t.classList.add("success"), e.classList.remove("error"), e.classList.add("success"), e.selectize && (e.selectize.$wrapper[0].classList.remove("error"), e.selectize.$wrapper[0].classList.add("success"));
  const n = t.querySelector('[chart-form="input-error"]');
  n && n.remove();
}
function Y(t) {
  t.addEventListener("input", (e) => {
    e.target.value = A(e.target.value);
  });
}
function J(t) {
  t.addEventListener("input", (e) => {
    e.target.value = A(e.target.value);
  });
}
function Z(t) {
  t.addEventListener("input", (e) => {
    e.target.value = A(e.target.value);
  });
}
function A(t) {
  return t.split(" ").map((e) => {
    if (!e) return "";
    const n = [...e][0], r = e.slice(n.length);
    return n.toUpperCase() + r.toLowerCase();
  }).join(" ");
}
const X = {
  placeholder: "Select an option",
  searchPlaceholder: "Search...",
  noResultsText: "Kein Ergebnis",
  onChange: null,
  onClose: null,
  options: null
};
function Q(t, e) {
  const n = e.className, r = document.createElement("div");
  r.className = `searchable-dropdown ${n}`;
  const o = document.createElement("div");
  o.className = "selected-container";
  const i = document.createElement("input");
  i.type = "text", i.className = "search-input", i.placeholder = t.placeholder, o.appendChild(i);
  const s = document.createElement("div");
  s.className = "dropdown-arrow", o.appendChild(s);
  const a = document.createElement("div");
  a.className = "dropdown-container";
  const l = document.createElement("ul");
  return l.className = "options-list", a.appendChild(l), r.appendChild(o), r.appendChild(a), {
    wrapper: r,
    searchInput: i,
    dropdownArrow: s,
    dropdown: a,
    optionsList: l
  };
}
class F {
  constructor(e, n = {}) {
    e.dataset.dropdownInitialized !== "true" && (this.originalSelect = e, this.config = { ...X, ...n }, this.isOpen = !1, this.selectedOption = null, this.shouldDispatchClose = !0, this.isUserTyping = !1, this.init(), this.originalSelect.dataset.dropdownInitialized = "true");
  }
  init() {
    const e = Q(this.config, this.originalSelect);
    Object.assign(this, e), this.setupEventListeners(), this.setupClassObserver(), this.config.options && this.config.options.length > 0 ? this.updateOptions(this.config.options) : console.warn("No options provided for the dropdown."), this.renderInitialState(), this.originalSelect.style.display = "none", this.originalSelect.parentNode.insertBefore(this.wrapper, this.originalSelect);
  }
  setupClassObserver() {
    new MutationObserver((n) => {
      for (const r of n)
        r.attributeName === "class" && this.syncClasses();
    }).observe(this.originalSelect, { attributes: !0 });
  }
  syncClasses() {
    const e = this.originalSelect.classList;
    this.wrapper.className = `searchable-dropdown ${Array.from(e).join(" ")}`;
  }
  renderInitialState() {
    this.renderOptions();
    const e = this.config.options.find(
      (n) => n.value === this.originalSelect.value
    );
    e && this.setSelectedOption(e);
  }
  setupEventListeners() {
    this.dropdownArrow.addEventListener("click", () => {
      this.isUserTyping = !1, this.toggleDropdown();
    }), this.searchInput.addEventListener("input", (e) => {
      this.isUserTyping = !0;
      const n = e.target.value.trim();
      if (!n) {
        this.clearSelection(), this.closeDropdown();
        return;
      }
      this.isOpen || this.openDropdown(), this.handleSearch(n);
    }), this.searchInput.addEventListener("focus", () => {
      this.isOpen || this.openDropdown();
      const e = this.searchInput.closest(".searchable-dropdown");
      e && e.classList.add("focused");
    }), this.searchInput.addEventListener("blur", () => {
      const e = this.searchInput.closest(".searchable-dropdown");
      e && e.classList.remove("focused");
    }), this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Tab" && this.isOpen && this.optionsList.children.length > 0) {
        const n = this.optionsList.querySelector("li:not(.no-results)");
        if (n) {
          const r = this.config.options.find(
            (o) => o.label === n.textContent
          );
          r && this.handleOptionSelect(r);
        }
      }
    }), document.addEventListener("click", (e) => {
      this.wrapper.contains(e.target) || (this.closeDropdown(), !this.selectedOption && this.searchInput.value && (this.searchInput.value = ""));
    });
  }
  updateOptions(e) {
    if (!Array.isArray(e) || e.length === 0) {
      console.error("No valid options provided.");
      return;
    }
    this.originalSelect.innerHTML = "";
    const n = document.createElement("option");
    n.value = "", n.text = this.config.placeholder || "Select an option", this.originalSelect.appendChild(n), e.forEach((r) => {
      const o = document.createElement("option");
      o.value = r.value || "", o.text = r.label || "", this.originalSelect.appendChild(o);
    }), this.renderOptions();
  }
  setSelectedOption(e) {
    this.selectedOption = e, this.isUserTyping = !1, this.originalSelect.value = e.value, this.searchInput.value = e.label, this.config.onChange && this.config.onChange(e.value, e.label), d(this.originalSelect, f.CHANGE, {
      value: e.value,
      label: e.label
    }), this.shouldDispatchClose = !1;
  }
  toggleDropdown() {
    this.isOpen ? this.closeDropdown() : this.openDropdown();
  }
  openDropdown() {
    this.isOpen || (this.isOpen = !0, this.wrapper.classList.add("open"), this.isUserTyping ? this.renderOptions(this.searchInput.value) : this.renderOptions(""), d(this.originalSelect, f.OPEN));
  }
  closeDropdown() {
    this.isOpen && (this.isOpen = !1, this.isUserTyping = !1, this.wrapper.classList.remove("open"), this.selectedOption && !this.isUserTyping && (this.searchInput.value = this.selectedOption.label), this.shouldDispatchClose && d(this.originalSelect, f.CLOSE), this.shouldDispatchClose = !0);
  }
  handleSearch(e) {
    this.renderOptions(e);
  }
  renderOptions(e = "") {
    if (this.optionsList.innerHTML = "", this.config.options.forEach((n) => {
      if (!e || n.label.toLowerCase().includes(e.toLowerCase())) {
        const r = document.createElement("li");
        r.textContent = n.label, r.addEventListener("click", () => this.handleOptionSelect(n)), this.optionsList.appendChild(r);
      }
    }), this.optionsList.children.length === 0 && this.config.noResultsText) {
      const n = document.createElement("li");
      n.textContent = this.config.noResultsText, n.className = "no-results", this.optionsList.appendChild(n);
    }
  }
  handleOptionSelect(e) {
    this.setSelectedOption(e), this.closeDropdown();
  }
  clearSelection() {
    this.selectedOption = null, this.searchInput.value = "", this.originalSelect.value = "", this.searchInput.dataset.prevValue = "", this.config.onChange && this.config.onChange("", ""), d(this.originalSelect, f.CHANGE);
  }
}
function ee(t) {
  t.setAttribute("type", "date");
}
function te(t) {
  new F(t, {
    placeholder: "Tag auswählen...",
    options: re()
  });
}
function ne(t) {
  new F(t, {
    placeholder: "Monat auswählen...",
    options: ie()
  });
}
function oe(t) {
  new F(t, {
    placeholder: "Jahr auswählen...",
    options: se()
  });
}
const re = () => Array.from({ length: 31 }, (t, e) => ({
  value: String(e + 1),
  label: String(e + 1)
})), ie = () => [
  { value: "1", label: "Januar" },
  { value: "2", label: "Februar" },
  { value: "3", label: "März" },
  { value: "4", label: "April" },
  { value: "5", label: "Mai" },
  { value: "6", label: "Juni" },
  { value: "7", label: "Juli" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "Oktober" },
  { value: "11", label: "November" },
  { value: "12", label: "Dezember" }
], se = () => Array.from({ length: 121 }, (t, e) => {
  const n = (/* @__PURE__ */ new Date()).getFullYear() - e + 1;
  return {
    value: String(n),
    label: String(n)
  };
});
function ae(t) {
  [46, 8, 9, 27, 13].indexOf(t.keyCode) !== -1 || // Allow: Ctrl+A, Command+A
  t.keyCode === 65 && (t.ctrlKey === !0 || t.metaKey === !0) || // Allow: home, end, left, right, down, up
  t.keyCode >= 35 && t.keyCode <= 40 || (t.shiftKey || t.keyCode < 48 || t.keyCode > 57) && (t.keyCode < 96 || t.keyCode > 105) && t.preventDefault();
}
function T(t) {
  if (t = t.replace(/\D/g, ""), t.length <= 2)
    return t;
  const e = t.substring(0, 2), n = t.substring(2, 4);
  return t.length <= 4 ? `${e}:${n}` : `${e}:${n}`;
}
function L(t) {
  if (!t || t.length !== 5) return !1;
  const [e, n] = t.split(":").map(Number);
  return e >= 0 && e <= 23 && n >= 0 && n <= 59;
}
class ce {
  constructor(e, n = {}) {
    this.element = e, this.config = {
      onChange: n.onChange || null,
      placeholder: n.placeholder || "HH:MM"
    }, this.init();
  }
  init() {
    this.setupInput(), this.setupEventListeners();
  }
  setupInput() {
    this.element.setAttribute("placeholder", this.config.placeholder), this.element.setAttribute("maxlength", 5);
  }
  setupEventListeners() {
    this.element.addEventListener("input", (e) => this.handleInput(e)), this.element.addEventListener("keydown", (e) => ae(e)), this.element.addEventListener("blur", () => this.handleBlur());
  }
  handleInput(e) {
    console.log("handleInput triggered");
    const n = e.target, r = n.value.replace(/\D/g, ""), o = T(r);
    if (o !== n.value && (n.value = o), o.length === 5) {
      const i = L(o);
      this.toggleValidState(i), i && this.config.onChange && this.config.onChange(o), d(n, b.CHANGE, {
        value: o,
        isValid: i
      });
    }
  }
  handleBlur() {
    const e = this.element.value;
    if (e && e.length === 5) {
      const n = L(e);
      this.toggleValidState(n), d(this.element, b.BLUR, {
        value: e,
        isValid: n
      });
    }
  }
  toggleValidState(e) {
    this.element.classList.toggle("error", !e), e || d(this.element, b.ERROR);
  }
  getValue() {
    return this.element.value;
  }
  setValue(e) {
    const n = T(e.replace(/\D/g, ""));
    this.element.value = n;
    const r = L(n);
    this.toggleValidState(r);
  }
  clear() {
    this.element.value = "", this.element.classList.remove("error");
  }
}
function le(t) {
  t.setAttribute("type", "time");
}
function de(t) {
  new ce(t, {
    placeholder: "--:--"
  });
}
const ue = {
  // Google AutoComplete API 
  GOOGLE_API_KEY: "AIzaSyA_rSc_3_CaWrNMmU4fv9eYL6XpGKAbWGI",
  GOOGLE_API_URL: "https://maps.googleapis.com/maps/api/js?libraries=places",
  // Lebnenschart API 
  CHART_FORM_URL: "https://www.allabouthumandesign.de/chart/meine-chart",
  CHART_API_URL: "https://dev.lebenschart.de/api/v1/chart/create"
}, $ = {
  styles: [],
  scripts: [
    "https://code.jquery.com/jquery-3.7.1.min.js"
  ]
};
function he(t) {
  return new Promise((e, n) => {
    const r = document.createElement("link");
    r.rel = "stylesheet", r.href = t, r.onload = e, r.onerror = n, document.head.appendChild(r);
  });
}
function pe(t) {
  return new Promise((e, n) => {
    const r = document.createElement("script");
    r.src = t, r.async = !0, r.onload = e, r.onerror = n, document.head.appendChild(r);
  });
}
async function me() {
  try {
    await Promise.all($.styles.map(he));
    for (const t of $.scripts)
      await pe(t);
    return !0;
  } catch (t) {
    return console.error("Failed to load dependencies:", t), !1;
  }
}
function fe(t) {
  return new Promise((e, n) => {
    if (window.google && window.google.maps) {
      e();
      return;
    }
    const r = document.querySelector('script[src*="maps.googleapis.com"]');
    if (r) {
      r.onload = e, r.onerror = n;
      return;
    }
    const o = document.createElement("script");
    o.src = `https://maps.googleapis.com/maps/api/js?key=${t}&libraries=places&callback=initMap`, o.async = !0, o.defer = !0, o.onload = e, o.onerror = n, document.head.appendChild(o);
    const i = () => {
      console.log("Google Maps API loaded");
    };
    window.initMap = i;
  });
}
function g(t) {
  const e = document.createElement("input");
  return e.type = "hidden", e.name = t, e.autocomplete = "off", e;
}
function k(t, e, n, r, o) {
  t.value = "", e.value = "", n.value = "", r.value = "", o.value = "", t.setAttribute("place-changed", "false"), d(t, v.PLACE_DELETED, { value: t.value });
}
function S(t, e) {
  const n = t.find((r) => r.types.includes(e));
  return n ? n.long_name : "";
}
async function ge(t) {
  if (await fe(ue.GOOGLE_API_KEY), t.dataset.locationInitialized === "true") {
    console.warn("Location field already initialized:", t);
    return;
  }
  t.dataset.locationInitialized = "true";
  const e = g("location-city"), n = g("location-country"), r = g("location-lat"), o = g("location-lng");
  if (t.parentNode.append(e, n, r, o), !window.google || !google.maps.places) {
    console.error("Google Maps API not loaded"), t.disabled = !0, t.placeholder = "Google Maps API not loaded";
    return;
  }
  const i = new google.maps.places.Autocomplete(t, {
    types: ["(cities)"]
  });
  t.addEventListener("input", (s) => {
    s.inputType === "deleteContentBackward" && k(t, e, n, r, o);
  }), i.addListener("place_changed", () => {
    const s = i.getPlace();
    if (!s.geometry) {
      k(t, e, n, r, o);
      return;
    }
    const a = s.address_components, l = S(a, "locality") || S(a, "administrative_area_level_1"), m = S(a, "country");
    e.value = l || s.name, n.value = m || "Unknown", r.value = s.geometry.location.lat(), o.value = s.geometry.location.lng(), t.setAttribute("place-changed", "true"), d(t, v.PLACE_CHANGED, { value: t.value });
  });
}
function ye(t) {
  t.setAttribute("type", "email");
}
const I = [
  { code: "+49", country: "🇩🇪", name: "Germany" },
  { code: "+43", country: "🇦🇹", name: "Austria" },
  { code: "+41", country: "🇨🇭", name: "Switzerland" },
  { code: "+1", country: "🇺🇸", name: "United States" },
  { code: "+1", country: "🇨🇦", name: "Canada" },
  { code: "+44", country: "🇬🇧", name: "United Kingdom" },
  { code: "+91", country: "🇮🇳", name: "India" },
  { code: "+86", country: "🇨🇳", name: "China" },
  { code: "+81", country: "🇯🇵", name: "Japan" },
  { code: "+33", country: "🇫🇷", name: "France" },
  { code: "+39", country: "🇮🇹", name: "Italy" },
  { code: "+7", country: "🇷🇺", name: "Russia" },
  { code: "+55", country: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "🇲🇽", name: "Mexico" },
  { code: "+34", country: "🇪🇸", name: "Spain" },
  { code: "+82", country: "🇰🇷", name: "South Korea" },
  { code: "+61", country: "🇦🇺", name: "Australia" },
  { code: "+31", country: "🇳🇱", name: "Netherlands" },
  { code: "+48", country: "🇵🇱", name: "Poland" },
  { code: "+46", country: "🇸🇪", name: "Sweden" },
  { code: "+32", country: "🇧🇪", name: "Belgium" },
  { code: "+45", country: "🇩🇰", name: "Denmark" },
  { code: "+47", country: "🇳🇴", name: "Norway" },
  { code: "+358", country: "🇫🇮", name: "Finland" },
  { code: "+351", country: "🇵🇹", name: "Portugal" },
  { code: "+353", country: "🇮🇪", name: "Ireland" },
  { code: "+30", country: "🇬🇷", name: "Greece" },
  { code: "+36", country: "🇭🇺", name: "Hungary" },
  { code: "+420", country: "🇨🇿", name: "Czech Republic" },
  { code: "+65", country: "🇸🇬", name: "Singapore" },
  { code: "+64", country: "🇳🇿", name: "New Zealand" },
  { code: "+27", country: "🇿🇦", name: "South Africa" },
  { code: "+971", country: "🇦🇪", name: "United Arab Emirates" },
  { code: "+972", country: "🇮🇱", name: "Israel" },
  { code: "+966", country: "🇸🇦", name: "Saudi Arabia" },
  { code: "+20", country: "🇪🇬", name: "Egypt" },
  { code: "+886", country: "🇹🇼", name: "Taiwan" },
  { code: "+84", country: "🇻🇳", name: "Vietnam" },
  { code: "+62", country: "🇮🇩", name: "Indonesia" },
  { code: "+60", country: "🇲🇾", name: "Malaysia" }
], ve = {
  placeholder: "Telefonnummer eingeben...",
  onChange: null,
  onClose: null,
  options: null
};
class Ee {
  constructor(e, n = {}) {
    e.dataset.phoneInputInitialized !== "true" && (this.originalInput = e, this.config = { ...ve, ...n }, this.selectedCountry = I[0], this.localNumber = this.originalInput.value.replace(/\D/g, ""), this.isOpen = !1, this.init(), this.originalInput.dataset.phoneInputInitialized = "true");
  }
  init() {
    this.createUI(), this.setupClassObserver(), this.setupEventListeners(), this.updateOriginalInput(), this.originalInput.style.display = "none", this.originalInput.parentNode.insertBefore(this.container, this.originalInput);
  }
  createUI() {
    this.container = document.createElement("div"), this.container.className = "phone-input-container", this.container.innerHTML = `
      <div class="phone-input-wrapper">
        <button type="button" class="country-selector">
          <span class="country-flag">${this.selectedCountry.country}</span>
          <span class="country-code">${this.selectedCountry.code}</span>
        </button>
        <input type="tel" class="phone-number-input" placeholder="${this.config.placeholder}" value="${this.localNumber}" />
      </div>
      <div class="country-dropdown-container"></div>
    `, this.countrySelector = this.container.querySelector(".country-selector"), this.phoneInput = this.container.querySelector(".phone-number-input"), this.dropdownContainer = this.container.querySelector(".country-dropdown-container");
  }
  setupClassObserver() {
    this.syncClasses(), new MutationObserver((n) => {
      for (const r of n)
        r.attributeName === "class" && this.syncClasses();
    }).observe(this.originalInput, { attributes: !0 });
  }
  syncClasses() {
    const e = Array.from(this.originalInput.classList).filter((n) => n !== "hidden");
    this.container.className = `phone-input-container ${e.join(" ")}`;
  }
  setupEventListeners() {
    this.countrySelector.addEventListener("click", (e) => {
      e.stopPropagation(), this.toggleDropdown();
    }), this.phoneInput.addEventListener("input", (e) => {
      const n = e.target.value.replace(/\D/g, "");
      n.length <= 10 && (this.localNumber = n, this.updateOriginalInput());
    }), this.phoneInput.addEventListener("focusout", () => {
      this.handlefocusout();
    }), this.phoneInput.addEventListener("focus", () => {
      const e = this.container;
      e && e.classList.add("focused");
    }), this.phoneInput.addEventListener("blur", () => {
      const e = this.container;
      e && e.classList.remove("focused");
    }), document.addEventListener("click", () => {
      this.isOpen && this.closeDropdown();
    });
  }
  handlefocusout() {
    d(this.originalInput, E.FOCUSOUT, {
      value: this.originalInput.value,
      countryCode: this.selectedCountry
    });
  }
  toggleDropdown() {
    this.isOpen ? this.closeDropdown() : this.openDropdown();
  }
  openDropdown() {
    this.isOpen = !0, this.renderDropdown(), this.dropdownContainer.style.display = "block";
  }
  closeDropdown() {
    this.isOpen = !1, this.dropdownContainer.innerHTML = "", this.dropdownContainer.style.display = "none";
  }
  renderDropdown() {
    this.dropdownContainer.innerHTML = I.map(
      (e) => `
      <button type="button" class="country-option">
        <span class="country-flag">${e.country}</span>
        <span class="country-code">${e.code}</span>
        <span class="country-name">${e.name}</span>
      </button>
    `
    ).join(""), this.dropdownContainer.querySelectorAll(".country-option").forEach((e, n) => {
      e.addEventListener("click", () => {
        this.selectedCountry = I[n], this.updateUI(), this.updateOriginalInput();
      });
    });
  }
  updateUI() {
    this.countrySelector.innerHTML = `
      <span class="country-flag">${this.selectedCountry.country}</span>
      <span class="country-code">${this.selectedCountry.code}</span>
    `, this.isOpen && this.renderDropdown();
  }
  updateOriginalInput() {
    this.originalInput.value = `${this.selectedCountry.code}${this.localNumber}`, d(this.originalInput, E.CHANGE, {
      value: this.originalInput.value,
      countryCode: this.selectedCountry
    });
  }
}
function we(t) {
  new Ee(t, {
    placeholder: "Telefonnummer eingeben..."
  });
}
function h(t) {
  return document.querySelectorAll(`[chart-form="${t}"]`);
}
async function be(t, e, n) {
  try {
    const r = new Date(t), o = Math.floor(r.getTime() / 1e3), s = `https://vip.timezonedb.com/v2.1/get-time-zone?key=9XF0C970358P&format=json&by=position&lat=${e}&lng=${n}&time=${o}`, a = await fetch(s);
    return a.status === 200 ? (await a.json()).zoneName || "" : null;
  } catch (r) {
    return console.error(`Error fetching timezone info: ${r}`), null;
  }
}
class q {
  constructor(e) {
    if (!e)
      throw new Error("Form element not provided");
    this.form = e, this.init = this.init.bind(this), this.handleSubmit = this.handleSubmit.bind(this), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", this.init) : this.init();
  }
  async handleSubmit(e) {
    e.preventDefault();
    const n = W(this.form), r = this.form.dataset.submitAction === "true";
    if (n)
      this.form.dispatchEvent(D(y.VALID, { form: this.form })), this.clearError(this.form);
    else {
      this.form.dispatchEvent(D(y.INVALID, { form: this.form })), this.showError(this.form, "Formular ist nicht korrekt ausgefüllt");
      return;
    }
    if (r) {
      const o = new FormData(this.form), i = Object.fromEntries(o.entries());
      console.log("Form data:", i);
      const s = `${i.year}-${i.month}-${i.day}T${i.time}`;
      console.log("Date string:", s);
      try {
        const a = await be(s, i["location-lat"], i["location-lng"]), l = new URL(this.form.action), m = new URLSearchParams({
          n: i.name,
          d: `${i.day}-${i.month}-${i.year}T${i.time}`,
          l: `${i["location-city"]}, ${i["location-country"]}`,
          lat: i["location-lat"],
          lng: i["location-lng"],
          tz: a,
          f: "pytz"
        });
        l.search = m.toString(), this.form.action = l.toString(), window.location.href = this.form.action;
      } catch (a) {
        console.error(a), this.showError(this.form, "Fehler");
      }
    } else {
      console.log("Form submit prevented");
      const o = new FormData(this.form), i = Object.fromEntries(o.entries());
      console.log("Form data:", i);
    }
  }
  showError(e, n) {
    let r = e.querySelector(".form-error-message");
    r || (r = document.createElement("div"), r.classList.add("form-error-message"), r.textContent = n, e.appendChild(r)), r.textContent = n;
  }
  clearError(e) {
    const n = e.querySelector(".form-error-message");
    n && n.remove();
  }
  async init() {
    try {
      if (!await me())
        throw new Error("Failed to load required dependencies");
      if (this.form.dataset.initialized) {
        console.warn("Form already initialized:", this.form);
        return;
      }
      this.form.dataset.initialized = "true", this.form.setAttribute("novalidate", !0), this.form.addEventListener("submit", this.handleSubmit), this.initFields(this.form), this.form.dispatchEvent(new CustomEvent("chartFormInitialized"));
    } catch (e) {
      console.error("Error initializing chart forms:", e), this.form.dispatchEvent(new CustomEvent("chartFormError", { detail: e }));
    }
  }
  initFields(e) {
    h("name").forEach((o) => {
      Y(o), u(o, "name");
    }), h("firstname").forEach((o) => {
      J(o), u(o, "name");
    }), h("lastname").forEach((o) => {
      Z(o), u(o, "name");
    }), h("day").forEach((o) => {
      te(o), u(o, "day");
    }), h("month").forEach((o) => {
      ne(o), u(o, "month");
    }), h("year").forEach((o) => {
      oe(o), u(o, "year");
    }), h("time").forEach((o) => {
      le(o), u(o, "time");
    }), h("customTime").forEach((o) => {
      de(o), u(o, "customTime");
    }), h("date").forEach((o) => {
      ee(o), u(o, "date");
    }), h("location").forEach((o) => {
      ge(o), u(o, "location");
    }), h("email").forEach((o) => {
      ye(o), u(o, "email");
    }), h("phone").forEach((o) => {
      we(o), u(o, "phone");
    });
    const n = [
      e.querySelector('[chart-form="day"]'),
      e.querySelector('[chart-form="month"]'),
      e.querySelector('[chart-form="year"]')
    ];
    n.every((o) => o) && K(n), e.querySelectorAll("input").forEach((o) => {
      o.addEventListener("focus", () => {
        o.classList.add("focused");
      }), o.addEventListener("blur", () => {
        o.classList.remove("focused");
      });
    });
  }
}
class Ce {
  constructor() {
    this.centerColors = {
      0: "#e5cba9",
      1: "#e5cba9",
      2: "#bf8478",
      3: "#e5cba9",
      4: "#f2e8e4",
      5: "#E2BFB2",
      6: "#e5cba9",
      7: "#d9ddea",
      8: "#E2BFB2"
    }, this.colors = {
      design: "rgb(191, 132, 120)",
      personality: "rgb(16, 23, 47)"
    };
  }
  render(e) {
    this.renderCenters(e.chart.centers), this.renderVariables(e.chart.planets), this.renderConnections(e.chart.planets), this.renderProperties(e);
  }
  renderCenters(e) {
    Object.entries(e).forEach(([n, r]) => {
      if (r === 2) {
        const o = document.querySelector(`[data-center="${n}"]`);
        o && (o.style.fill = this.centerColors[n]);
      }
    });
  }
  renderVariables(e) {
    Object.entries({
      v1: [13, "base", "tone", "color"],
      v2: [15, "base", "tone", "color"],
      v3: [3, "base", "tone", "color"],
      v4: [0, "base", "tone", "color"]
    }).forEach(([r, [o, ...i]]) => {
      i.forEach((s) => {
        const a = document.querySelector(`[data-variable="${r}-${s}"]`);
        a && (a.textContent = e[o][s]);
      });
    });
  }
  renderConnections(e) {
    const n = document.querySelector('[data-chart="bodygraph"]');
    n && e.forEach((r) => {
      const o = this.colors.personality, i = this.colors.design, s = this.colors.background;
      n.querySelectorAll("[data-gate-line]").forEach((a) => {
        const l = a.getAttribute("data-gate-line"), m = a.getAttribute("data-gate-line-type"), w = a.id;
        if (console.log("Gate:", l, "Type:", m, "ID:", w), r.activation === 1) {
          if (l == r.gate && m === "personality")
            a.style.fill = o, a.style.stroke = o, a.style.strokeWidth = "1";
          else if (l == r.gate && m === "design")
            a.style.fill = o, a.style.stroke = o, a.style.strokeWidth = "1";
          else if (w === `g-${r.gate}`) {
            console.log("Gate:", r.gate), a.style.fill = "white";
            const p = document.getElementById(`c-${r.gate}`);
            p && (p.style.fill = s, p.style.stroke = s, p.style.strokeWidth = "1", p.style.opacity = 1);
          }
        } else if (r.activation === 0) {
          if (l == r.gate && a.style.fill === o)
            m === "design" && (a.style.fill = i, a.style.stroke = i, a.style.strokeWidth = "1");
          else if (l == r.gate)
            a.style.fill = i, a.style.stroke = i, a.style.strokeWidth = "1";
          else if (w === `g-${r.gate}`) {
            a.style.fill = "white";
            const p = document.getElementById(`c-${r.gate}`);
            p && (p.style.fill = s, p.style.stroke = s, p.style.strokeWidth = "1", p.style.opacity = 1);
          }
        }
      });
    });
  }
  renderProperties(e) {
    const n = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }, r = {
      local: new Date(e.meta.birthDate.local),
      utc: new Date(e.meta.birthDate.utc),
      design: new Date(e.meta.birthDate.design)
    };
    Object.entries(r).forEach(([o, i]) => {
      const s = document.querySelector(`[data-chart="date_${o}"]`);
      s && (s.textContent = `${i.toLocaleString("de-DE", n)} Uhr`);
    }), this.renderChartText(e);
  }
  renderChartText(e) {
    [
      "type",
      "strategy",
      "aura",
      "purpose",
      "authority",
      "lowerself",
      "higherself",
      "profile",
      "cross",
      "determination",
      "environment",
      "perspective",
      "motivation",
      "cognition"
    ].forEach((r) => {
      const o = document.querySelector(`[data-chart="${r}"]`);
      if (o && e.chart[r] !== void 0) {
        const i = e.chart[r];
        o.textContent = TRANSLATIONS[r][i] || i;
      }
    });
  }
}
class Le {
  constructor(e = {}) {
    this.config = {
      apiToken: e.apiToken || "9f1e977026fed80d9efd7a757a56645d332f2d01",
      apiURL: e.apiURL || "https://dev.lebenschart.de/v1/chart/create",
      pdfURL: e.pdfURL || "https://dev.lebenschart.de/v1/chart/pdf/from/data",
      selectors: {
        designGates: '[data-chart="design-gates"]',
        personalityGates: '[data-chart="personality-gates"]',
        mobileSidebar: '[data-chart="mobile-sidebar"]',
        submitPdfBtn: '[data-chart="submit-pdf"]',
        chartLoader: '[data-chart="loader"]'
      },
      ...e
    }, this.chartRenderer = new Ce(), this.init();
  }
  async init() {
    try {
      const e = this.getURLParams();
      if (console.log("Params:", e), !this.validateParams(e)) {
        console.error("Invalid parameters");
        return;
      }
      const n = this.createFormData(e);
      await this.loadChart(n);
    } catch (e) {
      console.error("Error:", e);
    }
  }
  getURLParams() {
    const e = new URLSearchParams(window.location.search), n = {};
    return e.forEach((r, o) => {
      n[o] = r;
    }), n;
  }
  validateParams(e) {
    return !(!e.n || !e.d || !e.l || e.n.trim() === "" || e.d.trim() === "" || e.l.trim() === "");
  }
  createFormData(e) {
    return {
      name: e.n,
      birthDate: e.d,
      location: e.l,
      latitude: e.lat,
      longitude: e.lon
    };
  }
  async loadChart(e, n = 2) {
    try {
      const r = await this.handleRequest(this.config.apiURL, e);
      this.handleSuccess(r);
    } catch (r) {
      n > 0 ? (console.log("Retrying... Remaining attempts:", n), await this.loadChart(e, n - 1)) : (console.error("Failed to load chart:", r), this.handleError(r));
    }
  }
  async handleRequest(e, n) {
    const r = await fetch(e, {
      method: "POST",
      headers: {
        Authorization: `Token ${this.config.apiToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(n)
    });
    if (!r.ok)
      throw new Error(`API request failed: ${r.statusText}`);
    return r.json();
  }
  handleSuccess(e) {
    console.log("Success Data: ", e), this.chartRenderer.render(e);
  }
  handleError(e) {
    console.error("Error:", e);
  }
}
console.log("Lebenschart package loaded...");
window.ChartForm = q;
window.Chart = Le;
document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelectorAll('[chart-form="form"]');
  t.length > 0 ? (console.log(`Found ${t.length} form(s) to initialize.`), t.forEach((e) => {
    if (!e.dataset.initialized)
      try {
        new q(e);
      } catch (n) {
        console.error("Failed to initialize ChartForm:", n);
      }
  })) : console.warn('No forms with [chart-form="form"] found.');
});
