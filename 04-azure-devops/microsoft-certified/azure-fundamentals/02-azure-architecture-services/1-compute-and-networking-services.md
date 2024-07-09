# Compute and Networking Services

In this module, You’ll be introduced to the compute and networking services of Azure. You’ll learn about three of the compute options (virtual machines, containers, and Azure functions). You’ll also learn about some of the networking features, such as Azure virtual networks, Azure DNS, and Azure ExpressRoute.

## Azure Virtual Machines

With Azure VMs you can create and use VMs in the cloud. VMs provide infrastructure as a service in the form of a virtualized server and can be used in many ways. Just like a physical computer, you can customize all of the software running on your VM. VMs are ideal choice when you need:
- Total control over the OS.
- The ability to run custom software.
- To use custom hosting configurations.

An Azure VM gives you flexibility of virtualization without having to buy and maintain the physical hardware that runs the VM. However, as an IaaS offering, you still need to configure, update and maintain the software that runs on the VM.

### Scale VMs in Azure

You can run single VMs for testing, development or minor tasks. Or you can group VMs together to provide availability, scalability and redundancy. Azure can also manage the grouping of VMs for you withr features such as scale sets and availability sets.

#### **VM Scale Sets**

With VM scale sets, Azure automates most of that work. Scale sets allow you to centrally manage, configure and update a large number of VMs in minutes. The number of VM instances can automatically increase or decrease in response to demand, or you can set it scale based on a defined schedule. Also automatically deploy a load balancer to make sure that your resources are being used efficiently.

#### **VM Availability Sets**

Avialability sets are designed to ensure that VMs stagger updates and have varied power and network connectivity, preventing you from losing all your VMs with a single network or power failure.

Availability sets do this by grouping VMs in two ways:
- **Update Domain:** VMs that can rebooted at the same time. This allows you to apply updates while knowing that only one update domain grouping will be offline at a time. All of the machines in one update domain will be updated. An update group going through the update process is given a 30-minute time to recover before maintenance on the next update domain starts.
- **Fault Domain:** Vms by commer power source and network switch. By default, an availability set will split your VMs across up to three fault domains. This helps protect against a physical power or network failure by having VMs in different fault domains.

There is no cost for availability set. You only pay for the VM instances you create.

### Examples of when to use VMs

- **During testing and development.** VMs provide a quick and easy way to create different OS and application configurations. Test and development personnel can then easily delete the VMs when they no longer need them.
- **When running applications in the cloud.** The ability to run certain applications in the public cloud as opposed to creating a traditional infrastructure to run them can provide substantial economic benefits. For example, an application might need to handle fluctuations in demand. Shutting down VMs when you don't need them or quickly starting them up to meet a sudden increase in demand means you pay only for the resources you use.
- **When extending your datacenter to the cloud:** An organization can extend the capabilities of its own on-premises network by creating a virtual network in Azure and adding VMs to that virtual network. Applications like SharePoint can then run on an Azure VM instead of running locally. This arrangement makes it easier or less expensive to deploy than in an on-premises environment.
- **During disaster recovery:**  As with running certain types of applications in the cloud and extending an on-premises network to the cloud, you can get significant cost savings by using an IaaS-based approach to disaster recovery. If a primary datacenter fails, you can create VMs running on Azure to run your critical applications and then shut them down when the primary datacenter becomes operational again.

VMs are also an excellent choice when you move from a physical server to the cloud (also known as lift and shift). You can create an image of the physical server and host it within a VM with little or no changes. Just like a physical on-premises server, you must maintain the VM: you’re responsible for maintaining the installed OS and software.

When you provision a VM, you will also have the chance to pick the resources that are associated with that VM, including:
- Size (purpose, number of processor cores, and amount of RAM),
- Storage disks (hard disk drives, solid state drives, etc.),
- Networking (virtual network, public IP address, and port configuration)

### Exercise - Create an Azure virtual machine

#### Task 1: Create a Linux virtual machine and install Nginx

1. From Cloud shell, run the following command `az vm create` command to create a Linux VM.
```sh
az vm create \
  --resource-group "learn-f1c434e6-fd7f-4a8a-9476-86e186f33eb6" \
  --name my-vm \
  --public-ip-sku Standard \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys    
```
2. Run the following `az vm extension set` command to configure Nginx on your VM:
```sh
az vm extension set \
  --resource-group "learn-f1c434e6-fd7f-4a8a-9476-86e186f33eb6" \
  --vm-name my-vm \
  --name customScript \
  --publisher Microsoft.Azure.Extensions \
  --version 2.1 \
  --settings '{"fileUris":["https://raw.githubusercontent.com/MicrosoftDocs/mslearn-welcome-to-azure/master/configure-nginx.sh"]}' \
  --protected-settings '{"commandToExecute": "./configure-nginx.sh"}' 
```
- This command uses the Custom Script Extension to run a Bash script on your VM. The script is stored on GitHub. Script:
  
  1. Runs `apt-get update` to download the latest package information from the internet. This step helps ensure that the next command can locate the latest version of the Nginx package.
  2. Install Nginx.
  3. Sets the homepage, /var/www/html/index.html to pring a welcome message that includes your VM's host name.

## Azure Virtual Desktop

Another type of VM is the Azure Virtual Desktop. It is a desktop and application virtualization service that runs on the cloud. It enables you to use a cloud-hosted version of Windows from any location. Azure Virtual Desktop works across devices and OS, and works with apps that you can use to access remote desktops or most modern browsers.

---

If you organization looking for a more efficient, productive and secure approach to desktop virtualization, Windows Virtual Desktop solution offers a fully managed desktop virtualization solution in the cloud. 

For a while it's been looked upon as a solution for enabling central management security. This approach seperates your OS's data and apps from local hardware. 

Main appeal is that you can seperate the compute environment from user devices, so that the risk of confidential information being left on a personal device is greatly reduced. 

Azure give you a remote desktop infrastructure that contains the roles that you would have had to manage at scale. THings like your gateway, broker, diagnostics, load balancing and more as a fully managed service on Azure.

## Azure Containers

While VMs are an excellent way to reduce costs versus the investments that are necessary for physical hardware, they are still limited to a single OS per VM. If you want to run multiple instances of an application on a single host machine, containers are an excellent choice.

### What are Containers?

Containers are a virtualization environment. Much like running multiple VMs on a single physical host, you can run multiple containers on a single physical or virtual host. Unlike VMs, you don't manage the OS for a container. 

Containers are lightweight and designed to be created, scaled out, and stopped dynamically. It is possible to create and deploy VMs as application demand increases, but containers are a lighter weight, more agile method. Containers are designed to allow you to respond to changes on demand. With containers, you can quickly restart if there is a crash or hardware interruption. One of the most popular container engine is Docker, and Azure supports it.

### VM versus Containers

VMs provide an abstraction layer for CPU, memory and storage that can be changed without having to invest in new hardware, while still allowing the environment to be flexible and secure. With VMs you are in control, You decide OS, install tools and packages. But there are downsides, VMs can only run one OS at a time. So if you have multiple server apps that all require different runtime environments, they may also require multiple VM to execute properly. 

But there is a lighter-weight solution that solves some of these issues, containers. A container bundles a single app and its dependencies, referred to as containerizing the app, then deploys it as a unit to a container host. Host provides a standardized runtime environment, which abstracts away the OS and infrastructure requirements, allowing the containerized app to run side-by-side with other containerized apps.

An easy way to differentiate between VMs and containers is VM virtualize the hardware, while containers virtualize the OS. So it allows you to run multiple lightweight containers on a single host without sacrificing the isolation that the VM originally offered. 

#### **Azure Container Apps**
Azure Container Apps are similar in many ways to a container instance. They allow you to get up and running right away, they remove the container management piece, and they're a PaaS offering. Container Apps have extra benefits such as the ability to incorporate load balancing and scaling. These other functions allow you to be more elastic in your design.

#### **Azure Kubernetes Service**
Azure Kubernetes Service (AKS) is a container orchestration service. An orchestration service manages the lifecycle of containers. When you're deploying a fleet of containers, AKS can make fleet management simpler and more efficient.

## Azure Functions

Azure Functions is an event-driven, serverless compute option that doesn’t require maintaining virtual machines or containers. If you build an app using VMs or containers, those resources have to be “running” in order for your app to function. With Azure Functions, an event wakes the function, alleviating the need to keep resources provisioned when there are no events.

### Serverless Computing in Azure

What it really means is that the responsibility of managing servers is already handled for you. It is an abstraction of servers so that you can take your mind off of infrastructure concers nad focus them on developer concerns.  

There are 3 big benefits of using serverless approach:
1. No infrastructure management. As a business you don't have to focus on administrarive tasks like installing an OS, you simply deploy your code and it automatically runs with high availability.
2. Scalability. 
3. Only pay for what you use. Serverless computing is event driven, resources are only allocated from a direct action. You are only charged for the time that takes to run your code instead of paying for the resources if they are not being used.

### Benefits of Azure Functions

Using Azure Functions is ideal when you're only concerned about the code running your service and not about the underlying platform or infrastructure. Functions are commonly used when you need to perform work in response to an event (often via a REST request), timer, or message from another Azure service, and when that work can be completed quickly, within seconds or less.

Functions scale automatically based on demand, so they may be a good choice when demand is variable.

Azure Functions runs your code when it's triggered and automatically deallocates resources when the function is finished. In this model, you're only charged for the CPU time used while your function runs.

Functions can be either stateless or stateful. When they're stateless (the default), they behave as if they're restarted every time they respond to an event. When they're stateful (called Durable Functions), a context is passed through the function to track prior activity.

Functions are a key component of serverless computing. They're also a general compute platform for running any type of code. If the needs of the developer's app change, you can deploy the project in an environment that isn't serverless. This flexibility allows you to manage scaling, run on virtual networks, and even completely isolate the functions.

## Application Hosting Options

If you need to host your application on Azure, you might initially turn to a virtual machine (VM) or containers. Both VMs and containers provide excellent hosting solutions. VMs give you maximum control of the hosting environment and allow you to configure it exactly how you want. VMs also may be the most familiar hosting method if you’re new to the cloud. Containers, with the ability to isolate and individually manage different aspects of the hosting solution, can also be a robust and compelling option.

There are other hosting options that you can use with Azure, including Azure App Service.

### Azure App Service

App Service enables you to build and host web apps, background jobs, mobile back-ends, and RESTful APIs in the programming language of your choice without managing infrastructure. It offers automatic scaling and high availability. App Service supports Windows and Linux. It enables automated deployments from GitHub, Azure DevOps, or any Git repo to support a continuous deployment model.

Azure App Service is a robust hosting option that you can use to host your apps in Azure. Azure App Service lets you focus on building and maintaining your app, and Azure focuses on keeping the environment up and running.

App Service handles most of the infrastructure decisions you deal with in hosting web-accessible apps:
- Deployment and management are integrated into the platform.
- Endpoints can be secured.
- Sites can be scaled quickly to handle high traffic loads.
- The built-in load balancing and traffic manager provide high availability.

### Azure Virtaul Networking