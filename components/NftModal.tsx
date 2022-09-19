import { Nft } from 'alchemy-sdk';
import { AiOutlineClose } from 'react-icons/ai';
import Media from './Media';
import Linkify from 'react-linkify';

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
        <div className="mt-20 flex min-h-full items-start justify-center p-4 text-center sm:p-0">
          <div className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {nft ? (
                <>
                  <div className="flex justify-between">
                    <div className="text-xl font-bold">{nft?.title}</div>
                    <button onClick={closeModal}>
                      <AiOutlineClose className="text-xl" />
                    </button>
                  </div>
                  <div className="mb-4" />
                  <div>
                    {nft.media.length > 0 && nft.media[0].gateway && (
                      <Media url={nft.media[0].gateway} />
                    )}
                  </div>
                  <div className="mb-4" />
                  <h6>Description</h6>
                  <div className="whitespace-pre-wrap">
                    <Linkify>{nft?.description}</Linkify>
                  </div>
                  {nft.rawMetadata?.attributes && (
                    <>
                      <div className="mb-4" />
                      <h6>Attributes</h6>
                      {nft.rawMetadata.attributes.map((attr) => (
                        <p key={attr.value}>
                          <span className="font-semibold">
                            {attr.trait_type}
                          </span>{' '}
                          {attr.value}
                        </p>
                      ))}
                    </>
                  )}
                  <div className="mb-4" />
                  <h6>Info</h6>
                  <p>
                    <span className="font-semibold">Address:</span>{' '}
                    {nft.contract.address}
                  </p>
                  <p>
                    <span className="font-semibold">Token Type:</span>{' '}
                    {nft.tokenType}
                  </p>
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
