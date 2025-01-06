# Repostiories, Database and Application Setup

## Prerequisites

::: warning Before You Begin
Ensure you have:
- SQL Server installed
- SQL Server Management Studio (SSMS)
- Administrator access to SQL Server
- Git installed and configured
- SSH key set up in GitHub
:::

## Repository Setup

### SSH Key Configuration

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

### Clone Repositories

1. Create projects directory:
```bash
mkdir C:\Projects
cd C:\Projects
mkdir GenerativeObjects
cd GenerativeObjects
```

2. Clone repositories:
```bash
# Clone GO Portal
git clone git@github.com:generative-objects-org/go-portal.git go-portal

# Clone GO Generator
git clone git@github.com:generative-objects-org/go-generator.git go-generator

# Clone GO Modeler
git clone git@github.com:generative-objects-org/go-modeler.git go-modeler
```

### Build Solutions

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

# Database and Application Setup

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

3. Modify the CREATE DATABASE statement at the top of the script:
- Original script might look like:
  ```sql
  CREATE DATABASE [GOPortal]
  CONTAINMENT = NONE
  ON PRIMARY
  LOG ON ...
  -- other settings
  ```
- Modify it to only keep the basic creation:
  ```sql
  CREATE DATABASE [GOPortal]
  GO
  ```
- Keep all other script content below the CREATE DATABASE statement unchanged

::: tip
Only modify the CREATE DATABASE statement at the top. Leave all other parts of the script (table creation, data insertion, etc.) exactly as they are.
:::

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

3. Execute `GoGenCodeGeneratorForGODatabaseScript.sql` in SQL Server Management Studio to create and initialize the generator database:
   ```sql
   -- Run the complete initialization script
   "GoGenCodeGeneratorForGODatabaseScript.sql"
   ```

## Final Database Verification

::: warning Important
After completing all database setup steps, verify you have these two databases in SQL Server Management Studio:
- `GOPortal`
- `GenerativeObjects-22212eeb-4b0c-4fc2-84e2-87ac2002de5f`

If either database is missing, review the previous steps and ensure all scripts were executed successfully.
:::

## Application Settings Configuration

::: warning Critical Step
This step is mandatory for GO to function properly. Each component requires specific configuration files.
:::

### Identifying Your SQL Server Instance Name

1. Open SQL Server Management Studio
2. Look at the server name you use to connect:
   - It might look like: `DESKTOP-58OTF2M\SQLEXPRESS`
   - Or: `.\SQLEXPRESS`
   - Or: `COMPUTERNAME\SQLEXPRESS01`

::: tip Finding Your Instance Name
Your exact instance name is crucial for the connection strings to work. You can find it:
- In SQL Server Management Studio's connection dialog
- At the top of SSMS window after connecting
:::

### Portal Settings Setup

1. Open the Portal solution in Visual Studio:
   - Navigate to `C:\Projects\GenerativeObjects\go-portal`
   - Open `GO.Portal.sln`

2. In Solution Explorer, navigate to the WebApplicationLayer project:
   ```
   C:\Projects\GenerativeObjects\go-portal\GeneratedCode\WebApplicationLayer
   ```

3. Locate the template files:
   - `appsettings.Development.orig.json`
   - `appsettings.Production.orig.json`

4. Create your settings files:
   - Make a copy of `appsettings.Development.orig.json` and rename it to `appsettings.Development.json`
   - Make a copy of `appsettings.Production.orig.json` and rename it to `appsettings.Production.json`

5. Add the following content to both files (replace INSTANCE_NAME with your SQL Server instance name):

```json
{
  "MainConnectionString": "data source=INSTANCE_NAME; initial catalog=GOPortal;integrated security=SSPI",
  "DefaultHostName": "localhost",
  "ShowExceptionDetails": "true",
  "DatabaseFactoryToUse": "SqlServerDatabaseFactory",
  "DatabaseServerConnectionString": "data source=INSTANCE_NAME; integrated security=SSPI; TrustServerCertificate=True",
  "MetamodelScriptsFolder": "C:\\Projects\\GenerativeObjects\\GO-Metamodels",
  // SMTP Configuration
  "SMTP": "TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE",
  "SMTPEmail": "TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE",
  "SMTPEmailToDisplay": "TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE",
  "SMTPUserName": "TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE",
  "SMTPPassword": "TO BE DEFINED IN YOU ENVIRONMENT SETTINGS FILE"
}
```

For example, if your instance name is `DESKTOP-58OTF2M\SQLEXPRESS`, your connection strings would be:
```json
"MainConnectionString": "data source=DESKTOP-58OTF2M\\SQLEXPRESS; initial catalog=GOPortal;integrated security=SSPI",
"DatabaseServerConnectionString": "data source=DESKTOP-58OTF2M\\SQLEXPRESS; integrated security=SSPI; TrustServerCertificate=True",
```

6. Rebuild the Portal solution:
   - Right-click on the solution in Solution Explorer
   - Select "Rebuild Solution"
   - Verify the build succeeds without errors

::: warning Note on Backslashes
When using a full instance name in JSON:
- Use double backslashes (`\\`) in the connection string
- Single backslash in SSMS connection dialog
:::

### Modeler Settings Setup

1. Open the Modeler solution in Visual Studio:
   - Navigate to `C:\Projects\GenerativeObjects\go-modeler`
   - Open `GO.Application.sln`

2. In Solution Explorer, locate the template files in WebApplicationLayer:
   - `appsettings.Development.orig.json`
   - `appsettings.Production.orig.json`

3. Follow the same process as Portal to create and configure your settings files.

4. Rebuild the Modeler solution:
   - Right-click on the solution in Solution Explorer
   - Select "Rebuild Solution"
   - Verify the build succeeds without errors

### Generator Settings Setup

1. Open the Generator solution in Visual Studio:
   - Navigate to `C:\Projects\GenerativeObjects\go-generator`
   - Open `GO.Generator.sln`

2. In Solution Explorer, locate the template files in WebApplicationLayer:
   - `appsettings.Development.orig.json`
   - `appsettings.Production.orig.json`

3. Follow the same process as Portal to create and configure your settings files.

4. Rebuild the Generator solution:
   - Right-click on the solution in Solution Explorer
   - Select "Rebuild Solution"
   - Verify the build succeeds without errors


::: tip Configuration Notes
- Ensure you use your exact SQL Server instance name in connection strings
- The SMTP settings can remain as placeholders for initial setup
- Ensure the `MetamodelScriptsFolder` path matches your actual GO-Metamodels location
:::

## Next Steps

After database setup:

1. [Configure IIS](/guide/installation/iis.md)
2. [Deploy Application](/guide/deployment/setup.md)
3. [Verify Installation](/guide/deployment/verification.md)

::: tip Database Maintenance
Remember to:
- Set up regular backups
- Monitor database growth
- Keep scripts updated
:::
