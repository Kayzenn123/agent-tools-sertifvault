//#region \0astrowind:config
var SITE = {
	"name": "SertifVault",
	"site": "https://agent-tools-sertifvault.vercel.app",
	"base": "/",
	"trailingSlash": false,
	"googleSiteVerificationId": ""
};
var I18N = {
	"language": "id",
	"textDirection": "ltr"
};
var METADATA = {
	"title": {
		"default": "SertifVault — Kamus Prestasi",
		"template": "%s — SertifVault"
	},
	"description": "Brankas sertifikat pribadimu: arsipkan piagam lomba, beasiswa, dan kursus sebagai entri kamus, jelajahi di peta 8-bit, ekspor sekali klik.",
	"robots": {
		"index": true,
		"follow": true
	},
	"openGraph": {
		"type": "website",
		"site_name": "SertifVault",
		"images": [{
			"url": "~/assets/images/og-image.svg",
			"width": 1200,
			"height": 630
		}]
	},
	"twitter": { "cardType": "summary_large_image" }
};
var APP_BLOG = {
	"isEnabled": false,
	"postsPerPage": 8,
	"isRelatedPostsEnabled": true,
	"relatedPostsCount": 4,
	"post": {
		"isEnabled": true,
		"permalink": "/%slug%",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"list": {
		"isEnabled": true,
		"pathname": "blog",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"category": {
		"isEnabled": true,
		"pathname": "category",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"tag": {
		"isEnabled": true,
		"pathname": "tag",
		"robots": {
			"index": false,
			"follow": true
		}
	}
};
var UI = { "theme": "system" };
var ANALYTICS = { "vendors": { "googleAnalytics": {
	"id": null,
	"partytown": true
} } };
//#endregion
export { SITE as a, METADATA as i, APP_BLOG as n, UI as o, I18N as r, ANALYTICS as t };
