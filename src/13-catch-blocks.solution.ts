import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    } else {
      console.log('Unexpected error', e);
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});

/**
 * Ref: https://bobbyhadz.com/blog/typescript-object-is-of-type-unknown
 */