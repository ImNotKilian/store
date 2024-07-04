import { Category } from "@/types";

const URL=`https://admin.incremental.store/api/132569a8-49e2-485b-90c0-b94bd3705585/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;

