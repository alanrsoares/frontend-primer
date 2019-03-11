import { createActions } from "re-reduced";
import { Breadcrumb } from "./types";

export default createActions("CORE/APP", create => ({
  setBreadcrumbs: create.action<Breadcrumb[]>(),
  bootstrap: create.asyncAction<void>()
}));
