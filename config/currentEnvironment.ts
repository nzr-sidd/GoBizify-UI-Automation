/// <reference types="node" />

import { environments } from "./environment";

// Read ENV (or default to dev)
const selectedEnvironment = process.env.ENV ?? "dev";

// Validate environment
if (!(selectedEnvironment in environments)) {
    throw new Error(
        `Invalid environment: ${selectedEnvironment}

        Supported environments are:
        - dev
        - prod`
    );
}
const currentEnvironment = environments[selectedEnvironment as keyof typeof environments];

// Export it
export { currentEnvironment };