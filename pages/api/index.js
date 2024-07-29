import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(_, res) {
  const filePath = path.resolve('.', 'public/index.html');
  try {
    const fileContent = await readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(fileContent);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).send('Internal Server Error');
  }
}
