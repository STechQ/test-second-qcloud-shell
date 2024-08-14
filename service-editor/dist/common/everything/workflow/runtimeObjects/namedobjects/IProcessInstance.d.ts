import { DateTime } from "../../runtimemodels/types";
import { ITask } from "../ITask";
import { IFile } from "./IFile";
import { INamedObjectBase } from "./INamedObjectBase";
import { INote } from "./INote";
import { ISLA } from "./ISLA";
import { IUnit } from "./IUnit";
import { IUser } from "./IUser";
export interface IProcessInstance extends INamedObjectBase {
    processInstanceId: string;
    processId: string;
    processName: string;
    processLabel: string;
    processDescription: string;
    clusterId: string;
    businessKey: string;
    initiatorUser: IUser;
    initiatorUnit: IUnit;
    currentUnit: IUnit;
    processStart: DateTime;
    processEnd: DateTime;
    sla: ISLA;
    priority: number;
    lastUpdate: DateTime;
    lastUpdateUser: IUser;
    lastUpdateDescriptionCode?: string;
    lastUpdateDescription?: string;
    status: string;
    contributorUsers: Array<IUser>;
    followerUsers: Array<IUser>;
    tasks: Array<ITask>;
    notes: Array<INote>;
    files?: Array<IFile>;
    appId?: string;
}
//# sourceMappingURL=IProcessInstance.d.ts.map