# 📱 GeoSnap Field Reporter

A mobile field reporting application built with React Native (Expo) that allows users to capture, categorize, and track real-world issues using location data and photos.

## 🚀 Overview

GeoSnap Field Reporter is designed for users who need to document and track field issues such as safety hazards, maintenance problems, or environmental concerns.

Users can:
* Capture real-time location 📍
* Take photos 📸
* Categorize and prioritize issues ⚠️
* View reports on an interactive map 🗺️
* Track report status (Open / Resolved)
  
## 🛠️ Tech Stack

### Frontend
* React Native (Expo)
* TypeScript
* Expo Router

### APIs & Native Features
* expo-location – GPS and permissions
* expo-camera – photo capture

### Mapping
* react-native-maps – interactive map and markers

### State Management
* React Context API

  
## ✨ Features
### 📍 Location-Based Reporting
* Automatically retrieves user’s current GPS location
* Associates each report with coordinates
  
### 📸 Photo Capture
* Built-in camera integration
* Option to retake or attach photos to reports
  
### 🗂️ Report Management
* Categories (e.g., Safety, Maintenance, Damage)
* Severity levels (Low, Medium, High)
* Notes and descriptions
  
### 🗺️ Interactive Map
* Displays all reports as markers
* Color-coded pins based on severity:
  * 🔴 High
  * 🟠 Medium
  * 🟢 Low
* Shows current user location
  
### 📋 Report List
* Displays reports in a clean list format
* Includes:
  * Thumbnail
  * Category
  * Severity
  * Status
* Ability to mark reports as resolved
  
## 📱 Screens
* Home Dashboard (stats overview)
* Create Report
* Map View
* Reports List
  
## ⚙️ Installation & Setup
#### 1. Clone the repository
```
git clone https://github.com/stat3m3nt/geosnap-field-reporter.git
cd geosnap-field-reporter
```

#### 2. Install dependencies
```
npm install
```
#### 3. Start the development server
```
npx expo start
```

## ▶️ Running the App
### Option 1: Android Device (Recommended)
* Install Expo Go
* Scan the QR code
### Option 2: Android Emulator
* Install Android Studio
* Create an emulator
* Run:
```
npx expo start
```
* Press a

  
## ⚠️ Known Limitations
* Map does not work on web (react-native-maps is mobile-only)
* Expo Go may show blank maps on newer SDK versions (SDK 55 issue)
* Works best on:
  * Android device
  * Android emulator / development build
    
## 🧠 Design Decisions
* Context API used for lightweight global state management
* Custom hooks (useCreateReport, useCurrentLocation) used for separation of concerns
* Modular structure for scalability and maintainability
  
## 🐞 Challenges & Fixes
#### 1. Map Not Rendering
* Cause: Expo Go + SDK 55 + react-native-maps issue
* Fix: Tested using emulator / development build
  
#### 2. Location Permissions
* Handled using expo-location
* Graceful fallback with alerts
  
#### 3. Camera Integration
* Managed async permission flow
* Ensured camera readiness before capture
  
#### 4. Android Environment Setup
* Required manual setup of:
  * ANDROID_HOME
  * platform-tools in PATH
* Resolved adb not recognized issue
  
## 📈 Future Improvements
* Backend integration (Firebase / Node.js)
* Persistent storage (AsyncStorage or database)
* Real-time sync
* User authentication
* Improved UI/UX animations
* Web-compatible map implementation
  
## 🎥 Demo

(demo-link coming)

## 📂 Project Structure
src/
├── app/
│   ├── tabs/
│   │   ├── map.tsx
│   │   ├── reports.tsx
│   │   ├── create-report.tsx
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   ├── _layout.tsx
│
├── components/
│   ├── common/
│   │   ├── EmptyState.tsx
│   │   ├── ScreenHeader.tsx
│
├── context/
│   └── ReportContext.tsx
│
├── constants/
│   └── colors.ts
│   └── reportOptions.ts
├── reports/
│   └── ReportCard.tsx
│   └── ReportList.tsx
│   └── ReportPhotoInput.tsx
│   └── SeveritySelector.tsx
│
├── hooks/
│   ├── useCreateReport.ts
│   └── useCurrentLocation.ts
│
├── utils/
│   └── reportHelpers.ts

## 👤 Author
Andrew Evboifo
📍 Ontario, Canada
