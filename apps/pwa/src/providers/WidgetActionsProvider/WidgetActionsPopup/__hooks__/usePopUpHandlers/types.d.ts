import { NextStepTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export type PopUpTypes = null | NextStepTypes;

export type PopUpHandlerTypes = (v: PopUpTypes) => void;
