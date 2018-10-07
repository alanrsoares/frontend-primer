import { Genre } from "@domain/genres";

export const fetchList: ReadonlyArray<Genre> = [
  { id: "id-0", name: "horror" },
  { id: "id-1", name: "thriller" },
  { id: "id-2", name: "adventure" },
  { id: "id-3", name: "sci-fi" },
  { id: "id-4", name: "independent" }
];

export const fetchDetail: Genre = { id: "id-0", name: "horror" };
