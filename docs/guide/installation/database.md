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

3. At the top of the script, keep only the basic CREATE DATABASE statement:
   ```sql
   CREATE DATABASE GOPortal
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

1. Navigate to the Portal project:
   ```bash
   C:\Projects\GenerativeObjects\go-portal\GeneratedCode\WebApplicationLayer
   ```

2. Create two files:
   - `appsettings.Development.json`
   - `appsettings.Production.json`

3. Add the following content to both files (replace INSTANCE_NAME with your SQL Server instance name):

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

::: warning Note on Backslashes
When using a full instance name in JSON:
- Use double backslashes (`\\`) in the connection string
- Single backslash in SSMS connection dialog
:::

### Generator Settings Setup

1. Navigate to the Generator project:
   ```bash
   C:\Projects\GenerativeObjects\go-generator\GeneratedCode\WebApplicationLayer
   ```

2. Create the same settings files with identical content:
   - `appsettings.Development.json`
   - `appsettings.Production.json`

### Modeler Settings Setup

1. Navigate to the Modeler project:
   ```bash
   C:\Projects\GenerativeObjects\go-modeler\GeneratedCode\WebApplicationLayer
   ```

2. Create the same settings files with identical content:
   - `appsettings.Development.json`
   - `appsettings.Production.json`

::: tip Configuration Notes
- Ensure you use your exact SQL Server instance name in connection strings
- The SMTP settings can remain as placeholders for initial setup
- Ensure the `MetamodelScriptsFolder` path matches your actual GO-Metamodels location
:::

::: warning Verify Setup
After configuration:
1. Check SQL Server instance name matches your installation
2. Verify all paths exist
3. Confirm your connection strings are correct
4. Ensure you can connect to the databases
:::

## Deployment Process

::: warning Important
Before running any deployment scripts, you must reset IIS:
1. Open Command Prompt as Administrator
2. Run the command: `iisreset`
:::

1. Deploy Portal:
```bash
# First reset IIS
iisreset

# Then run deployment scripts in order:
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_application.cmd
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_runtime_libraries.cmd
```

2. Deploy Generator (run in order):
```bash
# Reset IIS
iisreset

# Deploy application
C:\Projects\GenerativeObjects\go-generator\Scripts\deployapplication.cmd

# Deploy libraries
C:\Projects\GenerativeObjects\go-generator\Scripts\deploymodellerlibraries.bat

# Deploy task performers
C:\Projects\GenerativeObjects\go-generator\Scripts\deployTaskPerformers.bat
```

3. Deploy Modeler (run in order):
```bash
# Reset IIS
iisreset

# Deploy application
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deployapplication.cmd

# Deploy libraries
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploymodellerlibraries.bat

# Deploy database script
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploydatabasescript.bat
```

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
