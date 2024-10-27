import Cors from 'cors';
import {NextApiRequest, NextApiResponse} from "next";
import {DEPLOYED_URL} from "@/constants";

const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
  origin: DEPLOYED_URL,
});

export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: (req: NextApiRequest, res: NextApiResponse, callback: (result: any) => void) => void) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
