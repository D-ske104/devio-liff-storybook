import type { Preview } from "@storybook/react";
import { liffInit } from "../src/lib/liff-init.mock";

import "../src/index.css";

await liffInit()

const preview: Preview = {};

export default preview;
