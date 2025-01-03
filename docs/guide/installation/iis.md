# Final Configuration Steps

## IIS Setup

1. Open IIS Manager and create application pools:
   - Go Portal
   - Go Generator
   - Go Modeler

2. Configure each application pool:
   ```
   Identity → Custom account
   Username: .\YourUsername (with backslash)
   Password: YourPassword
   ```

## Deploy Applications

::: warning Important
Before running any deployment scripts, always run `iisreset` first.
:::

1. Deploy Portal:
```bash
# Reset IIS
iisreset

# Run deployment scripts in order
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_application.cmd
C:\Projects\GenerativeObjects\go-portal\Scripts\deploy_runtime_libraries.cmd
```

2. Deploy Generator:
```bash
iisreset
C:\Projects\GenerativeObjects\go-generator\Scripts\deployapplication.cmd
C:\Projects\GenerativeObjects\go-generator\Scripts\deploymodellerlibraries.bat
C:\Projects\GenerativeObjects\go-generator\Scripts\deployTaskPerformers.bat
```

3. Deploy Modeler:
```bash
iisreset
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deployapplication.cmd
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploymodellerlibraries.bat
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploydatabasescript.bat
```

## Configure Applications in IIS

1. Create main website:
   ```
   Site name: GO Applications
   Physical path: C:\inetpub\wwwroot\GOAPPS
   Port: 80
   ```

2. Convert directories to applications:
   - Right-click each directory
   - Convert to Application
   - Select corresponding application pool

## Final Verification

1. Access Portal:
   ```
   http://localhost/go-meta-portal
   ```

2. Login with default credentials:
   ```
   Username: Admin
   Password: Admin
   ```

3. Create a test application:
   - Click 'New Application'
   - Enter test details
   - Verify database creation

::: tip Troubleshooting
If you encounter any issues:
1. Check IIS Application Pool identities
2. Verify all databases are created
3. Check deployment logs
4. Try running `iisreset` again
:::
