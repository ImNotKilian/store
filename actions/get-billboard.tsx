import { Billboard } from "@/types";

const URL=`https://admin.incremental.store/api/132569a8-49e2-485b-90c0-b94bd3705585/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;

