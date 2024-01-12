import { Heading, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Wallets = dynamic(() => import("../components/Wallets"), { ssr: false });

export default function IndexPage() {
  return (
    <VStack gap={8} mt={16}>
      <Heading>Sol Chronicles: Connect your wallet</Heading>

      <Wallets />
    </VStack>
  );
}
