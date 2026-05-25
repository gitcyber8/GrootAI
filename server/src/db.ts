import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

type Incident = {
  [x: string]: any;
  title: string;
  severity: string;
  status: string;
};

type Data = {
  incidents: Incident[];
};

const adapter = new JSONFile<Data>("db.json");

export const db = new Low<Data>(adapter, {
  incidents: [],
});

export async function connectDB() {
  await db.read();

  db.data ||= {
    incidents: [],
  };
}