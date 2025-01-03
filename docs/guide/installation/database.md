## SSH Key Configuration

::: warning Prerequisites
Before cloning repositories, you must set up SSH authentication:
:::

1. Generate SSH key:
```bash
# Open Git Bash and run:
ssh-keygen -t ed25519 -C "your_email@example.com"

# Press Enter to accept default file location
# Enter a secure passphrase when prompted
```

2. Add SSH key to ssh-agent:
```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH private key
ssh-add ~/.ssh/id_ed25519
```

3. Add SSH key to GitHub:
   - Copy the public key content:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```
   - Go to GitHub Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key
   - Click "Add SSH key"

4. Test SSH connection:
```bash
ssh -T git@github.com
```

## Repository Setup

1. Create projects directory:
```bash
mkdir C:\Projects
cd C:\Projects
mkdir GenerativeObjects
cd GenerativeObjects
```

2. Clone repositories:
```bash
# Clone Portal
git clone <https://github.com/generative-objects-org/go-portal> go-portal

# Clone Generator
git clone <https://github.com/generative-objects-org/go-generator> go-generator

# Clone Modeler
git clone <https://github.com/generative-objects-org/go-modeler> go-modeler
```

## Building Solutions

1. Open and build go-portal:
```
- Open go-portal solution in Visual Studio
- Build solution (make sure build succeeds)
```

2. Open and build go-generator:
```
- Open go-generator solution in Visual Studio
- Build solution (make sure build succeeds)
```

3. Open and build go-modeler:
```
- Open go-modeler solution in Visual Studio
- Build solution (make sure build succeeds)
```

# Database Setup

## Prerequisites

::: warning Before You Begin
Ensure you have:
- SQL Server installed
- SQL Server Management Studio (SSMS)
- Administrator access to SQL Server
:::

## Create Databases

1. Open SQL Server Management Studio
2. Connect using Windows Authentication:
   ```
   Server type: Database Engine
   Server name: .\SQLEXPRESS (or your instance name)
   Authentication: Windows Authentication
   ```

## Initialize Databases

### Portal Database Setup

1. Navigate to the Portal SQL scripts directory:
   ```
   C:\Projects\GenerativeObjects\go-portal\SQL\
   ```

2. Open `CreateGoPortalWithData.sql` in SQL Server Management Studio

3. At the top of the script, keep only the basic CREATE DATABASE statement:
   ```sql
   CREATE DATABASE GoPortal
   ```
   Remove any additional configurations (like containment settings)

4. Execute the modified script to create and initialize the portal database

### Generator Database Setup

1. Ensure you have the latest version from Git:
   ```bash
   cd C:\Projects\GenerativeObjects\go-generator
   git pull
   ```

2. Navigate to the SQL scripts directory:
   ```
   C:\Projects\GenerativeObjects\go-generator\SQL\
   ```

3. Execute `GoGenCodeGeneratorForGODatabaseScript.sql` to create and initialize the generator database:
   ```sql
   -- Run the complete initialization script
   "GoGenCodeGeneratorForGODatabaseScript.sql"
   
   ```

Final Database Verification

::: warning Important
After completing all database setup steps, verify you have these two databases in SQL Server Management Studio:

GOPortal

GenerativeObjects-22212eeb-4b0c-4fc2-84e2-87ac2002de5f

If either database is missing, review the previous steps and ensure all scripts were executed successfully.
:::


## Deployment Process

::: warning Important
Before running any deployment scripts, you must reset IIS:
1. Open Command Prompt as Administrator
2. Run the command: `iisreset`
:::

1. Deploy Portal:
```bash
# First reset IIS as administrator
iisreset

# Then run deployment scripts in order:
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_application.cmd
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_runtime_libraries.cmd
```

2. Deploy Generator (run in order):
```bash
# Deploy application
C:\Projects\GenerativeObjects\go-generator\Scripts\deployapplication.cmd

# Deploy libraries
C:\Projects\GenerativeObjects\go-generator\Scripts\deploymodellerlibraries.bat

# Deploy task performers
C:\Projects\GenerativeObjects\go-generator\Scripts\deployTaskPerformers.bat
```

3. Deploy Modeler (run in order):
```bash
# Deploy application
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deployapplication.cmd

# Deploy libraries
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploymodellerlibraries.bat

# Deploy database script
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploydatabasescript.bat
```

## Next Steps

After database setup:

1. [Configure IIS](./iis.md)
2. [Deploy Application](../deployment/setup.md)
3. [Verify Installation](../deployment/verification.md)

::: tip Database Maintenance
Remember to:
- Set up regular backups
- Monitor database growth
- Keep scripts updated
:::
