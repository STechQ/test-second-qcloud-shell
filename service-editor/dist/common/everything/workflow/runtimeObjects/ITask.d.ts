import { DateTime } from "../runtimemodels/types";
import { IAction } from "./IAction";
import { INamedObjectBase } from "./namedobjects/INamedObjectBase";
import { ISLA } from "./namedobjects/ISLA";
export interface ITask extends INamedObjectBase {
    taskId: string;
    taskDefinitionKey: string;
    taskName: string;
    status: string;
    taskGroupId: string;
    userId?: string;
    unitId?: string;
    swimlane: string;
    taskStart: DateTime;
    taskEnd: DateTime;
    sla: ISLA;
    priority?: number;
    actions: Array<IAction>;
    candidateUnits?: Array<string>;
    candidateUsers?: Array<string>;
}
export interface ITaskPMInfo {
    taskStart: DateTime;
    taskEnd: DateTime;
    sla: ISLA;
    priority?: number;
}
//# sourceMappingURL=ITask.d.ts.map