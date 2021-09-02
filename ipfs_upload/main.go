package main

import (
	"fmt"
	"os"

	shell "github.com/ipfs/go-ipfs-api"
)

const (
	LOCAL_NODE = "http://localhost:8080/ipfs"
	USAGE      = "ipfs_upload file_path"
	URL        = "localhost:5001"
)

func main() {
	sh := shell.NewShell(URL)
	if len(os.Args) < 2 {
		fmt.Println(USAGE)
		os.Exit(1)
	}

	path := os.Args[1]
	f, err := os.Open(path)
	if err != nil {
		fmt.Printf("Err open file: %s: %+v \n", path, err)
		os.Exit(1)
	}
	defer f.Close()

	cid, err := sh.Add(f)
	if err != nil {
		fmt.Printf("Err add to IPFS with URL:%s err:%+v \n", URL, err)
		os.Exit(1)
	}
	fmt.Printf("CID added: %s \n", cid)
	fmt.Printf("Access file at: %s \n", fmt.Sprintf("%s/%s", LOCAL_NODE, cid))
}
