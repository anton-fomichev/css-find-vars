const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../dist/index.js");
const data = fs.readFileSync(filePath, "utf8");

if (!data.startsWith("#!/usr/bin/env node")) {
  const shebang = "#!/usr/bin/env node\n";
  fs.writeFileSync(filePath, shebang + data);
}
