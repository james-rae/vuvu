// TODO update this file so it makes sense for vuvu

import { EnhancedWindow } from './types';
import datasets from './datasets';

export * from './types';

const $: any = (<EnhancedWindow>window).$;
const RZ: any = (<EnhancedWindow>window).RZ;
const dcsMultiTrack: any =
    (<any>window).dcsMultiTrack ||
    (() => {
        console.warn('dcsMultiTrack is not available, possibly blocked.');
    });

export default {
    $,
    RZ,
    dcsMultiTrack
};

export { datasets as datasetApis };
