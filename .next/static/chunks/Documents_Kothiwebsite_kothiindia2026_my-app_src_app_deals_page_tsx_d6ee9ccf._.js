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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$PopupBox$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/component/PopupBox/popup.tsx [app-client] (ecmascript)");
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ✅ Form handler
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError("");
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        try {
            const res = await fetch("https://script.google.com/macros/s/AKfycbzD_w93Eys0tlYNV6W_FauHgZr3U7rQyDsuVGzEacZEeFAcrRZometOPjDeCT38e_Ggbg/exec", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const result = await res.json();
            if (result.status === "success") {
                setSuccess(true);
                form.reset();
                // auto-close popup after 2s
                setTimeout(()=>{
                    setShowPopup(false);
                    setSuccess(false);
                }, 2000);
            } else {
                throw new Error(result.message || "Something went wrong");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unexpected error occurred");
            }
        } finally{
            setLoading(false);
        }
    };
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
                                        lineNumber: 82,
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
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 81,
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
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-500 text-white px-4 py-1 rounded-md text-sm shadow-md",
                                                children: plan.price
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "italic text-sm mt-5 text-gray-500",
                                children: "All India Service Available"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                        lineNumber: 80,
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
                                        lineNumber: 121,
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
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 120,
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
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: "Re-Painting"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: "Cleaning"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                        lineNumber: 136,
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
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: plan.price
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: plan.cleaning
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 135,
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
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$src$2f$app$2f$component$2f$PopupBox$2f$popup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showPopup,
                onClose: ()=>setShowPopup(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-center textcolor2dark",
                            children: "Request a callback"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-500 text-sm",
                            children: "Fill the form below and our team will contact you."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-3",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Your Name",
                                    className: "w-full p-3 border rounded-lg",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 184,
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
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Your Email Id",
                                    className: "w-full p-3 border rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "city",
                                    placeholder: "Enter Your City",
                                    className: "w-full p-3 border rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "address",
                                    placeholder: "Property / Site address",
                                    className: "w-full p-3 border rounded-lg",
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "requirements",
                                    placeholder: "Detail Requirements",
                                    className: "w-full p-3 border rounded-lg",
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-orange-600 text-white font-semibold py-3 rounded-lg",
                                    disabled: loading,
                                    children: loading ? "Submitting..." : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-green-600 text-center font-medium",
                            children: "✅ Form submitted successfully! Closing..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Kothiwebsite$2f$kothiindia2026$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-center font-medium",
                            children: [
                                "⚠️ ",
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Kothiwebsite/kothiindia2026/my-app/src/app/deals/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(DealsPage, "Q7BIPAI/0+N7tWjWlAMHAOoBNVQ=");
_c = DealsPage;
var _c;
__turbopack_context__.k.register(_c, "DealsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Kothiwebsite_kothiindia2026_my-app_src_app_deals_page_tsx_d6ee9ccf._.js.map