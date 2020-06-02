# Deploy Static site on aws

## <!--BEGIN STABILITY BANNER-->

![Stability: Experimental](https://img.shields.io/badge/stability-Experimental-important.svg?style=for-the-badge)

> **This is an experimental example. It may not build out of the box**
>
> This examples does is built on Construct Libraries marked "Experimental" and may not be updated for latest breaking changes.
>
> If build is unsuccessful, please create an [issue](https://github.com/aws-samples/aws-cdk-examples/issues/new) so that we may debug the problem

---

<!--END STABILITY BANNER-->

This example creates the infrastructure for a static site, which uses an S3 bucket for storing the content. The site contents (located in the 'site-contents' sub-directory) are deployed to the bucket.

The site redirects from HTTP to HTTPS, using a CloudFront distribution, Route53 alias record, and ACM certificate.

## Prep

Create certificate for \*.redfroggy.io in certificate manager aws

The domain for the static site (i.e. angular.redfroggy.io) must be configured as a hosted zone in OVH to deploying this example.
Create Cname for angular.redfroggy.io with cloudfront's dns.

Else for instructions on configuring Route53 as the DNS service for your domain, see the [Route53 documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html).

## Test cloudformation template building

- npm run aws-synth -- -- -c domain=redfroggy.io -c subdomain=angular -c certificateArn=myCertificateArn -c

## Deploy

```
- npm run aws-deploy -c domain=redfroggy.io -c subdomain=angular -c certificateArn=myCertificateArn -c

same as

- npm run aws-stack-build
- cdk bootstrap
- cdk deploy --require-approval=never -c domain=redfroggy.io -c subdomain=angular -c certificateArn=myCertificateArn -c contentsPath=dist
```