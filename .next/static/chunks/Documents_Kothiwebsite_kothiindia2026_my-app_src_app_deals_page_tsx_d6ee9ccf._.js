(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DealsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$PopupBox$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/PopupBox/popup.tsx [app-client] (ecmascript)"); // ✅ fixed import
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const constructionPlans = [
    {
        name: "Budget Plan",
        price: "1650/- Sq.ft"
    },
    {
        name: "Basic Plan",
        price: "1780/- Sq.ft"
    },
    {
        name: "Classic Plan",
        price: "1980/- Sq.ft"
    },
    {
        name: "Royal Plan",
        price: "2172/- Sq.ft"
    },
    {
        name: "Luxury Plan",
        price: "2700/- Sq.ft"
    }
];
const paintingPlans = [
    {
        type: "1 BHK",
        price: "5999/-",
        cleaning: "Free"
    },
    {
        type: "2 BHK",
        price: "10999/-",
        cleaning: "Free"
    },
    {
        type: "3 BHK",
        price: "16999/-",
        cleaning: "Free"
    },
    {
        type: "4 BHK",
        price: "23999/-",
        cleaning: "Free"
    }
];
function DealsPage() {
    _s();
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-cover bg-center text-black px-6 py-10",
        style: {
            backgroundImage: "url('/Background.mp4')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/2 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-orange-500 flex items-center gap-2",
                                        children: "🏗 Constructions Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto h-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/Kothi1.png",
                                            alt: "Blueprint",
                                            width: 420,
                                            height: 320,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: constructionPlans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center bg-gradient-to-r from-white to-gray-100 text-black p-4 rounded-lg shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronCircleDown"], {
                                                        className: "text-red-500 text-xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-500 text-white px-4 py-1 rounded-md text-sm shadow-md",
                                                children: plan.price
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "italic text-sm mt-5 text-gray-500",
                                children: "All India Service Available"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/2 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-orange-500 flex items-center gap-2",
                                        children: "🎨 Painting Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-auto h-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/Kothi9.png",
                                            alt: "Painting Illustration",
                                            width: 420,
                                            height: 520,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg overflow-hidden shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 text-center font-semibold bg-orange-500 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: "Sale"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: "Re-Painting"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: "Cleaning"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    paintingPlans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 text-center border-t border-gray-300 bg-black text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: plan.type
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: plan.price
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: plan.cleaning
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPopup(true),
                                    className: "inline-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Kothi5.png",
                                        alt: "Get Started Now",
                                        width: 220,
                                        height: 60,
                                        className: "mx-auto cursor-pointer hover:scale-105 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$PopupBox$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showPopup,
                onClose: ()=>setShowPopup(false),
                title: "Request a callback",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-500 text-sm",
                            children: "Fill the form below and our team will contact you."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-3",
                            onSubmit: async (e)=>{
                                var _this, _this1, _this2, _this3;
                                e.preventDefault();
                                const form = e.currentTarget;
                                const formData = {
                                    name: form.elements.namedItem("name").value,
                                    phone: form.elements.namedItem("phone").value,
                                    email: (_this = form.elements.namedItem("email")) === null || _this === void 0 ? void 0 : _this.value,
                                    city: (_this1 = form.elements.namedItem("city")) === null || _this1 === void 0 ? void 0 : _this1.value,
                                    address: (_this2 = form.elements.namedItem("address")) === null || _this2 === void 0 ? void 0 : _this2.value,
                                    requirements: (_this3 = form.elements.namedItem("requirements")) === null || _this3 === void 0 ? void 0 : _this3.value
                                };
                                try {
                                    const res = await fetch("https://script.google.com/macros/s/AKfycbya9iixBFWRY73gHWavLzemMkLur9A3NkZhjQRmwgxM_u1xuy57UeZOBnn4nfMN-yUEvw/exec", {
                                        method: "POST",
                                        body: JSON.stringify(formData),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                    const result = await res.json();
                                    if (result.status === "success") {
                                        alert("✅ Form submitted successfully!");
                                        form.reset();
                                        setShowPopup(false);
                                    } else {
                                        alert("❌ Something went wrong!");
                                    }
                                } catch (error) {
                                    console.error(error);
                                    alert("⚠️ Network error");
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Your Name",
                                    className: "w-full p-3 border rounded-lg",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    name: "phone",
                                    placeholder: "Your Phone Number",
                                    className: "w-full p-3 border rounded-lg",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Your Email Id",
                                    className: "w-full p-3 border rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "city",
                                    placeholder: "Enter Your City",
                                    className: "w-full p-3 border rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "address",
                                    placeholder: "Property / Site address",
                                    className: "w-full p-3 border rounded-lg",
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "requirements",
                                    placeholder: "Detail Requirements",
                                    className: "w-full p-3 border rounded-lg",
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-orange-600 text-white font-semibold py-3 rounded-lg",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(DealsPage, "YxEq4CBtuWdF8IGTVx1DJqim++A=");
_c = DealsPage;
var _c;
__turbopack_context__.k.register(_c, "DealsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Kothiwebsite_kothiindia2026_my-app_src_app_deals_page_tsx_d6ee9ccf._.js.map