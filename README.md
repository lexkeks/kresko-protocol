# Kresko Protocol

## Dependencies

The repo incorporates the following libraries/tools:

-   [Hardhat](https://github.com/nomiclabs/hardhat): compile and run the smart contracts on a local development network
-   [TypeChain](https://github.com/ethereum-ts/TypeChain): generate TypeScript types for smart contracts
-   [Ethers](https://github.com/ethers-io/ethers.js/): renowned Ethereum library and wallet implementation
-   [Waffle](https://github.com/EthWorks/Waffle): tooling for writing comprehensive smart contract tests
-   [Solhint](https://github.com/protofire/solhint): linter
-   [Solcover](https://github.com/sc-forks/solidity-coverage): code coverage
-   [Prettier Plugin Solidity](https://github.com/prettier-solidity/prettier-plugin-solidity): code formatter
-   [hardhat-deploy](https://github.com/wighawag/hardhat-deploy): hardhat plugin for deployments
-   [hardhat-deploy-ethers](https://github.com/wighawag/hardhat-deploy-ethers): hardhat-ethers extension for hardhat-deploy

## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
yarn
```

Run typechain

```sh
yarn typechain
```

### Deploy

Run local deployment setup dry (no local server started)

```sh
yarn deploy
```

Deploy the contracts to a specific network, such as Aurora testnet:

```sh
yarn deploy:auroratest
```

Look into package.json for networks

### Updating the contracts addresses and abis for frontend after a new deployment to network

Make sure you have `.npmrc` setup with publish rights (get it from LastPass)

```sh
yarn publish:contracts-frontend
```

### Compile

Compile the smart contracts with Hardhat:

```sh
yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
yarn typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
yarn lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
yarn lint:ts
```

### Test

Run the Mocha tests:

```sh
yarn test
```

### Coverage

Generate the code coverage report:

```sh
yarn coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
REPORT_GAS=true yarn test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
yarn clean
```

## Syntax Highlighting

If you use VSCode, you can enjoy syntax highlighting for your Solidity code via the
[vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) extension. The recommended approach to set the
compiler version is to add the following fields to your VSCode user settings:

```json
{
    "solidity.compileUsingRemoteVersion": "v0.8.4+commit.c7e474f2",
    "solidity.defaultCompiler": "remote"
}
```

Where of course `v0.8.4+commit.c7e474f2` can be replaced with any other version.
