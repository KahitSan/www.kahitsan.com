import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

export const buildWorker = async (root = process.cwd()) => {
  const outputDirectory = path.join(root, '.output', 'public')
  await mkdir(outputDirectory, { recursive: true })
  await copyFile(
    path.join(root, 'functions', '_worker.js'),
    path.join(outputDirectory, '_worker.js')
  )
}

if (import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await buildWorker()
}
