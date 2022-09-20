import { NextApiRequest, NextApiResponse } from 'next';
import { alchemyClient } from 'utils/alchemySdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('req');
  console.log(req.query);
  const address = Array.isArray(req.query.address)
    ? undefined
    : req.query.address;
  const pageKey = Array.isArray(req.query.pageKey)
    ? undefined
    : req.query.pageKey;
  const pageSize = Array.isArray(req.query.pageSize)
    ? undefined
    : req.query.pageSize;

  if (address && pageSize) {
    const resNfts = await alchemyClient.nft.getNftsForContract(address, {
      omitMetadata: false,
      pageKey: pageKey,
      pageSize: Number(pageSize),
    });
    console.log(resNfts);
    res.status(200).json(resNfts);
  }
  res.status(200);
}
