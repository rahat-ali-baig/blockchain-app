import { client } from "../client/client";
import { ConnectButton, PayEmbed } from "thirdweb/react";
import {
    inAppWallet,
    createWallet,
} from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";

const wallets = [
    inAppWallet({
        auth: {
            options: [
                "google",
                "discord",
                "telegram",
                "farcaster",
                "email",
                "passkey",
                "phone",
                "facebook",
                "apple",
            ],
        },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];

export default function Connection() {
    return (
        <>
            <h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-6 text-violet-500">
                ThirdWeb Learning
            </h1>

            <ConnectButton
                client={client}
                wallets={wallets}
                theme={darkTheme({
                    colors: {
                        accentText: "#2a00fa",
                        borderColor: "#1f0066",
                        modalBg: "#07001f",
                        separatorLine: "#057aff",
                        tertiaryBg: "#1e0ca6",
                        skeletonBg: "#000000",
                        primaryText: "#ffffff",
                        secondaryText: "#498efd",
                    },
                })}
                connectButton={{ label: "Connect your wallet" }}
                connectModal={{
                    size: "wide",
                    title: "Connect Wallet",
                    titleIcon: "http:localhost:5173",
                    showThirdwebBranding: false,
                }}
            />

            <PayEmbed
                client={client}
                connectOptions={{
                    connectModal: {
                        size: "compact",
                    },
                }}
                payOptions={{
                    buyWithCrypto: false,
                }}
            />
        </>
    );
}
