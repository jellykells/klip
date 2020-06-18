import "next";
import { initializeStore } from "./store";

declare module "*.svg";

declare module "next" {
  export interface NextPageContext {
    store: ReturnType<typeof initializeStore>;
  }
}
