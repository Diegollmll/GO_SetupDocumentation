# Common Installation Issues

This guide addresses frequently encountered issues during GO installation and provides practical solutions.

## Visual Studio Setup

::: warning Visual Studio Installation Incomplete
Symptoms:
- Missing templates
- Build tools unavailable
- Incorrect .NET version
:::

**Solution:**
1. Open Visual Studio Installer
2. Modify installation:
   ```
   ☐ ASP.NET and web development
   ☐ .NET desktop development
   ☐ Data storage and processing
   ```
3. Repair installation if needed

## SQL Server Configuration

::: warning SQL Server Connection Issues
Symptoms:
- Cannot connect to database
- Windows Authentication fails
- TCP/IP connection errors
:::

**Quick Fixes:**
1. Enable TCP/IP:
   ```
   SQL Server Configuration Manager →
   SQL Server Network Configuration →
   Protocols → Enable TCP/IP
   ```

2. Configure Windows Authentication:
   ```sql
   -- Check authentication mode
   SELECT SERVERPROPERTY('IsIntegratedSecurityOnly');
   -- 1 = Windows Authentication only
   -- 0 = Mixed Mode
   ```

## IIS Setup Issues

::: warning IIS Configuration Problems
Symptoms:
- Application pools not starting
- Website not accessible
- URL Rewrite module errors
:::

**Solutions:**
1. Verify IIS Features:
   - Check all required IIS features are installed
   - Ensure URL Rewrite module is properly installed
   - Confirm .NET Core Hosting Bundle is installed

2. Check Application Pool Settings:
   - Verify identity settings are correct
   - Ensure proper .NET version is selected
   - Check start mode is set to "AlwaysRunning"

## File Permission Issues

::: warning Access Denied Errors
Symptoms:
- Cannot write to GOAPPS directory
- Deployment scripts fail
- Runtime access errors
:::

**Solutions:**
1. Set correct folder permissions:
   - Grant full control to IIS_IUSRS group
   - Ensure application pool identity has access
   - Check permissions on GenerativeObjects folder

2. Verify user permissions:
   - Ensure running as administrator when needed
   - Check Windows user has proper rights
   - Verify SQL Server permissions

## Getting Help

If you encounter issues not covered here:
1. Check Windows Event Viewer for specific error messages
2. Review IIS logs for detailed information
3. Contact support team through basecamp

::: tip
Most installation issues can be resolved by ensuring proper permissions and correctly installing all required components.
:::

## Next Steps

For a complete list of error messages and their solutions, see:
[Error Reference Guide](/guide/troubleshooting/error-reference.md) →