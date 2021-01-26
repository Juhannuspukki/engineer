import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const papa = require("papaparse");
const fetch = require("node-fetch");

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const options = {header: true};
    const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

    fetch('https://api.eve-echoes-market.com/market-stats/stats.csv')
        .then((res: any) => {
            res.body.pipe(parseStream);
        });

    let data: Array<object> = [];
    parseStream.on("data", (chunk: object) => {
        data.push(chunk);
    });

    parseStream.on("finish", () => {
        // const data = data.map(({item_id, time, ...item}) => item);
        console.log(data)
        res.statusCode = 200;
        res.json(data)
    });

}
