import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import HitCounter from "../components/HitCounter";

const DATABASE_PATH = "/src/database.json";

function Home() {
  const database = JSON.parse(readFile(DATABASE_PATH));
  const hits = database.hits;
  const newHits = hits + 1;
  writeFile(DATABASE_PATH, JSON.stringify({ hits: newHits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <HitCounter hits={hits} />
    </main>
  );
}

export default Home;
