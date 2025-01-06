# Prerequisites and Software Installation

## System Requirements

::: warning System Requirements
These requirements are mandatory. Installation will fail if these are not met.
:::

### Hardware Requirements

- **Processor**: 
  - Minimum: Intel Core i5 or equivalent
  - Recommended: Intel Core i7 or better
- **Memory**: 
  - Minimum: 16GB RAM
  - Recommended: 32GB RAM
- **Storage**: 
  - Minimum 50GB free disk space
  - SSD recommended for better performance

### Operating System

- Windows operating system:
  - Windows 10 Pro (64-bit) or higher
  - Windows Server 2016 or higher
- For Linux/Mac users:
  - Must set up a Windows Virtual Machine
  - Ensure VM has direct access to required ports
  - Allocate at least 16GB RAM to VM

## Software Installation

### 1. Visual Studio 2022

::: warning IMPORTANT
Visual Studio 2022 Community Edition or higher is required.
:::

1. Download [Visual Studio Community Edition](https://visualstudio.microsoft.com/vs/community/)
2. During installation, select these workloads:
   - ASP.NET and web development
   - .NET desktop development
   - Data storage and processing
3. Under Individual Components, ensure you have:
   - Git for Windows
   - GitHub Extensions for Visual Studio
   - Web development tools

::: tip
Installation can take 30+ minutes depending on your internet speed.
:::

### 2. SQL Server Setup

1. SQL Server Express:
   - Download [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
   - Choose Basic Installation Type
   - Use Default Instance (SQLEXPRESS)
   - Enable TCP/IP and Named Pipes Protocols
   - Configure for Windows Authentication Mode

2. SQL Server Management Studio (SSMS):
   - Download [SSMS](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
   - Install with default settings

### 3. .NET Core Components

1. Install [.NET Core SDK](https://dotnet.microsoft.com/download)
2. Install [.NET Core Hosting Bundle](https://dotnet.microsoft.com/download/dotnet/6.0)
3. Verify installation in command prompt:
   ```bash
   dotnet --version
   dotnet --list-sdks
   dotnet --list-runtimes
   ```

### 4. Git Tools

1. [Git for Windows](https://git-scm.com/download/win):
   - Choose "Git from the command line and GUI"
   - Set Visual Studio Code as default editor
   - Enable Git credential manager

2. Optional: [Git Extensions](https://gitextensions.github.io/)

## Network Requirements

- Access to required ports:
  - Port 80 (HTTP)
  - Port 443 (HTTPS)
  - Port 1433 (SQL Server)
- Reliable internet connection
- Ability to configure local IIS

## Required Permissions

::: warning Administrator Access
You must have administrator rights on your machine to complete the installation.
:::

- Local administrator access
- Ability to modify IIS settings
- Permission to create and configure databases
- Rights to modify system environment variables

## Pre-Installation Checklist

- [ ] Administrator access confirmed
- [ ] Required hardware specifications met
- [ ] Windows OS version verified
- [ ] All required software downloaded
- [ ] Network access and permissions verified
- [ ] Required ports available
- [ ] Sufficient disk space available

## Next Steps

Once prerequisites are met:

1. [Configure Windows Features](/guide/installation/windows.md)
2. [Set up your Database](/guide/installation/database.md)
3. [Configure IIS](/guide/installation/iis.md)

::: tip Need Help?
If you encounter any issues during installation, check the [Troubleshooting Guide](/guide/troubleshooting/common-issues.md) or contact support.
:::