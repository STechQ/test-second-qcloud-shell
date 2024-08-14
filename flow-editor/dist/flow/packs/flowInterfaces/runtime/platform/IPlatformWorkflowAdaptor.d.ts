import { ICounterPropType, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IWorkflowContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
export interface IPlatformWorkflowAdaptor {
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    restServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    soapServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    keyExecutor: (prop: ICounterPropType) => Promise<any>;
    workflowDb: () => {
        permanentStore: {
            get: (key: string) => Promise<any>;
            set: (key: string, value: any) => Promise<any>;
        };
    };
    context: () => IWorkflowContext | undefined;
    getIncomingRequest: () => {
        headers: Record<string, string>;
    };
}
export interface IPlatformWorkflowServerResponse {
    status: number;
    headers: Record<string, string>;
    data: any;
}
export interface IPlatformWorkflowServerRequest {
    method: "GET" | "POST";
    url: string;
    headers?: Record<string, string>;
    body?: any;
}
//# sourceMappingURL=IPlatformWorkflowAdaptor.d.ts.map