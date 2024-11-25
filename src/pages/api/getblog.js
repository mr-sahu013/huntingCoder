// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=How-to-learn-javascript
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Something went wrong" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
      } catch (parseError) {
        res.status(400).json({ error: "Invalid JSON file" });
      }
    }
  });
}
