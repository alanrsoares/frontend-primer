import { State } from "@domain/types";

export const getTagsState = (state: State) => state.content.tags;

export const getTags = getTagsState;
