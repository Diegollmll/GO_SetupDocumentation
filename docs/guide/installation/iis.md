# Final Configuration Steps

## IIS Setup

### Create Main Website

1. Open IIS Manager:
   - Press Windows key and type "IIS"
   - Select "Internet Information Services (IIS) Manager"

2. Delete Default Web Site:
   - Expand server node
   - Expand "Sites"
   - Right-click "Default Web Site"
   - Select "Remove"

3. Create GO Applications website:
   - Right-click on "Sites"
   - Select "Add Website"
   - Configure:
     ```
     Site name: GO Applications
     Physical path: C:\inetpub\wwwroot\GOAPPS
     Port: 80
     ```
   - Click OK to create

### Convert Directories to Applications

::: tip
After deployment, the necessary directories should already exist under your GO Applications website. Converting them to applications will automatically create their respective application pools.
:::

1. In IIS Manager:
   - Expand "Sites"
   - Expand "GO Applications"
   - You should see directories:
     - go-meta-portal
     - go-meta-generator
     - go-meta-modeler

2. Convert each directory to an application:
   - Right-click on each directory
   - Select "Convert to Application"
   - Click OK (this will create the application pool automatically)

### Configure Application Pool Settings

After converting the directories to applications, configure each application pool:

1. Go to "Application Pools" in IIS Manager

2. For each application pool:
   - Right-click on the pool
   - Select "Advanced Settings"
   - Under "Process Model" > "Identity"
   - Click "..." button
   - Select "Custom account"
   - Click "Set"
   - Enter credentials:
     ```
     Username: .\YourUsername  (Example: .\john.doe)
     Password: YourWindowsPassword
     Confirm password: YourWindowsPassword
     ```
   - Click OK on all dialogs

### Verify Setup

1. Check website status:
   - Click on "GO Applications" site
   - In right panel, click "Start" if not already started

2. Check all applications:
   - Verify each application shows under the GO Applications site
   - Verify each has its own application pool
   - Check physical paths are correct

3. Check application pools:
   - Select "Application Pools"
   - Verify all pools show "Started" status
   - Start any stopped pools

## Deploy and Verify Applications

### Deploy Components

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
C:\Projects\GenerativeObjects\go-generator\Scripts\deployapplication.cmd
C:\Projects\GenerativeObjects\go-generator\Scripts\deploymodellerlibraries.bat
C:\Projects\GenerativeObjects\go-generator\Scripts\deployTaskPerformers.bat
```

3. Deploy Modeler:
```bash
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deployapplication.cmd
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploymodellerlibraries.bat
C:\Projects\GenerativeObjects\go-modeler\go-application\Scripts\deploydatabasescript.bat
```

### Verify Local Installation

1. Open your browser and navigate to:
   ```
   http://localhost/go-meta-portal
   ```

2. You should see the GO login page:
   - If the page loads successfully, your deployment is working
   - Default credentials are:
     ```
     Username: Admin
     Password: Admin
     ```
   - After logging in, you should see the GO Portal dashboard

::: tip Troubleshooting
If you encounter any issues:
1. Check IIS Application Pool identities
2. Verify all databases are created
3. Check deployment logs
4. Try running `iisreset` again
5. Clear browser cache and try again
6. Check Windows Event Viewer for specific errors

If the page doesn't load:
1. Verify you can ping localhost
2. Check if the application pool is running
3. Look for any stopped services in IIS
4. Verify URL rewrite module is installed correctly
:::

## Next Steps

Now that you have GO running locally, you can proceed to:
[Creating Your First GO Application](/guide/development/first-app.md) →