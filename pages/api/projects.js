import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve('.', 'projects.html');
  const fileContent = await readFile(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(fileContent);
}
