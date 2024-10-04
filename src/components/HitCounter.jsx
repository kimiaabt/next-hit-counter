import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

const HitCounter = () => {
  const database = JSON.parse(readFile(DATABASE_PATH));
  const hits = database.hits;
  const newHits = hits + 1;
  writeFile(DATABASE_PATH, JSON.stringify({ hits: newHits }));

  return hits;
};

export default HitCounter;
