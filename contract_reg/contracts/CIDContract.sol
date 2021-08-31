// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.7.6;

contract CIDContract {
    // Mapping from CID to owner address
    mapping(string => address) private cids;

    /**
     * @dev Set the owner of CID,
     *
     * Requirements:
     *
     * - the caller must be the owner of `cid`.
     * - override the existing owner if exist
     */
    function setOwner(string calldata cid, address _owner) public {
        address owner = cids[cid];

        if (owner != address(0)) {
            require(isOwner(cid, msg.sender), "caller is not the owner");
        }

        cids[cid] = _owner;
    }

    /**
     * @dev Return the owner of `cid`,
     *
     */
    function ownerOf(string calldata cid) public view returns (address) {
        return cids[cid];
    }

    /**
     * @dev Check if the `_owner` if owner of the `cid`,
     *
     */
    function isOwner(string calldata cid, address _owner)
        public
        view
        returns (bool)
    {
        return _owner == cids[cid];
    }
}
