# Creating Your First GO Application

::: warning Work in Progress
🚧 The steps for creating and developing GO applications are currently under construction 🚧

The GO setup and installation process is complete and verified
Application development pages are being actively updated
Features and capabilities documentation is still evolving
:::

## Prerequisites

::: warning Before You Begin
Ensure you have:
- Completed GO installation
- Verified deployment
- Access to GO Meta Portal
- Required permissions
:::

## Creating a New Application

### Step 1: Access GO Meta Portal

1. Open your browser
2. Navigate to:
   ```
   http://localhost/go-meta-portal
   ```
3. Login with your credentials

### Step 2: Create New Application

1. Click "Applications" tab
2. Click "New Application"
3. Fill in application details:
   ```
   Application Name: MyFirstApp
   Meta modeler: GenerativeObjects
   Meta generator: Generative Objects Modeller Core Generation Models
   ```
4. Click "Save"

## Application Configuration

### Step 1: Database Setup

1. Create application database:
   ```sql
   CREATE DATABASE MyFirstApp;
   GO
   ```

2. Configure connection:
   - Open application settings
   - Set connection string:
   ```json
   {
     "MainConnectionString": "data source=.\\SQLEXPRESS;initial catalog=MyFirstApp;integrated security=SSPI"
   }
   ```

### Step 2: Basic Configuration

1. Open Membership settings:
   ```
   Administration → Platform Configuration → Membership
   ```

2. Configure authentication:
   ```
   Security Provider: Application
   ```

## Creating Business Model

### Step 1: Create Entity

1. Navigate to:
   ```
   Business Model → Entities → New
   ```

2. Create Customer entity:
   ```
   Name: Customer
   Internal Name: Customer
   ```

3. Add fields:
   ```
   - Id (Auto-generated)
   - Name (Text)
   - Email (Text)
   - Phone (Text)
   - Status (Boolean)
   ```

### Step 2: Create Relations

::: tip Entity Relations
Define how entities relate to each other
:::

1. Navigate to Entity Relations
2. Create relation:
   ```
   Type: One to Many
   Parent: Customer
   Child: Order
   ```

## Creating User Interface

### Step 1: Create Form

1. Navigate to:
   ```
   Presentation Elements → Forms → New
   ```

2. Configure form:
   ```
   Name: CustomerForm
   Entity: Customer
   ```

3. Add form fields:
   ```
   - Name (TextBox)
   - Email (TextBox)
   - Phone (TextBox)
   - Status (Checkbox)
   ```

### Step 2: Create Grid

1. Navigate to:
   ```
   Presentation Elements → Grids → New
   ```

2. Configure grid:
   ```
   Name: CustomerGrid
   Entity: Customer
   ```

3. Add columns:
   ```
   - Name
   - Email
   - Status
   ```

### Step 3: Create Page

1. Navigate to:
   ```
   Presentation Elements → Pages → New
   ```

2. Configure page:
   ```
   Name: CustomerPage
   Master Page: One column
   ```

3. Add elements:
   ```
   - CustomerGrid
   - CustomerForm
   ```

## Generating the Application

### Step 1: Generate Code

1. Click "Generate" button
2. Select options:
   ```
   ☐ Generate All
   ☐ Include Documentation
   ```

3. Start generation

### Step 2: Build Application

1. Open solution in Visual Studio
2. Build solution:
   ```
   Build → Build Solution
   ```

3. Fix any build errors

## Deployment

### Step 1: Deploy Application

1. Run deployment scripts:
   ```bash
   deployapplication.cmd
   deployservices.cmd
   ```

2. Configure IIS:
   ```
   - Create application in IIS
   - Set application pool
   - Configure authentication
   ```

### Step 2: Database Update

1. Run database scripts:
   ```
   LiveUpdateDatabaseScript.sql
   ```

2. Verify database:
   ```sql
   SELECT * FROM Customer;
   ```

## Testing the Application

### Step 1: Launch Application

1. Access application:
   ```
   http://localhost/MyFirstApp
   ```

2. Login with default credentials:
   ```
   Username: Admin
   Password: Admin
   ```

### Step 2: Test Features

::: tip Test Core Features
Verify basic CRUD operations
:::

1. Create new customer:
   ```
   - Click "New Customer"
   - Fill in details
   - Save
   ```

2. View customer list:
   ```
   - Open customer grid
   - Verify data display
   - Test sorting/filtering
   ```

3. Update customer:
   ```
   - Select customer
   - Modify details
   - Save changes
   ```

## Common Issues

### Generation Fails

::: warning Generation Issues
Common solutions:
1. Check model validity
2. Verify database connection
3. Clear temporary files
:::

### Build Errors

::: warning Build Problems
If build fails:
1. Check references
2. Update NuGet packages
3. Clean solution
:::

### Runtime Errors

::: warning Runtime Issues
Common fixes:
1. Verify deployment
2. Check permissions
3. Review logs
:::



::: tip Congratulations!
You've created your first GO application! Continue exploring more features to build more complex applications.
:::
