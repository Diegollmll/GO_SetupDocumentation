# Software Installation

This guide will help you install all required software components for GO development.

## Visual Studio 2022

::: warning IMPORTANT
Visual Studio 2022 Community Edition or higher is required for GO development.
:::

### Installation Steps

1. Download Visual Studio 2022
   - Visit [Visual Studio Downloads](https://visualstudio.microsoft.com/vs/community/)
   - Click "Download Visual Studio Community 2022"

2. Run the installer and select these workloads:
   ```
   ☐ ASP.NET and web development
   ☐ .NET desktop development
   ☐ Data storage and processing
   ```

3. Under Individual Components, ensure you have:
   - Git for Windows
   - GitHub Extensions for Visual Studio
   - Web development tools

4. Click Install and wait for completion

::: tip
Installation can take 30+ minutes depending on your internet speed and selected components.
:::

## .NET Core Installation

::: warning Prerequisites
.NET Core installation is required before configuring IIS
:::

1. Install .NET Core SDK:
   - Download [.NET Core SDK](https://dotnet.microsoft.com/download)
   - Run installer with default settings
   - Open command prompt and verify installation:
   ```bash
   dotnet --version
   dotnet --list-sdks
   dotnet --list-runtimes
   ```

2. Install .NET Core Hosting Bundle:
   - Download [.NET Core Hosting Bundle](https://dotnet.microsoft.com/download/dotnet/6.0)
   - Run installer with default settings
   - Open command prompt as administrator
   - Run IISReset:
   ```bash
   iisreset
   ```

## SQL Server

### SQL Server Express Installation

1. Download SQL Server Express:
   - Visit [SQL Server Downloads](https://www.microsoft.com/en-us/Download/details.aspx?id=101064)
   - Select the appropriate version for your system

2. Run the installer and select:
   ```
   ☐ Basic Installation Type
   ☐ Default Instance (SQLEXPRESS)
   ☐ Windows Authentication Mode
   ```

3. Note your instance name (typically `SQLEXPRESS`)

::: warning Important Settings
Enable these features during installation:
- TCP/IP Protocol
- Named Pipes Protocol
- Windows Authentication
:::

### SQL Server Management Studio (SSMS)

1. Download SSMS:
   - Visit [SSMS Download Page](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
   - Click the download link for the latest version

2. Install with default settings:
   ```
   ☐ Install all features
   ☐ Default installation path
   ```

## URL Rewrite Module Installation

::: warning Prerequisites
IIS must be installed before installing URL Rewrite Module
:::

1. Download URL Rewrite:
   - Visit [URL Rewrite Module](https://www.iis.net/downloads/microsoft/url-rewrite)
   - Download x64 version
   - Run installer

2. Installation Steps:
   ```
   ☐ Accept license terms
   ☐ Install with default settings
   ☐ Wait for completion
   ```

3. Verify Installation:
   - Open IIS Manager
   - Select any site
   - Look for "URL Rewrite" in the features view
   - If not visible, try:
     ```bash
     iisreset
     ```

## Git Tools

### Git for Windows

1. Download Git:
   - Visit [Git for Windows](https://git-scm.com/download/win)
   - The download should start automatically

2. Installation options:
   ```
   ☐ Git from the command line and GUI
   ☐ Use Git from Git Bash only
   ☐ Use Git and optional Unix tools
   ```

3. Additional settings:
   ```
   ☐ Default editor: Visual Studio Code
   ☐ Default branch name: main
   ☐ Git credential manager
   ```

### Git Extensions (Optional but Recommended)

1. Download Git Extensions:
   - Visit [Git Extensions](https://gitextensions.github.io/)
   - Click "Download"

2. Install with default settings


## Next Steps

After installing all required software:

1. [Configure Windows Features](./windows.md)
2. [Set up your Database](./database.md)
3. [Configure IIS](./iis.md)

::: tip Need Help?
If you encounter any issues during installation, check the [Troubleshooting Guide](../troubleshooting/common-issues.md) or contact support.
:::
