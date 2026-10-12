import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/health.ts
var health_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	return new Response(JSON.stringify({
		ok: true,
		ts: (/* @__PURE__ */ new Date()).toISOString()
	}), { headers: { "content-type": "application/json" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/health@_@ts
var page = () => health_exports;
//#endregion
export { page };
