# Windows Configuration

## IIS Features Installation

### Step 1: Access Windows Features

1. Open Control Panel
2. Navigate to:
   ```
   Programs > Programs and Features > Turn Windows features on or off
   ```
   Or
3. Press `Windows + R`, type `optionalfeatures.exe`, and press Enter

### Step 2: Enable Required Features

Enable the following features:

```
☐ Internet Information Services
 ├─☐ Web Management Tools
 │  ├─☐ IIS Management Console
 │  ├─☐ IIS Management Scripts and Tools
 │  └─☐ IIS Management Service
 └─☐ World Wide Web Services
    ├─☐ Application Development Features
    │  ├─☐ .NET Extensibility 4.8
    │  ├─☐ ASP.NET 4.8
    │  ├─☐ ISAPI Extensions
    │  └─☐ ISAPI Filters
    ├─☐ Common HTTP Features (all)
    └─☐ Security
       ├─☐ Basic Authentication
       └─☐ Windows Authentication
```

### Step 3: Required Directories Setup

1. Create directories:
   ```
   C:\inetpub\wwwroot\GOAPPS
   C:\Program Files\GenerativeObjects
   ```

2. Set directory permissions:
   - Right-click each folder
   - Properties → Security → Edit
   - Add "All Users"
   - Grant Full Control
   - Click Apply and OK


## Next Steps

After completing Windows configuration:
1. Proceed to [Repositories and Database Setup](./database.md)
2. Continue with [IIS Configuration](./iis.md)
