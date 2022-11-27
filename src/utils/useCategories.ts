import { type UseQueryResult } from "@tanstack/react-query";
import { trpc } from "./trpc";

export const fetchAllCategories = () => {
  const categoriesRouter: UseQueryResult = trpc.categories.getAll.useQuery();
  return categoriesRouter as UseQueryResult;
};
