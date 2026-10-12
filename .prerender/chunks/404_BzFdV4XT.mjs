import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as addAttribute, b as maybeRenderHead, d as renderComponent, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import "./Logo_CTT-PT76.mjs";
import { t as $$PageLayout } from "./PageLayout_CB0t4Pbn.mjs";
import { l as getHomePermalink } from "./permalinks_Ch_pGmTV.mjs";
/* empty css                */
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title: `404 — Entri tidak ada di kamus` } }, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto max-w-3xl px-5 py-28 text-center"><p class="font-accent text-sm tracking-[0.22em] uppercase" style="color: var(--sv-accent)">Kamus · 404</p><h1 class="headword mt-4" style="font-size: clamp(4rem, 18vw, 10rem)">404</h1><p class="mt-4 text-xl font-bold">Kata ini belum tercatat di kamus.</p><p class="mt-2 text-lg" style="color: var(--sv-muted)">Halaman yang kamu cari tidak ada entrinya — mungkin salah eja di bilah alamat, atau halamannya sudah dicabut dari rak.</p><a${addAttribute(getHomePermalink(), "href")} class="btn btn-pop mt-8">Kembali ke kamus</a></section>`,
		"announcement": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "announcement" })}`
	})}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/404.astro", void 0);
var $$file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
