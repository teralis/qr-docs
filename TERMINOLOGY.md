# qrtub Terminology Guide

## Product Terms

### Core Features
- **qrtub** - The complete product suite for managing physical items with QR codes.
- **Tub** - A workspace container that organizes related Lists and items. Think of it as a digital filing cabinet.
- **List** - A collection of items within a Tub, displayed in a customizable grid layout.
- **Profile Page** - A dynamic page generated from an item's details, displaying various cards that aggregate information and actions.
- **Action Link Card** - A configurable set of actions and links associated with an item on their profile page.
- **QR code** - A unique identifier that contains an Access Link.
- **Access Link** - A qrtub URL embedded in QR codes that redirects to the item's Destination.
- **Destination** - The landing location when scanning a QR code, either a qrtub Profile Page or a Direct Link.

### Item Management
- **Item** - Any physical object that has been added to a List.
- **Digital Twin** - The digital representation of a physical item in qrtub.
- **Grid View** - The default layout for displaying items in a List.
- **Quick Actions** - Frequently used actions that appear when hovering over an item.
- **Batch Operations** - Actions performed on multiple items simultaneously.

### QR Code Features
- **Code Generation** - The process of creating new QR codes for items.
- **Scan History** - A log of when and where QR codes have been scanned.
- **Landing Page** - The page that appears when a QR code is scanned.
- **Print Layout** - A template for printing multiple QR codes.
- **Code Style** - Visual customization options for QR codes.
- **Destination Type** - Choice between Profile Page or Direct Link as the QR code target.
- **Access Link Generation** - Creation of unique qrtub URLs for QR codes.

### Access Link Features
- **Access URL** - The unique qrtub URL that handles redirection.
- **Link Tracking** - Individual scan and usage statistics for each Access Link.
- **Link Status** - Active, disabled, or expired state of the Access Link.
- **Access Rules** - Conditions that control when and how the link can be used.
- **Link Expiry** - Optional time-based deactivation of Access Links.
- **Multiple Links** - Different Access Links pointing to the same Destination.

### Action Link Card Components
- **Action Link Card** - A card on a profile page that aggregates links to external web pages and actions.
- **Action Button** - A clickable element that performs a specific function.
- **External Link** - A connection to an outside resource or webpage.
- **Integration** - A connection with third-party services or tools.
- **Workflow** - A series of automated actions triggered by specific events.
- **Card Template** - A pre-configured set of action links and settings.

### Destination Types
- **Profile Page** - A qrtub-hosted page showing item details and action cards.
- **Direct Link** - An external URL that bypasses the qrtub interface.
- **Landing URL** - The final destination where users arrive after scanning.
- **Redirect Rules** - Conditions that determine the final destination.
- **Default Route** - The standard path taken when no special rules apply.

### Profile Page Components
- **Profile Layout** - The overall structure and arrangement of cards on a profile page.
- **Information Card** - Displays core item details and metadata.
- **Action Link Card** - Aggregates links to external tools and web pages.
- **Status Card** - Shows the current state and history of the item.
- **Custom Card** - User-defined card types for specific information display.
- **Card Order** - The arrangement and priority of cards on the profile page.

### Access Control
- **Owner** - The user who created a Tub or List.
- **Collaborator** - A user who has been granted access to a Tub or List.
- **Permission Level** - The set of actions a user is allowed to perform.
- **Share Link** - A URL that grants specific access to a Tub or List.
- **Access Group** - A collection of users with similar permissions.

### Organization
- **Tag** - A label for categorizing and filtering items.
- **Filter** - A way to show only items meeting specific criteria.
- **Sort Order** - The arrangement of items based on selected attributes.
- **Search** - A function to find specific items across Tubs and Lists.
- **Category** - A broad grouping of similar items.

## Common Actions

### Item Operations
- "Add to List"
- "Generate QR Code"
- "Create Access Link"
- "Configure Action Link Card"
- "Set Destination"
- "Customize Profile Page"
- "Move to Tub"
- "Apply Template"

### Management Tasks
- "Share Access"
- "Export Data"
- "Print Codes"
- "Update Information"
- "Archive Item"

### Access Link Management
- "Generate New Link"
- "Disable Access Link"
- "Set Link Expiry"
- "Configure Access Rules"
- "View Link Analytics"
- "Manage Multiple Links"

### Destination Management
- "Set Landing Page"
- "Configure Direct Link"
- "Update Redirect Rules"
- "Test Destination"
- "View Scan Analytics"

### Batch Actions
- "Bulk Import"
- "Mass Update"
- "Batch Print"
- "Multi-select"
- "Group Edit"

### Profile Page Actions
- "Add Card"
- "Rearrange Cards"
- "Configure Card"
- "Share Profile"
- "Export Profile"

## Status Terms
- **Active** - Currently in use and accessible
- **Archived** - Stored but not actively used
- **Pending** - Awaiting action or confirmation
- **Shared** - Accessible to multiple users
- **Private** - Restricted to owner access only
- **Expired** - Access Link that has passed its expiry date
- **Disabled** - Access Link manually deactivated

## Updates
Last updated: ${new Date().toISOString().split('T')[0]}

*Note: This guide should be referenced when writing documentation or user interface text to ensure consistency across all materials.* 