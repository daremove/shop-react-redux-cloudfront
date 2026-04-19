const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputsFile = path.join(__dirname, "../infra/cdk-outputs.json");

if (!fs.existsSync(outputsFile)) {
  console.error(
    "CDK outputs file not found. Run 'npm run cdk:deploy' first."
  );
  process.exit(1);
}

const outputs = JSON.parse(fs.readFileSync(outputsFile, "utf-8"));
const stackOutputs = outputs["ShopDeploymentStack"];
const distributionId = stackOutputs["DistributionId"];

if (!distributionId) {
  console.error("CloudFront Distribution ID not found in CDK outputs.");
  process.exit(1);
}

console.log(
  `Creating CloudFront invalidation for distribution: ${distributionId}`
);

const result = execSync(
  `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
  { encoding: "utf-8" }
);

console.log("Invalidation created successfully:");
console.log(result);
