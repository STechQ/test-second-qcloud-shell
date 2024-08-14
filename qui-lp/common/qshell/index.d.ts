import { IContextItem } from "../shrimp/context";
import { IComponentInstanceTracker } from "../shrimp/interfaces/ComponentInterfaces/IComponentInstanceTracker";
import { PlatformType } from "../shrimp/interfaces/quick/IPlatform";
import { IUXManager } from "../shrimp/interfaces/quick/IUXManager";
import { IDoryRenderer } from "../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { IRendererOperatorCollection } from "../shrimp/interfaces/RenderingInterfaces/Operators/IRendererOperatorCollection";
import { DoryRenderer } from "./src/helpers/Renderer";
import { RendererChild } from "./src/helpers/RendererChild";
import { IComponentManager } from "./src/interfaces/construction/IComponentManager";
import { ICookieManager } from "./src/interfaces/construction/ICookieManager";
import { ICryptographyManager } from "./src/interfaces/construction/ICryptographyManager";
import { IGlobalMethods } from "./src/interfaces/construction/IGlobalMethods";
import { IHostTriggerer } from "./src/interfaces/construction/IHostTriggerer";
import { IIntegrationsManager } from "./src/interfaces/construction/IIntegrationsManager";
import { ILanguageExtensions } from "./src/interfaces/construction/ILanguageExtensions";
import { IModuleManager } from "./src/interfaces/construction/IModuleManager";
import { INavigationManager } from "./src/interfaces/construction/INavigationManager";
import { INetworkManager } from "./src/interfaces/construction/INetworkManager";
import { IPlatformManager } from "./src/interfaces/construction/IPlatformManager";
import { IProcessManager } from "./src/interfaces/construction/IProcessManager";
import { IQJsonRetriever } from "./src/interfaces/construction/IQJsonRetriever";
import { IRegionalManager } from "./src/interfaces/construction/IRegionalManager";
import { IStoreManager } from "./src/interfaces/construction/IStoreManager";
declare class QShell implements IContextItem {
    private qjsonRetriever;
    private qjsonPool;
    private network;
    private ux;
    private region;
    private platformType;
    private hostTriggerer;
    private operatorCollection;
    private platformManager;
    private qshellRenderer;
    contextName: string;
    private context;
    constructor({ qjsonRetriever, moduleManager, network, ux, region, hostTriggerer, platformType, platformManager }: {
        qjsonRetriever: IQJsonRetriever;
        moduleManager: IModuleManager;
        network: INetworkManager;
        ux: IUXManager;
        region: IRegionalManager;
        hostTriggerer: IHostTriggerer;
        platformType: PlatformType;
        platformManager: IPlatformManager;
    }, operatorCollection: IRendererOperatorCollection);
    CreateRenderer({ componentManager, globalMethods, doryInstanceName, componentInstanceTracker, langExtensions, navigationManager, integrationsManager, storeManager, cookieManager, processManager, cryptoManager, config }: {
        componentManager: IComponentManager;
        globalMethods: IGlobalMethods;
        doryInstanceName?: string;
        componentInstanceTracker?: IComponentInstanceTracker;
        langExtensions?: ILanguageExtensions;
        navigationManager?: INavigationManager;
        integrationsManager?: IIntegrationsManager;
        storeManager?: IStoreManager;
        cookieManager?: ICookieManager;
        processManager?: IProcessManager;
        cryptoManager?: ICryptographyManager;
        config?: IRendererConfig;
    }): IDoryRenderer;
    getRender(): DoryRenderer;
    ResetQJsonPool(): void;
}
export { INetworkManager, IQJsonRetriever, IComponentManager, IModuleManager, IGlobalMethods, DoryRenderer, QShell, ILanguageExtensions, INavigationManager, RendererChild, IStoreManager, ICookieManager, IRegionalManager, IProcessManager, IHostTriggerer, IPlatformManager, ICryptographyManager };
//# sourceMappingURL=index.d.ts.map