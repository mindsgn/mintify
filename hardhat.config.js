/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xa3bdc954176b2db7087da7473e4e7db501d25b214be634f80c08d4a4f6f6e24e","balance":"1000000000000000000000"},{"privateKey":"0xc9d7530864abf47c85d28e6062932f2dd2198cbdd9ddff8ec04be0030e92f525","balance":"1000000000000000000000"},{"privateKey":"0xac07b149e25880a4424f64d8073ff74c99ac2a2d9fb5d42e6eb08b0893c4b645","balance":"1000000000000000000000"},{"privateKey":"0x03acb4bc227321abc437521819514c0314faf04539335fc1fa9d00be07beeb65","balance":"1000000000000000000000"},{"privateKey":"0x8456ae1eee1b270cfd264b3413db7b2c1e13f29f614f6a67110f8482c9d41391","balance":"1000000000000000000000"},{"privateKey":"0x492ec5c2d290bd1552852d1864461b12ddf4e80beaecf288eb246d02b3dbab1f","balance":"1000000000000000000000"},{"privateKey":"0x4f5edcbc447dc63d270ed6c0c5b402fce4250192e7b2c216e497f6c8b99d6524","balance":"1000000000000000000000"},{"privateKey":"0x74c8e1cb5e017835e3569bf9f528fbfa1db6c542f93af0b5745dda80d3654ffa","balance":"1000000000000000000000"},{"privateKey":"0x6243d6ee05c43b3948eae2cf118734c0e98545e0fd3866c461a50df531a94679","balance":"1000000000000000000000"},{"privateKey":"0x373a2e1138b47848a12b774d1ebe7b9fc28bb3a61418d790b3fda3d37f119df9","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};