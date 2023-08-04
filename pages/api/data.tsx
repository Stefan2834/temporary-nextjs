import { NextApiRequest, NextApiResponse } from "next";

const names: string[] = ['John', 'Jane', 'Michael', 'Emily'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(names);
}