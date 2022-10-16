import { WorkspaceExtensionConfiguration } from "../config";
import { CONFIG_KEYS } from "../constants";

export const getApplicationId = (config: WorkspaceExtensionConfiguration) => {
    const applicationIds = new Map<string, string>();

    applicationIds.set("Code", "782685898163617802");
    applicationIds.set("Visual Studio Code", "810516608442695700");
    applicationIds.set("VSCodium", "");

    //TODO: Automatically generate regex
    const match = /(Code|Visual Studio Code|VSCodium)/i.exec(config[CONFIG_KEYS.AppName]);

    let clientId = config[CONFIG_KEYS.Id];
    if (match !== null && applicationIds.has(match[0])) clientId = applicationIds.get(match[0])!;

    return { clientId };
};
