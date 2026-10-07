#!/usr/bin/env node
import { parseArgs } from "node:util"
const { values } = parseArgs({ options: { compact: { type: "boolean" }, format: { type: "string" } } })
console.log(values)
