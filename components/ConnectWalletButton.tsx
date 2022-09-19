import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useAtom } from 'jotai';
import { userAtom } from 'utils/atoms';
import { useEffect } from 'react';

const ConnectWalletButton = () => {
  const { address } = useAccount();
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    // use atom to store user address after retrieving from wagmi useAccount.
    // This prevent hydration error that would otherwise happens using directly wagmi address for conditionals.
    setUser(address);
  }, [address]);

  return (
    <ConnectButton
      label="Connect Wallet"
      showBalance={false}
      chainStatus="icon"
      accountStatus={{
        smallScreen: 'avatar',
        largeScreen: 'full',
      }}
    />
  );
};

export default ConnectWalletButton;
