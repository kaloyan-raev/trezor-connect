/* @flow */

// Cardano method parameters types
import type {
    HDNodeType,
    CardanoAddressType,
    CardanoTxAuxiliaryDataSupplementType,
    CardanoCertificateType,
    CardanoPoolRelayType,
    CardanoTxSigningMode,
    CardanoTxWitnessType,
} from '../trezor/protobuf';

// GetPublicKey

export type CardanoGetPublicKey = {
    path: string | number[],
    showOnTrezor?: boolean,
};

export type CardanoPublicKey = {
    path: number[],
    serializedPath: string,
    publicKey: string,
    node: HDNodeType,
};

// GetAddress
export type CardanoCertificatePointer = {
    blockIndex: number,
    txIndex: number,
    certificateIndex: number,
};

export type CardanoAddressParameters = {
    addressType: CardanoAddressType,
    path: string | number[],
    stakingPath?: string | number[],
    stakingKeyHash?: string,
    certificatePointer?: CardanoCertificatePointer,
};

export type CardanoGetAddress = {
    addressParameters: CardanoAddressParameters,
    protocolMagic: number,
    networkId: number,
    address?: string,
    showOnTrezor?: boolean,
};

export type CardanoAddress = {
    addressParameters: CardanoAddressParameters,
    protocolMagic: number,
    networkId: number,
    serializedPath: string,
    serializedStakingPath: string,
    address: string,
};

// Sign transaction

export type CardanoInput = {
    path?: string | number[],
    prev_hash: string,
    prev_index: number,
};

export type CardanoToken = {
    assetNameBytes: string,
    amount: string,
};

export type CardanoAssetGroup = {
    policyId: string,
    tokenAmounts: CardanoToken[],
};
export type CardanoOutput =
    | {
          addressParameters: CardanoAddressParameters,
          amount: string,
          tokenBundle?: CardanoAssetGroup[],
      }
    | {
          address: string,
          amount: string,
          tokenBundle?: CardanoAssetGroup[],
      };

export type CardanoPoolOwner = {
    stakingKeyPath?: string | number[],
    stakingKeyHash?: string,
};

export type CardanoPoolRelay = {
    type: CardanoPoolRelayType,
    ipv4Address?: string,
    ipv6Address?: string,
    port?: number,
    hostName?: string,
};

export type CardanoPoolMetadata = {
    url: string,
    hash: string,
};

export type CardanoPoolMargin = {
    numerator: string,
    denominator: string,
};

export type CardanoPoolParameters = {
    poolId: string,
    vrfKeyHash: string,
    pledge: string,
    cost: string,
    margin: CardanoPoolMargin,
    rewardAccount: string,
    owners: CardanoPoolOwner[],
    relays: CardanoPoolRelay[],
    metadata: CardanoPoolMetadata,
};

export type CardanoCertificate = {
    type: CardanoCertificateType,
    path?: string | number[],
    pool?: string,
    poolParameters?: CardanoPoolParameters,
};

export type CardanoWithdrawal = {
    path: string | number[],
    amount: string,
};

export type CardanoCatalystRegistrationParameters = {
    votingPublicKey: string,
    stakingPath: string | number[],
    rewardAddressParameters: CardanoAddressParameters,
    nonce: string,
};

export type CardanoAuxiliaryData = {
    hash?: string,
    catalystRegistrationParameters?: CardanoCatalystRegistrationParameters,
};

export type CardanoSignTransaction = {
    inputs: CardanoInput[],
    outputs: CardanoOutput[],
    fee: string,
    ttl?: string,
    certificates?: CardanoCertificate[],
    withdrawals?: CardanoWithdrawal[],
    validityIntervalStart?: string,
    protocolMagic: number,
    networkId: number,
    auxiliaryData?: CardanoAuxiliaryData,
    signingMode: CardanoTxSigningMode,
};

export type CardanoSignedTxWitness = {
    type: CardanoTxWitnessType,
    pubKey: string,
    signature: string,
    chainCode?: string,
};

export type CardanoAuxiliaryDataSupplement = {
    type: CardanoTxAuxiliaryDataSupplementType,
    auxiliaryDataHash: string,
    catalystSignature?: string,
};

export type CardanoSignedTxData = {
    hash: string,
    witnesses: CardanoSignedTxWitness[],
    auxiliaryDataSupplement?: CardanoAuxiliaryDataSupplement,
};

export {
    Enum_CardanoAddressType as CardanoAddressType,
    Enum_CardanoCertificateType as CardanoCertificateType,
    Enum_CardanoPoolRelayType as CardanoPoolRelayType,
    Enum_CardanoTxSigningMode as CardanoTxSigningMode,
    Enum_CardanoTxWitnessType as CardanoTxWitnessType,
} from '../trezor/protobuf';
