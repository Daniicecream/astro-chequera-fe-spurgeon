/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, f as renderComponent } from '../chunks/astro/server_DA-EJXo6.mjs';
export { renderers } from '../renderers.mjs';

const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const url = "https://la-chequera-del-banco-de-la-fe1.p.rapidapi.com/api/chequera";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "65be0c6fd4msh06a39518a71d29dp13aca7jsn501cbde6b217",
      "x-rapidapi-host": "la-chequera-del-banco-de-la-fe1.p.rapidapi.com"
    }
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center bg-slate-800 mx-40 p-10 rounded-md"> <div class="flex flex-col items-center"> <p class="text-white text-3xl italic text-center">${data.versiculo}</p> <p class="text-white text-lg mt-4 font-sans text-justify">${data.devocional}</p> </div> </div>`;
}, "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/components/Card.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  console.log("javascript");
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center flex-col w-full py-6 gap-2"> <div class="w-64 h-64 overflow-hidden rounded-full"> <img class="w-full h-full object-cover" src="/src/img/charles-spurgeon.jpg" alt="Fotografia de CHarles Spurgeon 'El Principe de los Predicadores'"> </div> <h1 class="text-6xl text-white">Chequera del Banco de la Fe</h1> </header>`;
}, "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/components/Header.astro", void 0);

const $$Suggestion = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("https://la-chequera-del-banco-de-la-fe1.p.rapidapi.com/api/lectura_anual", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "65be0c6fd4msh06a39518a71d29dp13aca7jsn501cbde6b217",
      "x-rapidapi-host": "la-chequera-del-banco-de-la-fe1.p.rapidapi.com"
    }
  });
  const data = await res.json();
  console.log(data);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center py-10 gap-6"> <p class="text-white font-light text-sm italic">AT: ${data.antiguo_testamento}</p> <p class="text-white font-light text-sm italic">NT: ${data.nuevo_testamento}</p> <p class="text-white font-light text-sm italic">Sabiduria: ${data.sabiduria}</p> </div>`;
}, "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/components/Suggestion.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="py-10"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chequera del Banco de la Fe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Card", $$Card, {})} ${renderComponent($$result2, "Suggestion", $$Suggestion, {})} </main> ` })}`;
}, "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/pages/index.astro", void 0);

const $$file = "D:/Almacenaje/Proyectos/Static Website Projects/chequera-fe-spurgeon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
