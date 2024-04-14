# Time Capsule Smart Contract

The Time Capsule Smart Contract is a decentralized application built on the XDC blockchain. It enables users to create time capsules that securely store memories and content until a specified unlock date.

## Features

- **Media Upload**: Upload various types of media including images, audio recordings, videos, and text.
- **Secure Blockchain Storage**: Safeguard your memories using blockchain technology.
- **Time Capsule Tokenization**: Tokenize each time capsule with a unique NFT.
- **Scheduled Unlock Dates**: Set specific unlock dates for time capsules.

## Smart Contract Details

### Contract Name

- **Name**: TimeCapsule
- **Symbol**: TCC

### Functions

- `registerTimeCapsule`: Register a new time capsule with due date, media URI, description, and recipients.
- `addRecipient`: Add a recipient to an existing time capsule.
- `resetDueDate`: Reset the due date of a time capsule with a penalty fee.
- `calculateResetFee`: Calculate the penalty fee for resetting the due date.
- `tokenURI`: Get the token URI of a time capsule.
- `viewTitle`: View the description of a time capsule.

## Deployment

### Prerequisites

- Node.js
- Hardhat
- MetaMask or compatible Ethereum wallet

### Deployment Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/TangledDevs/xdc-time-capsule-contracts
   cd xdc-time-capsule-contracts
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Compile Smart Contracts**

   ```bash
   npx hardhat compile
   ```

4. **Deploy Smart Contract**

   Update the `deploy.js` script with your deployment logic and run:

   ```bash
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

   Replace `<network_name>` with the desired network (e.g., `xdctestnet`).
