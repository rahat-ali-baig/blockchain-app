import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID,
});

// connect to your contract
const contract = getContract({
  client,
  chain: defineChain(114),
  address: import.meta.env.VITE_ADDRESS,
});


export { contract, client }