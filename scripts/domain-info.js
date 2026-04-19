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

console.log("CloudFront Distribution Info:");
console.log(`  Domain: ${stackOutputs["DistributionDomainName"]}`);
console.log(`  URL: ${stackOutputs["WebsiteURL"]}`);
console.log(`  Distribution ID: ${stackOutputs["DistributionId"]}`);
console.log(`  S3 Bucket: ${stackOutputs["BucketName"]}`);
