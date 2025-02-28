# Portfolio
Portfolio Website

Repository containing the source code for my portfolio website [tomcarter.net](http://tomcarter.net)

### Motivation

I wanted to build a space for displaying my work incliuding projects, CV, and research interests. 
Also wanted to use it as a learning opportunity. Hence why I haven't used any web frameworks or builders. 
Also wanted to gain more experience with AWS and understand what it takes to host a website with a cutom domain. 

### Deployment

The following setup was chosen for learning purposes and ease of deploying static site. 

- Site is static and hosted on AWS s3 bucket.
- DNS setup using Route53
- Cloud Front used to manage certificates. 

Deployment is automatically run using the GHA `deploy.yaml` whenever code is merged to the `master` branch. 

### Tutorials followed:
- [Build Navbar Menus That Actually Work for Everyone](https://www.youtube.com/watch?v=m7YDWNz65iI&t=566s&ab_channel=Coding2GO)
  - Tutorial for creating an accessible navbar in pure HTML, CSS and JS
- [React App on AWS S3 with Static Hosting + Cloudfront | Practical AWS Projects #1](https://www.youtube.com/watch?v=mls8tiiI3uc&ab_channel=BeABetterDev)
  - Tutorial for deploying site on s3 with Route53 for DNS routing and CloudFront for certificate handling amongst other things. 
  