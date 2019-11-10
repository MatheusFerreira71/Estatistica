function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
// JS Grafico
{
    "chart": {
        "zIndex": 0,
        "enabled": true,
        "type": "scatter",
        "title": {
            "zIndex": 80,
            "enabled": true,
            "fontSize": 16,
            "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
            "fontColor": "#7c868e",
            "fontOpacity": 1,
            "fontDecoration": "none",
            "fontStyle": "normal",
            "fontVariant": "normal",
            "fontWeight": "normal",
            "letterSpacing": "normal",
            "textDirection": "ltr",
            "lineHeight": "normal",
            "textIndent": 0,
            "vAlign": "top",
            "hAlign": "center",
            "wordWrap": "normal",
            "wordBreak": "normal",
            "textOverflow": "",
            "selectable": false,
            "disablePointerEvents": false,
            "useHtml": false,
            "width": null,
            "height": null,
            "align": "center",
            "text": "System interruptions",
            "margin": {
                "left": 0,
                "top": 0,
                "bottom": 0,
                "right": 0
            },
            "padding": {
                "left": 0,
                "top": 0,
                "bottom": 10,
                "right": 0
            },
            "background": {
                "zIndex": 0,
                "enabled": false
            }
        },
        "background": {
            "zIndex": 0.5,
            "enabled": true
        },
        "tooltip": {
            "enabled": true,
            "displayMode": "union",
            "title": {
                "zIndex": 1,
                "enabled": true,
                "fontSize": 14,
                "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
                "fontColor": "#ffffff",
                "fontOpacity": 1,
                "fontDecoration": "none",
                "fontStyle": "normal",
                "fontVariant": "normal",
                "fontWeight": "normal",
                "letterSpacing": "normal",
                "textDirection": "ltr",
                "lineHeight": "normal",
                "textIndent": 0,
                "vAlign": "top",
                "hAlign": "left",
                "wordWrap": "normal",
                "wordBreak": "normal",
                "textOverflow": "",
                "selectable": false,
                "disablePointerEvents": false,
                "useHtml": false,
                "width": null,
                "height": null,
                "align": "left",
                "orientation": "top",
                "rotation": 0,
                "text": "",
                "margin": {
                    "left": 0,
                    "top": 0,
                    "bottom": 0,
                    "right": 0
                },
                "padding": {
                    "left": 0,
                    "top": 0,
                    "bottom": 0,
                    "right": 0
                },
                "background": {
                    "enabled": false
                }
            },
            "separator": {
                "zIndex": 1,
                "enabled": true,
                "fill": {
                    "color": "#CECECE",
                    "opacity": 0.3
                },
                "stroke": "none",
                "width": "100%",
                "height": 1,
                "orientation": "top",
                "margin": {
                    "left": 0,
                    "top": 5,
                    "bottom": 5,
                    "right": 0
                }
            },
            "background": {
                "zIndex": 0,
                "enabled": true
            }
        },
        "margin": {
            "left": 0,
            "top": 0,
            "bottom": 0,
            "right": 0
        },
        "padding": {
            "left": 10,
            "top": 10,
            "bottom": 15,
            "right": 20
        },
        "a11y": {
            "enabled": true,
            "mode": "chart-elements"
        },
        "autoRedraw": true,
        "bounds": {},
        "animation": {
            "enabled": true,
            "duration": 1000
        },
        "contextMenu": {
            "enabled": true
        },
        "credits": {
            "text": "AnyChart",
            "url": "https://www.anychart.com/?utm_source=registered",
            "alt": "AnyChart - JavaScript Charts designed to be embedded and integrated{{anychart-version}}",
            "imgAlt": "AnyChart - JavaScript Charts",
            "logoSrc": "https://static.anychart.com/logo.png",
            "enabled": false
        },
        "selectRectangleMarqueeFill": {
            "color": "#d3d3d3",
            "opacity": 0.4
        },
        "selectRectangleMarqueeStroke": "#d3d3d3",
        "interactivity": {
            "spotRadius": 30,
            "multiSelectOnClick": false,
            "unselectOnClickOutOfPoint": true,
            "hoverMode": "by-spot",
            "selectionMode": "multi-select"
        },
        "defaultSeriesType": "marker",
        "maxBubbleSize": "20%",
        "minBubbleSize": "5%",
        "maxPointWidth": "100%",
        "minPointLength": 0,
        "baseline": 0,
        "palette": {
            "type": "distinct",
            "items": [
                "#64b5f6",
                "#1976d2",
                "#ef6c00",
                "#ffd54f",
                "#455a64",
                "#96a6a6",
                "#dd2c00",
                "#00838f",
                "#00bfa5",
                "#ffa000"
            ]
        },
        "markerPalette": {
            "items": [
                "circle",
                "diamond",
                "square",
                "triangle-down",
                "triangle-up",
                "diagonal-cross",
                "pentagon",
                "cross",
                "v-line",
                "star5",
                "star4",
                "trapezium",
                "star7",
                "star6",
                "star10"
            ]
        },
        "hatchFillPalette": {
            "items": [{
                    "type": "backward-diagonal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "forward-diagonal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "horizontal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "vertical",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "dashed-backward-diagonal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "grid",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "dashed-forward-diagonal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "dashed-horizontal",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "dashed-vertical",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "diagonal-cross",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "diagonal-brick",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "divot",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "horizontal-brick",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "vertical-brick",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "checker-board",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "confetti",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "plaid",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "solid-diamond",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "zig-zag",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "weave",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-05",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-10",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-20",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-25",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-30",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-40",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-50",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-60",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-70",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-75",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-80",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                },
                {
                    "type": "percent-90",
                    "color": "black 0.5",
                    "thickness": 1,
                    "size": 10
                }
            ]
        },
        "normal": {
            "labels": {
                "enabled": false
            },
            "minLabels": {
                "enabled": null
            },
            "maxLabels": {
                "enabled": null
            }
        },
        "hovered": {
            "labels": {
                "enabled": null
            },
            "minLabels": {
                "enabled": null
            },
            "maxLabels": {
                "enabled": null
            }
        },
        "selected": {
            "labels": {
                "enabled": null
            },
            "minLabels": {
                "enabled": null
            },
            "maxLabels": {
                "enabled": null
            }
        },
        "xScale": 0,
        "yScale": 1,
        "series": [{
                "enabled": true,
                "seriesType": "marker",
                "clip": true,
                "tooltip": {
                    "hAlign": "start"
                },
                "legendItem": {
                    "enabled": true,
                    "iconStroke": "none"
                },
                "error": {
                    "mode": "both",
                    "xError": null,
                    "valueError": null,
                    "xErrorWidth": 10,
                    "valueErrorWidth": 10
                },
                "color": null,
                "isVertical": null,
                "normal": {
                    "hatchFill": "none",
                    "risingHatchFill": "none",
                    "fallingHatchFill": "none",
                    "type": "triangle-up",
                    "size": 4,
                    "labels": {
                        "enabled": null
                    },
                    "minLabels": {
                        "enabled": null
                    },
                    "maxLabels": {
                        "enabled": null
                    },
                    "markers": {
                        "enabled": false,
                        "disablePointerEvents": false,
                        "position": "value",
                        "anchor": "center",
                        "offsetX": 0,
                        "offsetY": 0,
                        "rotation": 0,
                        "size": 4
                    },
                    "outlierMarkers": {
                        "enabled": null,
                        "anchor": "center",
                        "offsetX": 0,
                        "offsetY": 0,
                        "rotation": 0,
                        "size": 6
                    }
                },
                "hovered": {
                    "fill": "gold",
                    "stroke": "#b39700",
                    "hatchFill": "none",
                    "risingHatchFill": "none",
                    "fallingHatchFill": "none",
                    "size": 7,
                    "labels": {
                        "enabled": null
                    },
                    "minLabels": {
                        "enabled": null
                    },
                    "maxLabels": {
                        "enabled": null
                    },
                    "markers": {
                        "enabled": null,
                        "size": 6
                    },
                    "outlierMarkers": {
                        "enabled": null,
                        "anchor": "center",
                        "offsetX": 0,
                        "offsetY": 0,
                        "rotation": 0,
                        "size": 6
                    }
                },
                "selected": {
                    "fill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "negativeFill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "risingFill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "fallingFill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "stroke": {
                        "color": "#212121",
                        "thickness": 1.5
                    },
                    "lowStroke": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "highStroke": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "lowFill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "highFill": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "negativeStroke": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "risingStroke": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "fallingStroke": {
                        "color": "#333",
                        "opacity": 0.85
                    },
                    "hatchFill": "none",
                    "risingHatchFill": "none",
                    "fallingHatchFill": "none",
                    "size": 7,
                    "labels": {
                        "enabled": null
                    },
                    "minLabels": {
                        "enabled": null
                    },
                    "maxLabels": {
                        "enabled": null
                    },
                    "markers": {
                        "enabled": null,
                        "size": 6
                    },
                    "outlierMarkers": {
                        "enabled": null,
                        "anchor": "center",
                        "offsetX": 0,
                        "offsetY": 0,
                        "rotation": 0,
                        "size": 6
                    }
                },
                "a11y": {
                    "enabled": false,
                    "titleFormat": "Series named {%SeriesName} with {%SeriesPointsCount} points. Min value is {%SeriesYMin}, max value is {%SeriesYMax}"
                },
                "data": [
                    5.2,
                    84
                ],
                [
                    2,
                    63
                ]
            ],
            "xScale": 0,
            "yScale": 1
        },
        {
            "enabled": true,
            "seriesType": "line",
            "clip": true,
            "legendItem": {
                "enabled": true,
                "iconType": "square"
            },
            "error": {
                "mode": "both",
                "xError": null,
                "valueError": null,
                "xErrorWidth": 10,
                "valueErrorWidth": 10
            },
            "color": null,
            "connectMissingPoints": false,
            "isVertical": null,
            "normal": {
                "hatchFill": "none",
                "risingHatchFill": "none",
                "fallingHatchFill": "none",
                "labels": {
                    "enabled": null
                },
                "minLabels": {
                    "enabled": null
                },
                "maxLabels": {
                    "enabled": null
                },
                "markers": {
                    "enabled": false,
                    "disablePointerEvents": false,
                    "position": "value",
                    "anchor": "center",
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotation": 0,
                    "size": 4
                },
                "outlierMarkers": {
                    "enabled": null,
                    "anchor": "center",
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotation": 0,
                    "size": 6
                }
            },
            "hovered": {
                "hatchFill": "none",
                "risingHatchFill": "none",
                "fallingHatchFill": "none",
                "labels": {
                    "enabled": null
                },
                "minLabels": {
                    "enabled": null
                },
                "maxLabels": {
                    "enabled": null
                },
                "markers": {
                    "enabled": true,
                    "size": 6
                },
                "outlierMarkers": {
                    "enabled": null,
                    "anchor": "center",
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotation": 0,
                    "size": 6
                }
            },
            "selected": {
                "fill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "negativeFill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "risingFill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "fallingFill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "stroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "lowStroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "highStroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "lowFill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "highFill": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "negativeStroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "risingStroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "fallingStroke": {
                    "color": "#333",
                    "opacity": 0.85
                },
                "hatchFill": "none",
                "risingHatchFill": "none",
                "fallingHatchFill": "none",
                "labels": {
                    "enabled": null
                },
                "minLabels": {
                    "enabled": null
                },
                "maxLabels": {
                    "enabled": null
                },
                "markers": {
                    "enabled": true,
                    "size": 6
                },
                "outlierMarkers": {
                    "enabled": null,
                    "anchor": "center",
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotation": 0,
                    "size": 6
                }
            },
            "a11y": {
                "enabled": false,
                "titleFormat": "Series named {%SeriesName} with {%SeriesPointsCount} points. Min value is {%SeriesYMin}, max value is {%SeriesYMax}"
            },
            "data": [
                [
                    1.7,
                    54.310454158527
                ],
                [
                    1.8,
                    55.2005091829704
                ],
                [
                    1.9,
                    56.0905642074139
                ],
                [
                    2,
                    56.9806192318574
                ],
                [
                    2.1,
                    57.8706742563008
                ],
                [
                    2.2,
                    58.7607292807443
                ],
                [
                    2.3,
                    59.6507843051877
                ],
                [
                    2.5,
                    61.4308943540747
                ],
                [
                    2.6,
                    62.3209493785181
                ],
                [
                    2.7,
                    63.2110044029616
                ],
                [
                    2.9,
                    64.9911144518485
                ],
                [
                    3,
                    65.881169476292
                ],
                [
                    3.1,
                    66.7712245007354
                ],
                [
                    3.2,
                    67.6612795251789
                ],
                [
                    3.3,
                    68.5513345496223
                ],
                [
                    3.4,
                    69.4413895740658
                ],
                [
                    3.5,
                    70.3314445985093
                ],
                [
                    3.6,
                    71.2214996229527
                ],
                [
                    3.7,
                    72.1115546473962
                ],
                [
                    3.8,
                    73.0016096718396
                ],
                [
                    3.9,
                    73.8916646962831
                ],
                [
                    4,
                    74.7817197207266
                ],
                [
                    4.1,
                    75.67177474517
                ],
                [
                    4.2,
                    76.5618297696135
                ],
                [
                    4.3,
                    77.4518847940569
                ],
                [
                    4.4,
                    78.3419398185004
                ],
                [
                    4.5,
                    79.2319948429438
                ],
                [
                    4.6,
                    80.1220498673873
                ],
                [
                    4.7,
                    81.0121048918308
                ],
                [
                    4.8,
                    81.9021599162742
                ],
                [
                    4.9,
                    82.7922149407177
                ],
                [
                    5,
                    83.6822699651611
                ],
                [
                    5.1,
                    84.5723249896046
                ],
                [
                    5.2,
                    85.4623800140481
                ]
            ],
            "xScale": 0,
            "yScale": 1
        }
    ],
    "isVertical": false,
    "xAxes": [{
        "zIndex": 35,
        "enabled": true,
        "width": null,
        "drawFirstLabel": false,
        "drawLastLabel": false,
        "overlapMode": "no-overlap",
        "stroke": "#CECECE",
        "staggerMode": false,
        "staggerMaxLines": 2,
        "staggerLines": null,
        "orientation": "bottom",
        "title": {
            "zIndex": 35,
            "enabled": true,
            "fontSize": 13,
            "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
            "fontColor": "#545f69",
            "fontOpacity": 1,
            "fontDecoration": "none",
            "fontStyle": "normal",
            "fontVariant": "normal",
            "fontWeight": "normal",
            "letterSpacing": "normal",
            "textDirection": "ltr",
            "lineHeight": "normal",
            "textIndent": 0,
            "vAlign": "top",
            "hAlign": "center",
            "wordWrap": "normal",
            "wordBreak": "normal",
            "textOverflow": "",
            "selectable": false,
            "disablePointerEvents": false,
            "useHtml": false,
            "width": null,
            "height": null,
            "align": "center",
            "text": "Interruption duration (Min)",
            "margin": {
                "left": 0,
                "top": 0,
                "bottom": 0,
                "right": 0
            },
            "padding": {
                "left": 5,
                "top": 5,
                "bottom": 5,
                "right": 5
            },
            "background": {
                "enabled": false
            }
        },
        "labels": {
            "zIndex": 35,
            "enabled": true
        },
        "minorLabels": {
            "zIndex": 35,
            "enabled": false
        },
        "ticks": {
            "zIndex": 35,
            "enabled": true,
            "stroke": "#CECECE",
            "length": 6,
            "position": "outside"
        },
        "minorTicks": {
            "zIndex": 35,
            "enabled": false,
            "stroke": "#EAEAEA",
            "length": 4,
            "position": "outside"
        },
        "scale": 0
    }],
    "yAxes": [{
        "zIndex": 35,
        "enabled": true,
        "width": null,
        "drawFirstLabel": true,
        "drawLastLabel": true,
        "overlapMode": "no-overlap",
        "stroke": "#CECECE",
        "staggerMode": false,
        "staggerMaxLines": 2,
        "staggerLines": null,
        "orientation": "left",
        "title": {
            "zIndex": 35,
            "enabled": true,
            "fontSize": 13,
            "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
            "fontColor": "#545f69",
            "fontOpacity": 1,
            "fontDecoration": "none",
            "fontStyle": "normal",
            "fontVariant": "normal",
            "fontWeight": "normal",
            "letterSpacing": "normal",
            "textDirection": "ltr",
            "lineHeight": "normal",
            "textIndent": 0,
            "vAlign": "top",
            "hAlign": "center",
            "wordWrap": "normal",
            "wordBreak": "normal",
            "textOverflow": "",
            "selectable": false,
            "disablePointerEvents": false,
            "useHtml": false,
            "width": null,
            "height": null,
            "align": "center",
            "text": "Waiting time between interruptions (Min)",
            "margin": {
                "left": 0,
                "top": 0,
                "bottom": 0,
                "right": 0
            },
            "padding": {
                "left": 5,
                "top": 5,
                "bottom": 5,
                "right": 5
            },
            "background": {
                "enabled": false
            }
        },
        "labels": {
            "zIndex": 35,
            "enabled": true
        },
        "minorLabels": {
            "zIndex": 35,
            "enabled": false
        },
        "ticks": {
            "zIndex": 35,
            "enabled": true,
            "stroke": "#CECECE",
            "length": 6,
            "position": "outside"
        },
        "minorTicks": {
            "zIndex": 35,
            "enabled": false,
            "stroke": "#EAEAEA",
            "length": 4,
            "position": "outside"
        },
        "scale": 1
    }],
    "crosshair": {
        "zIndex": 41,
        "enabled": false,
        "xStroke": "#969EA5",
        "yStroke": "#969EA5",
        "displayMode": "float",
        "xLabels": [{
            "enabled": true,
            "fontSize": 12,
            "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
            "fontColor": "#ffffff",
            "fontOpacity": 1,
            "fontDecoration": "none",
            "fontStyle": "normal",
            "fontVariant": "normal",
            "fontWeight": 400,
            "letterSpacing": "normal",
            "textDirection": "ltr",
            "lineHeight": "normal",
            "textIndent": 0,
            "vAlign": "top",
            "hAlign": "start",
            "wordWrap": "normal",
            "wordBreak": "normal",
            "textOverflow": "",
            "selectable": false,
            "disablePointerEvents": true,
            "useHtml": false,
            "text": "Label text",
            "width": null,
            "height": null,
            "anchor": null,
            "offsetX": 0,
            "offsetY": 0,
            "rotation": 0,
            "adjustFontSize": {
                "width": false,
                "height": false
            },
            "minFontSize": 8,
            "maxFontSize": 16,
            "background": {
                "zIndex": 0,
                "enabled": true
            },
            "padding": {
                "left": 10,
                "top": 5,
                "bottom": 5,
                "right": 10
            },
            "axisIndex": 0
        }],
        "yLabels": [{
            "enabled": true,
            "fontSize": 12,
            "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
            "fontColor": "#ffffff",
            "fontOpacity": 1,
            "fontDecoration": "none",
            "fontStyle": "normal",
            "fontVariant": "normal",
            "fontWeight": 400,
            "letterSpacing": "normal",
            "textDirection": "ltr",
            "lineHeight": "normal",
            "textIndent": 0,
            "vAlign": "top",
            "hAlign": "start",
            "wordWrap": "normal",
            "wordBreak": "normal",
            "textOverflow": "",
            "selectable": false,
            "disablePointerEvents": true,
            "useHtml": false,
            "text": "Label text",
            "width": null,
            "height": null,
            "anchor": null,
            "offsetX": 0,
            "offsetY": 0,
            "rotation": 0,
            "adjustFontSize": {
                "width": false,
                "height": false
            },
            "minFontSize": 8,
            "maxFontSize": 16,
            "background": {
                "zIndex": 0,
                "enabled": true
            },
            "padding": {
                "left": 10,
                "top": 5,
                "bottom": 5,
                "right": 10
            },
            "axisIndex": 0
        }]
    },
    "scales": [{
            "type": "linear",
            "inverted": false,
            "maximum": 5.5,
            "minimum": 1.5,
            "minimumGap": 0.1,
            "maximumGap": 0.1,
            "softMinimum": null,
            "softMaximum": null,
            "alignMinimum": true,
            "alignMaximum": true,
            "maxTicksCount": 1000,
            "ticks": {
                "mode": "linear",
                "base": 0,
                "allowFractional": true,
                "interval": 1
            },
            "minorTicks": {
                "mode": "linear",
                "base": 0,
                "allowFractional": true,
                "count": 5
            },
            "stackMode": "none",
            "stackDirection": "direct",
            "stickToZero": true,
            "comparisonMode": "none"
        },
        {
            "type": "linear",
            "inverted": false,
            "maximum": 100,
            "minimum": 40,
            "minimumGap": 0.1,
            "maximumGap": 0.1,
            "softMinimum": null,
            "softMaximum": null,
            "alignMinimum": true,
            "alignMaximum": true,
            "maxTicksCount": 1000,
            "ticks": {
                "mode": "linear",
                "base": 0,
                "allowFractional": true,
                "interval": 10
            },
            "minorTicks": {
                "mode": "linear",
                "base": 0,
                "allowFractional": true,
                "count": 5
            },
            "stackMode": "none",
            "stackDirection": "direct",
            "stickToZero": true,
            "comparisonMode": "none"
        }
    ],
    "crossing": {
        "stroke": "none"
    },
    "quarters": {}
}
}