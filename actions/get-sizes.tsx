import { Size } from "@/types";

const URL=`https://admin.incremental.store/api/132569a8-49e2-485b-90c0-b94bd3705585/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSizes;
