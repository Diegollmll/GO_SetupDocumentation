# Common Issues

This guide addresses frequently encountered issues in GO development and provides practical solutions.

## Installation Issues

### Visual Studio Setup

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

### SQL Server Configuration

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

## Development Issues

### Git Problems

::: warning Git Configuration Issues
Symptoms:
- Cannot pull/push changes
- SSH key errors
- Authentication failures
:::

**Solutions:**
1. Verify SSH configuration:
   ```bash
   # Test SSH connection
   ssh -T git@github.com
   
   # Check SSH agent
   eval $(ssh-agent -s)
   ssh-add ~/.ssh/id_ed25519
   ```

2. Check Git configuration:
   ```bash
   git config --list
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### Database Migration

::: warning Database Update Problems
Symptoms:
- Missing tables
- Column mismatches
- Constraint violations
:::

**Solutions:**
1. Check database version:
   ```sql
   SELECT ModelRevisionId 
   FROM [GO.LiveUpdate].ModelSync;
   ```

2. Apply missing updates:
   ```
   1. Navigate to: SQL/LiveUpdate.History
   2. Sort files by version
   3. Run missing scripts in order
   ```

## Runtime Issues

### Performance Problems

::: warning Slow Application Performance
Symptoms:
- Slow page loads
- Database timeouts
- High resource usage
:::

**Solutions:**
1. Check IIS settings:
   ```xml
   <system.web>
     <compilation debug="false"/>
     <caching>
       <outputCacheSettings>
         <outputCacheProfiles>
           <add name="Default" duration="3600"/>
         </outputCacheProfiles>
       </outputCacheSettings>
     </caching>
   </system.web>
   ```

2. Optimize database:
   ```sql
   -- Update statistics
   EXEC sp_updatestats;
   
   -- Check index fragmentation
   SELECT * FROM sys.dm_db_index_physical_stats;
   ```

### Memory Issues

::: warning Memory Consumption
Symptoms:
- Application pool crashes
- Out of memory exceptions
- Slow response times
:::

**Solutions:**
1. Configure application pool:
   ```
   Advanced Settings →
   Private Memory Limit: 1048576 (1GB)
   Virtual Memory Limit: 0 (no limit)
   ```

2. Monitor memory usage:
   ```powershell
   # Check memory usage
   Get-Process w3wp | Select-Object WorkingSet, VM
   ```

## Deployment Issues

### File Permission Problems

::: warning Access Denied Errors
Symptoms:
- Cannot write files
- Deployment script fails
- Runtime access errors
:::

**Solutions:**
1. Set folder permissions:
   ```powershell
   # Grant full control to application pool
   $path = "C:\inetpub\wwwroot\GenerativeObjectsApplications"
   $acl = Get-Acl $path
   $rule = New-Object System.Security.AccessControl.FileSystemAccessRule(
       "IIS APPPOOL\GOApplicationPool",
       "FullControl",
       "ContainerInherit,ObjectInherit",
       "None",
       "Allow"
   )
   $acl.SetAccessRule($rule)
   Set-Acl $path $acl
   ```

### URL Rewrite Issues

::: warning URL Rewrite Not Working
Symptoms:
- 404 errors
- Incorrect routing
- Module not loaded
:::

**Solutions:**
1. Verify module installation:
   ```xml
   <!-- Check web.config -->
   <system.webServer>
     <modules>
       <add name="RewriteModule" />
     </modules>
   </system.webServer>
   ```

2. Check rules configuration:
   ```xml
   <rewrite>
     <rules>
       <rule name="Example">
         <match url="^example/(.*)$" />
         <action type="Rewrite" url="example.aspx?id={R:1}" />
       </rule>
     </rules>
   </rewrite>
   ```

## Generation Issues

### Model Validation

::: warning Model Validation Fails
Symptoms:
- Invalid entity relationships
- Missing required fields
- Inconsistent data types
:::

**Solutions:**
1. Check entity definitions:
   ```
   - Verify primary keys
   - Check foreign key relationships
   - Validate field types
   ```

2. Review model constraints:
   ```
   - Required fields marked
   - Correct data types
   - Valid relationships
   ```

### Code Generation

::: warning Generation Process Issues
Symptoms:
- Incomplete generation
- Missing files
- Template errors
:::

**Solutions:**
1. Clear temporary files:
   ```powershell
   Remove-Item "C:\Windows\Temp\GO*" -Force -Recurse
   Remove-Item "$env:USERPROFILE\AppData\Local\Temp\GO*" -Force -Recurse
   ```

2. Verify templates:
   ```
   - Check custom templates
   - Validate modifications
   - Review generation logs
   ```

## Best Practices for Issue Prevention

### Regular Maintenance

1. Database Maintenance:
   ```sql
   -- Regular cleanup
   EXEC sp_updatestats;
   DBCC SHRINKDATABASE;
   ```

2. IIS Maintenance:
   ```powershell
   # Regular recycling
   Set-WebConfigurationProperty -Filter "system.applicationHost/applicationPools/applicationPoolDefaults" -Name "recycling.periodicRestart.time" -Value "00:00:00"
   ```

### Monitoring

1. Application Monitoring:
   ```
   - Check event logs
   - Monitor performance counters
   - Review application logs
   ```

2. Database Monitoring:
   ```sql
   -- Monitor connections
   SELECT * FROM sys.dm_exec_sessions;
   
   -- Check blocking
   SELECT * FROM sys.dm_exec_requests;
   ```

## Getting Support

### Support Resources

1. Internal Resources:
   ```
   - Documentation
   - Knowledge base
   - Team wiki
   ```

2. External Support:
   ```
   - GO support portal
   - Community forums
   - Technical support
   ```

::: tip Documentation
Keep track of issues and solutions for future reference.
:::

## Next Steps

After resolving common issues:

1. Review [Best Practices](../development/best-practices.md)
2. Check [Error Reference](./error-reference.md)
3. Update [Documentation](../development/documentation.md)

::: warning Prevention
Implement monitoring and maintenance procedures to prevent common issues.
:::
