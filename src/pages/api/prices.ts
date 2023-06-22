// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

const sample = {
    "0xB9506A80429Ee619C74D46a3276c622358795e2B":1, // XSD
    "0xf0DCd4737A20ED33481A49De94C599944a3Ca737":1 ,//  USDC
    "0xA1f7C12F5CEb2B195ffDcd2318e68f3D5bFbEa53":2, // GMX
    "0x00000000000000000000000000000000000000":9, //  MXC
    "0x000000000000000000000000000000000000001":1, // USDT
    "0x27960f9A322BE96A1535E6c19B3958e80E6a2670":"29055177587066400000000000000000000", // WBTC
    "0x64630e9931B89003065826FF19214e9a5Eca8548":"1645700000000000000000000000000000", // WETH
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

  res.json(sample)
}
