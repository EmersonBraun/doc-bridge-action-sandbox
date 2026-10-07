#!/usr/bin/env node
import { parseArgs } from "node:util"
const { values } = parseArgs({ options: { brief: { type: "boolean" }, format: { type: "string" } } })
console.log(values)
