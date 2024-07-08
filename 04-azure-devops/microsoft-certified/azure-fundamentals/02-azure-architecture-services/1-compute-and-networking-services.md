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