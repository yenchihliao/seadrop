// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import {
    ERC721ContractMetadataUpgradeable
} from "./ERC721ContractMetadataUpgradeable.sol";

import {
    ISeaDropTokenContractMetadataUpgradeable
} from "./interfaces/ISeaDropTokenContractMetadataUpgradeable.sol";

library ERC721ContractMetadataStorage {
    struct Layout {
        /// @notice Track the max supply.
        uint256 _maxSupply;
        /// @notice Track the max batch.
        uint256 _maxBatch;
        /// @notice Track the base URI for token metadata.
        string _tokenBaseURI;
        /// @notice Track the contract URI for contract metadata.
        string _contractURI;
        /// @notice Track if a tokenId has been used.
        mapping(uint256 => bool) _tokenUsed;
        /// @notice Track the provenance hash for guaranteeing metadata order
        ///         for random reveals.
        bytes32 _provenanceHash;
        /// @notice Track the royalty info: address to receive royalties, and
        ///         royalty basis points.
        ISeaDropTokenContractMetadataUpgradeable.RoyaltyInfo _royaltyInfo;
    }

    bytes32 internal constant STORAGE_SLOT =
        keccak256("openzepplin.contracts.storage.ERC721ContractMetadata");

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}
