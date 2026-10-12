import { b as maybeRenderHead, w as createRenderInstruction, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import { a as SITE } from "./_astrowind_config_DvWkjndx.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Logo.astro
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 whitespace-nowrap inline-flex items-center gap-2"><svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style="flex: none"><rect x="12" y="8" width="40" height="48" fill="var(--sv-surface)"></rect><rect x="12" y="8" width="40" height="48" fill="none" stroke="var(--sv-text)" stroke-width="5"></rect><rect x="12" y="8" width="9" height="48" fill="var(--sv-text)"></rect><rect x="27" y="17" width="18" height="6" fill="var(--sv-text)"></rect><rect x="27" y="27" width="13" height="5" fill="var(--sv-text)"></rect><rect x="27" y="35" width="15" height="5" fill="var(--sv-text)"></rect><rect x="27" y="43" width="10" height="10" fill="var(--sv-pop)"></rect><rect x="27" y="43" width="10" height="10" fill="none" stroke="var(--sv-text)" stroke-width="3"></rect></svg><span class="font-display text-2xl md:text-xl font-bold" style="color: var(--sv-text)">${SITE?.name}</span></span>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/Logo.astro", void 0);
//#endregion
export { renderScript as n, $$Logo as t };
