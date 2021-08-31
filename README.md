## A Go command line store file in IPFS and smartcontract to store the owner of that CID 

`ipfs_upload` is command line take a file path and print the CID added to IPFS

`CIDContract` in `contract_reg/contract` folder implment simple store of the CID return from `ipfs_upload`
## Get Started

### Prerequisites

go version `>=1.15`

AMD node version `>=12` 

ARM node verson `>=16`

### Installation

Install ipfs_upload command

```
cd ipfs_upload
go install
```

### Step 1 ( Takes a local file as an argument & Uploads the file to the IPFS network)

Install IPFS https://ipfs.io/docs/install/

To start a development IPFS node:

```
ipfs daemon
```

Go to `ipfs_upload` to install `ipfs_upload`
```
cd ipfs_upload && go install
```

We should able to run `ipfs_upload` to upload to `localhost:5001`
```
ipfs_upload file_path
```

the command above should produced a CID and url to see a file addedd to IPFS

### Step 2

Using the CID to interact with `CIDContract`

