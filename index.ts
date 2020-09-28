import Axios, { AxiosResponse } from 'axios';
import bodyParser, { json } from 'body-parser';
import express, { Express, Request, Response } from 'express';
// rest of the code remains same
const app: Express = express();
const PORT = 8000;

const BrServer: string = "https://br1.api.riotgames.com";
const summonerName: string = `Sapéricles`;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    Axios.get(encodeURI(`${BrServer}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-03016401-a973-4a92-9690-d02caee90fb8`))
        .then((response: AxiosResponse) => {
            console.log(response)
            res.json(response.data);
        })
        .catch(er => {
            console.log(er)
        })
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});