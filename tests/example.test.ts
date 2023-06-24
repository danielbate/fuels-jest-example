import { Wallet } from "fuels";

test("create order", () => {
  console.log("create order");
  const wallet = Wallet.generate();
  console.log(wallet);
});