/**
 * All available Dataset ids.
 *
 * @enum {string}
 */
export enum DatasetId {
    AHCCD = 'ahccd',
    CMIP5 = 'cmip5',
    CANGRD = 'cangrd',
    DCS = 'dcs',
    ClimateNormal = 'normal',
    ClimateMonthly = 'monthly',
    ClimateDaily = 'daily',
    CAPA = 'capa',
    Hydrometric = 'hydro'
}

/**
 * All available Variable across all Datasets ids.
 *
 * @enum {string}
 */
export enum VariableId {
    TMin = 'tmin',
    TMax = 'tmax',
    TMean = 'tmean',
    Precipitation = 'precip',
    SurfaceWind = 'sfcwind',
    IceThickness = 'sit',
    IceConcentration = 'sic',
    SnowDepth = 'snd',
    StationPressure = 'stnpress',
    SeaLevelPressure = 'seapress',
    GustSpeed = 'gustspeed',
    GustDirection = 'gustdir',
    Hydrometric = 'hydro',
    HRDPA = 'hrdpa',
    RDPA6 = 'rdpa6',
    RDPA24 = 'rdpa24',
    ClimateStations = 'stations',
    Monthly = 'monthly',
    Daily = 'daily',
    SurfaceTemp = 'tsurface',
    WaterTemp = 'twater',
    Geopotential = 'geopotential',
    GustDirection850 = 'gustdir850'
}

/**
 * All available Visualization controls which can be added to the visualization view.
 *
 * @enum {string}
 */
export enum VisualizationControlType {
    Variable = 'variable-selector',
    Dataset = 'dataset-selector',
    RCP = 'rcp-selector',
    Time = 'time-period-selector',
    Analysis = 'analysis-period-selector'
}

/**
 * All available RCP model ids.
 *
 * @enum {string}
 */
export enum RCPType {
    RCP2_6 = 'rcp26',
    RCP4_5 = 'rcp45',
    RCP8_5 = 'rcp85'
}

/**
 * All available TimePeriod ids.
 *
 * @enum {string}
 */
export enum TimePeriodType {
    January = 'jan',
    February = 'feb',
    March = 'mar',
    April = 'apr',
    May = 'may',
    June = 'jun',
    July = 'jul',
    August = 'aug',
    September = 'sep',
    October = 'oct',
    November = 'nov',
    December = 'dec',
    Winter = 'winter',
    Spring = 'spring',
    Summer = 'summer',
    Autumn = 'fall',
    Annual = 'annual'
}

export enum AnalysisPeriodType {
    TwentyFour = '24',
    Six = '6'
}

export enum ViewType {
    MapView = 'map-view'
}

/**
 * Identify mode can be set to none, one, or more options. If no options are provided, no part of the identify workflow is executed
 *
 * @export
 * @enum {string}
 */
export enum IdentifyMode {
    /**
     * Runs the identify query and pipes the available results through the `identify` API endpoint.
     */
    Query = 'query',

    /**
     * Adds a graphic marker at the point of a mouse click.
     * Only works when `Query` is set.
     */
    Marker = 'marker',

    /**
     * Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will supplant the marker.
     * Only works when `Query` is set.
     */
    Highlight = 'highlight',

    /**
     * Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
     * The haze will not be applied if neither `Marker` nor `Highlight` is set.
     */
    Haze = 'haze',

    /**
     * Display the identify results in the details panel.
     * This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.
     */
    Details = 'details'
}

/**
 * A global app configuration.
 *
 * @export
 * @interface AppConfig
 */
export interface AppConfig {
    /**
     * Configuration section for the viewer app.
     *
     * @type {{
     *         en: ClimateViewerAppConfig;
     *         fr: ClimateViewerAppConfig;
     *     }}
     * @memberof AppConfig
     */
    climateviewerapp: {
        en: ClimateViewerAppConfig;
        fr: ClimateViewerAppConfig;
    };
}

/**
 * Language-specific app configuration section.
 *
 * @export
 * @interface ClimateViewerAppConfig
 */
export interface ClimateViewerAppConfig {
    /**
     * A url to hte query tool page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    queryToolUrl: string;

    /**
     * A url to the support desk page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    supportDeskUrl: string;

    /**
     * A url to the data catalogue page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    dataCatalogueUrl: string;

    /**
     * A url to the climate resources page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    climateResourcesUrl: string;

    /**
     * A url to the climate basics page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    climateBasicsUrl: string;

    /**
     * A domain name of the main viewer page.
     *
     * @type {string}
     * @memberof ClimateViewerAppConfig
     */
    languageToggleDomain: string;

    /**
     * A collection of breadcrumbs to display at the top of the page.
     *
     * @type {BreadCrumbEntity[]}
     * @memberof ClimateViewerAppConfig
     */
    breadcrumbs: BreadCrumbEntity[];
}

/**
 * A single breadcrumb.
 *
 * @export
 * @interface BreadCrumbEntity
 */
export interface BreadCrumbEntity {
    url: string;
    name: string;
}
