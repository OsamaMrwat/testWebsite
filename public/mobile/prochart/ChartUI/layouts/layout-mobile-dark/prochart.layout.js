function ProChart_InitCurrentLayout(chartObject) {
    var objChartMain = chartObject;

    var objCurrentLayout = {
        layout: null,
        toolbars: null,
        menus: null,
        headers: null,
        panels: null,
        zooms: null,
        patterns: {
            containter: null,
            top: null,
            left: null,
            right: null,
            bottom: null,
            main: null,
            mainchart: null,
            row: null
        },
        chart: {
            layoutiid: null,
            parent: null,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        },
        workmode: {
            fullscreen: false,
            alwaysfullscreen: false
        }
    };


    objChartMain.currenlayout = objCurrentLayout;


//#region layout structure
    objCurrentLayout.layout = {
        width: 900,
        height: 900,
        name: 'layout',
        items: [
            {
                type: "main",
                width: 'inherit',
                height: 'inherit',
                style: '',
                css: '',
                content: 'main',
                items: [
                    {type: 'chartcore', id: "chart_panel"}
                ]
            }
        ]
    };
//#endregion layout structure

//#region toolbar

    objCurrentLayout.toolbars = [];

    //#endregion toolbar

//#region panel
    objCurrentLayout.chart_panels = {
        id: "chart_panel",
        unit: "px",
        padding: [0, 0, 0, 0],
        spiltmargin: [0, 0, 0, 0],
        margin: [0, 0, 0, 0],
        price: {
            grow: 4,
            axisy: {
                view: true,
                width: 55,
                right: 0,
                padding: [0, 0, 0, 0]
            },
            axisx: {
                view: true,
                height: 27,
                right: 55,
                bottom: 0,
                padding: [0, 0, 0, 0]
            },
            main: {
                top: 0,
                left: 0,
                right: 55,
                bottom: 27,
                padding: [0, 0, 0, 0]
            },
            legend: {
                view: true,
                height: 'inherit',
                top: 12,
                left: 23,
                right: 110,
                padding: [0, 0, 0, 0]
            },
            controlpanel: {
                view: true,
                height: 16,
                width: 43,
                right: 65,
                top: 2
            },
            zoom: {
                view: true,
                height: 40,
                bottom: 40,
                width: 210,
                left: 'center',
                right: 'center',
                padding: [0, 0, 0, 0]
            }
        },
        study: {
            grow: 1,
            axisy: {
                top: 0,
                bottom: 0,
                view: true,
                width: 55,
                right: 0,
                padding: [0, 0, 0, 0]
            },
            axisx: {
                view: false,
                height: 0,
                right: 55,
                bottom: 0,
                padding: [0, 0, 0, 0]
            },
            main: {
                top: 0,
                left: 0,
                right: 55,
                bottom: 0,
                padding: [0, 0, 0, 0]
            },
            legend: {
                view: true,
                height: 16,
                top: 2,
                left: 3,
                right: 110,
                padding: [0, 0, 0, 0]
            },
            controlpanel: {
                view: true,
                height: 16,
                width: 43,
                right: 65,
                top: 2
            }
        },
        splitterx: {
            grow: 0,
            height: 0,
            main: {
                top: -6,
                view: true,
                left: 0,
                right: 0,
                bottom: 0,
                height: 10,
                padding: [0, 0, 0, 0]
            }
        },
        signal: {
            grow: 1,
            main: {
                top: 18,
                left: 0,
                right: 0,
                bottom: 0,
                padding: [0, 0, 0, 0]
            },
            legend: {
                view: true,
                height: 16,
                top: 2,
                left: 3,
                right: 110,
                padding: [0, 0, 0, 0]
            },
            controlpanel: {
                view: true,
                height: 16,
                width: 43,
                right: 65,
                top: 2
            },
            alert: {
                view: true,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                padding: [0, 0, 0, 0]
            }
        }
    };
//#endregion panel

//#region menu
    objCurrentLayout.menus = {
        click: false,
        hover: false,
        closebyclick: false,
        items: [
            {
                name: "menu",
                id: "mainmenu",
                more: {},
                items: []
            }
        ]
    };

//#endregion menu

//#region header
    objCurrentLayout.headers = [];
//#endregion header


//#region zoom
    objCurrentLayout.zooms = [];
//#endregion zoom


    return objCurrentLayout;
}

 
