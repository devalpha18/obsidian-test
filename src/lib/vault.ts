import axios from "axios"
import config from "../config";
import { readVault } from "obsidian-vault-parser"
import glob from "glob-promise";
import { usePathname } from 'next/navigation';
// const path = require('path');
import path from "path"
import { useEffect } from "react";

export const getData = async () => {
    // const md = require("../sample_data/data.md")

    // const api = `${process.env.NEXT_PUBLIC_HTTP}/vault/3.md`
    // // const headers = {
    // //     "accept": "text/markdown",
    // //     "Authorization": process.env.NEXT_PUBLIC_API_KEY as string
    // //   };
    // // fetch(api, {
    // //     method: "GET",
    // //     headers
    // // }).then(response => response.text())
    // // .then(text => console.log(text))
    // // const path = __dirname
    // console.log(__dirname.toString())
    // const filePath = '/path/to/your/file.js';
    // const directoryPath = path.dirname(filePath);
    // console.log(directoryPath);
    // const files = await glob(`${path}/*.md`);
    // console.log(files)
    // const vault = await readVault("./sample_data/2", {
    //     isPublished: file => file.frontMatter.published != null
    //   })
    // console.log(vault)
}