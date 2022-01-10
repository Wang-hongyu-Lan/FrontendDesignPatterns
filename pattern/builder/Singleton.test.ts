import Singleton from "./Singleton";

test("get Singleton Instance", () => {
    expect(Singleton.getInstance() === Singleton.getInstance()).toBe(true);
});