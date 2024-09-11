import { useEffect, useState } from "react";
import Connection from "./components/Connection";
import { useActiveAccount } from "thirdweb/react";
import { readContract } from "thirdweb";
import { contract } from "./client/client";

export function App() {
	const activeAccount = useActiveAccount();
	const [address, setAddress] = useState<String | undefined>("");
	const [allCampaign, setAllCampaign] = useState<any>([]);

	const getAllCampaigns = async () => {
		const data = await readContract({
			contract,
			method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
			params: []
		});
		console.log(data)
		
		setAllCampaign(data);
	};

	useEffect(() => {
		setAddress(activeAccount?.address);
		getAllCampaigns();
		console.log(allCampaign)
	}, [activeAccount])

	return (
		<main className="w-full h-screen">
			<div className="w-full p-20 flex h-full items-center justify-center gap-20">
				<div className="w-1/2 h-full border border-white/20 rounded-3xl flex items-center flex-col gap-10 justify-center flex-grow">
					<Connection />
				</div>

				<div className="w-1/2 h-full border border-white/20 rounded-3xl flex-grow text-white p-4 flex items-center justify-center flex-col gap-4">
					<p>Address: {address}</p>
					<p></p>
				</div>
			</div>
		</main>
	);
}