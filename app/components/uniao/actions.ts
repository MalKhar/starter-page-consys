"use server";
import { uniao } from "./uniao";

export async function formatUniao() {
  let result = await uniao
    .split("\n")
    .map((item) => item.split("="))
    .filter((item) => (item[0].replace(/\s+/g, "") === "010-000" ? item : null))
    .filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) => t[1].replace(/\s+/g, "") === item[1].replace(/\s+/g, "")
        )
    )
    .map((item) => item[1]);

  console.log(result);
  return result;
}
