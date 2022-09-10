import { Nft } from 'alchemy-sdk';
import { AiOutlineClose } from 'react-icons/ai';
import NftMedia from './NftMedia';

const NftModal = ({
  open,
  nft,
  closeModal,
}: {
  open: boolean;
  nft: Nft | undefined;
  closeModal: () => void;
}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${
          open ? 'fixed' : 'hidden'
        } inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
      ></div>

      <div
        className={`${
          open ? 'fixed' : 'hidden'
        } fixed inset-0 z-10 overflow-y-auto`}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {nft ? (
                <>
                  <div className="flex justify-between">
                    <div>{nft?.title}</div>
                    <button onClick={closeModal}>
                      <AiOutlineClose />
                    </button>
                  </div>
                  <div>
                    <NftMedia media={nft?.media} />
                  </div>
                  <div>{nft?.description}</div>
                </>
              ) : (
                <div>No NFT selected</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftModal;
