#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ShopDeploymentStack } from "../lib/shop-deployment-stack";

const app = new cdk.App();

new ShopDeploymentStack(app, "ShopDeploymentStack", {
  env: {
    region: process.env.AWS_REGION || "eu-west-1",
  },
});
