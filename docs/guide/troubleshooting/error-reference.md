# Error Reference Guide

This guide covers common errors encountered during GO installation and their solutions.

## IIS Configuration Errors

::: danger Error: HTTP Error 500.19
Internal Server Error: Cannot read configuration file
:::

**Cause:**
- Incorrect IIS configuration
- Missing permissions
- Corrupt web.config

**Solution:**
```powershell
# Check IIS configuration
1. Verify application pool settings
2. Check folder permissions:
   icacls "C:\inetpub\wwwroot\GenerativeObjectsApplications" /grant "IIS AppPool\GOApplicationPool:(OI)(CI)F"
3. Reset IIS:
   iisreset
```

## Database Connection Errors

::: danger Error: Cannot open database "GoPortal" requested by the login
The login failed. Login failed for user 'IIS APPPOOL\GOApplicationPool'
:::

**Cause:**
- SQL Server permissions
- Incorrect connection string
- SQL Server configuration

**Solution:**
```sql
-- Grant necessary permissions
USE [GoPortal]
GO
CREATE USER [IIS APPPOOL\GOApplicationPool] FOR LOGIN [IIS APPPOOL\GOApplicationPool]
GO
ALTER ROLE db_datareader ADD MEMBER [IIS APPPOOL\GOApplicationPool]
GO
ALTER ROLE db_datawriter ADD MEMBER [IIS APPPOOL\GOApplicationPool]
GO
```

## Application Pool Errors

::: danger Error: Application pool stopped unexpectedly
The worker process failed to initialize correctly
:::

**Cause:**
- Incorrect identity settings
- Missing permissions
- Invalid .NET version

**Solution:**
1. Check application pool configuration:
   ```
   - Verify identity (.\username format)
   - Ensure password is correct
   - Confirm .NET version settings
   ```

2. Verify Windows Authentication:
   ```
   - Check IIS Authentication settings
   - Verify Windows credentials
   - Reset IIS if needed
   ```

## URL Rewrite Module Errors

::: danger Error: Module not found
Could not find the URL Rewrite Module
:::

**Cause:**
- Module not installed
- Incorrect installation
- IIS restart required

**Solution:**
1. Verify installation:
   ```
   - Check in IIS Manager for URL Rewrite module
   - Reinstall if missing
   - Run iisreset after installation
   ```

2. Check web.config:
   ```xml
   <system.webServer>
     <modules>
       <add name="RewriteModule" />
     </modules>
   </system.webServer>
   ```

## Visual Studio Installation Errors

::: danger Error: Missing Required Components
Required workload or component is not installed
:::

**Cause:**
- Incomplete Visual Studio installation
- Missing workloads
- Corrupted installation

**Solution:**
1. Using Visual Studio Installer:
   ```
   - Modify installation
   - Add missing workloads
   - Repair if needed
   ```

2. Verify components:
   ```
   - ASP.NET workload
   - .NET desktop development
   - Web development tools
   ```

::: tip Installation Tips
Most installation errors can be resolved by:
1. Running installers as Administrator
2. Ensuring proper permissions
3. Following the installation steps in order
:::