1.  Project IntroductionFoodStore is a comprehensive marketplace platform featuring a three-tier user ecosystem. It allows vendors to manage digital storefronts, users to purchase food items, and administrators to oversee the integrity of the platform through a verification system.
2. User Roles & Access ControlThe system distinguishes between three types of users. Access is controlled via Firestore User Profiles and Frontend Route Guards.RoleSignup MethodDefault StatusPrimary AccessAdminInternal ConfigVerifiedAdmin Panel, Vendor Verification, Global DataVendorPublic SignupPendingShop Setup, Item/Category ManagementUserPublic SignupVerifiedMarketplace, Cart, Ordering
3. System Architecture & Database (Firestore)
3.1 User Collection (/users/{uid})Stores the identity and permission level of every registered user.uid: string (Primary Key)email: stringrole: "admin" | "vendor" | "user"isVerified: boolean (Must be true for Vendors to sell).
3.2 Shops Collection (/shops/{shopId})Stores the storefront details for Vendors.vendorId: string (Refers to User UID)shopName: stringcategoryList: array (Strings)isActive: boolean
3.3 Items Collection (/items/{itemId})The inventory of food products.shopId: string (Refers to Shop)name: stringprice: numbercategory: stringimageUrl: string
4. Feature Specifications
4.1 Authentication & RegistrationLogic: On signup, the application triggers a Firestore set() operation to create a profile.Security: Use Firebase Auth to handle tokens. On the frontend, if a user attempts to access a dashboard not matching their role, they are redirected to a 403 Unauthorized page.
4.2 Vendor Management (The CRUD System)Shop Setup: Vendors can upload branding and shop details.Category Management: Create grouping for food (e.g., "Desserts", "Main Course").Inventory: Vendors have full CRUD (Create, Read, Update, Delete) permissions on items linked to their shopId.
4.3 User Experience (The Consumer Side)Shop Discovery: Users can browse all shops where isVerified == true.Ordering: Users can add items to a local cart and submit an order document to an orders collection.
4.4 Admin Oversight (The Control Panel)Verification Logic: Admin dashboard queries Firestore for users where role == "vendor" and isVerified == false.Action: Admin can click "Verify," which updates the vendor's status, enabling their shop to appear in the User marketplace.
5. Security Rules (The Firewall)To ensure data integrity, the following Firebase Security Rules must be implemented:JavaScriptservice cloud.firestore {
    match /databases/{database}/documents {

        // Function to check role
        function getRole() {
          return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
        }

        // Rules for Items
        match /items/{item} {
          allow read: if true; // Everyone can see food
          allow write: if getRole() == 'vendor' &&
                       get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isVerified == true;
        }

        // Rules for Admin
        match /users/{user} {
          allow update: if getRole() == 'admin';
          allow read, write: if request.auth.uid == user;
        }

    }
    }

2.  Route Guarding Logic (Frontend)Developers should implement a higher-order component (HOC) or Middleware:Check Auth: Is the user logged in?Fetch Role: Get role from the User Document.Validate: Does role match the route prefix (/admin, /vendor, /user)?Redirect: If mismatch, return to Login.
