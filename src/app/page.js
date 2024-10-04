import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import HitCounter from "../components/HitCounter";
import Censored from "../components/Censored/Censored";

const DATABASE_PATH = "/src/database.json";

function Home() {
  const database = JSON.parse(readFile(DATABASE_PATH));
  const hits = database.hits;
  const newHits = hits + 1;
  writeFile(DATABASE_PATH, JSON.stringify({ hits: newHits }));

  return (
    <main>
      <h1>Welcome!</h1>
      You are visitor number:{" "}
      <Censored>
        <HitCounter />
      </Censored>
    </main>
  );
}

export default Home;
