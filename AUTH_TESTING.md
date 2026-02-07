# Authentication System Testing Guide

## Overview
This document provides comprehensive testing procedures for the Ontario CyberSafe authentication system.

## Test Credentials

### Test Account 1 (Valid)
- **Email**: test@example.com
- **Password**: TestPassword123!
- **Name**: Test User
- **Organization**: Test Organization

### Test Account 2 (Valid)
- **Email**: admin@cybersafe.ca
- **Password**: AdminPass123!
- **Name**: Admin User
- **Organization**: Ontario Government

## Testing Procedures

### 1. Sign-Up Flow Testing

#### Test 1.1: Valid Sign-Up
1. Navigate to `/auth`
2. Click "Sign Up" tab
3. Fill in the form:
   - Full Name: `John Doe`
   - Email: `john.doe@example.com`
   - Organization: `City of Toronto`
   - Password: `SecurePass123!`
   - Confirm Password: `SecurePass123!`
4. Click "Create Account"
5. **Expected**: Account created, redirected to dashboard

#### Test 1.2: Duplicate Email
1. Sign up with `test@example.com`
2. Sign out
3. Try to sign up again with same email
4. **Expected**: Error message: "An account with this email already exists"

#### Test 1.3: Weak Password
1. Try to sign up with password: `weak`
2. **Expected**: Error message about password requirements

#### Test 1.4: Mismatched Passwords
1. Enter password: `SecurePass123!`
2. Enter confirm password: `DifferentPass123!`
3. **Expected**: Error message: "Passwords do not match"

#### Test 1.5: Missing Fields
1. Leave any required field empty
2. Click "Create Account"
3. **Expected**: Error message for missing field

#### Test 1.6: Invalid Email
1. Enter email: `notanemail`
2. **Expected**: Error message: "Please enter a valid email address"

### 2. Sign-In Flow Testing

#### Test 2.1: Valid Sign-In
1. Navigate to `/auth`
2. Ensure you're on "Sign In" tab
3. Enter email: `test@example.com`
4. Enter password: `TestPassword123!`
5. Click "Sign In"
6. **Expected**: Signed in successfully, redirected to dashboard

#### Test 2.2: Incorrect Password
1. Enter email: `test@example.com`
2. Enter password: `WrongPassword123!`
3. Click "Sign In"
4. **Expected**: Error message: "Incorrect password. Please try again."

#### Test 2.3: Non-Existent Email
1. Enter email: `nonexistent@example.com`
2. Enter password: `AnyPassword123!`
3. Click "Sign In"
4. **Expected**: Error message: "No account found with this email"

#### Test 2.4: Empty Email
1. Leave email field empty
2. Enter password: `TestPassword123!`
3. Click "Sign In"
4. **Expected**: Error message: "Email address is required"

#### Test 2.5: Empty Password
1. Enter email: `test@example.com`
2. Leave password field empty
3. Click "Sign In"
4. **Expected**: Error message: "Password is required"

### 3. Session Management Testing

#### Test 3.1: Session Persistence
1. Sign in with valid credentials
2. Refresh the page (F5)
3. **Expected**: Still logged in, user data preserved

#### Test 3.2: Logout
1. Sign in with valid credentials
2. Click logout button
3. Try to access `/dashboard`
4. **Expected**: Redirected to `/auth`

#### Test 3.3: Session Expiration
1. Sign in with valid credentials
2. Check localStorage for session data
3. Wait for session to expire (24 hours)
4. **Expected**: Session automatically cleared

#### Test 3.4: Multiple Tabs
1. Sign in in Tab 1
2. Open Tab 2 and navigate to dashboard
3. **Expected**: Logged in on Tab 2 as well

### 4. Password Strength Testing

#### Test 4.1: Weak Password Indicator
1. Navigate to sign-up
2. Type password: `weak`
3. **Expected**: Password strength shows "Weak" (red)

#### Test 4.2: Fair Password Indicator
1. Type password: `Medium123`
2. **Expected**: Password strength shows "Fair" (yellow)

#### Test 4.3: Strong Password Indicator
1. Type password: `VeryStrong123!@#`
2. **Expected**: Password strength shows "Strong" (green)

### 5. Form Validation Testing

#### Test 5.1: Email Format Validation
- Valid: `user@example.com` ✓
- Valid: `user.name@example.co.uk` ✓
- Invalid: `userexample.com` ✗
- Invalid: `user@` ✗
- Invalid: `@example.com` ✗

#### Test 5.2: Password Requirements
- Must be at least 8 characters
- Must contain uppercase letter (A-Z)
- Must contain lowercase letter (a-z)
- Must contain number (0-9)

#### Test 5.3: Name Validation
- Accepts letters, spaces, hyphens
- Minimum 2 characters
- Maximum 255 characters

#### Test 5.4: Organization Validation
- Accepts letters, numbers, spaces, hyphens, periods
- Minimum 2 characters
- Maximum 255 characters

### 6. Security Testing

#### Test 6.1: Password Storage
1. Sign up with password: `TestPassword123!`
2. Open browser DevTools → Application → LocalStorage
3. Check `ocs_users` entry
4. **Expected**: Password is hashed, not plain text

#### Test 6.2: XSS Prevention
1. Try to sign up with name: `<script>alert('XSS')</script>`
2. **Expected**: Script tags are removed/escaped

#### Test 6.3: SQL Injection Prevention
1. Try to sign in with email: `' OR '1'='1`
2. **Expected**: Treated as literal email, no injection occurs

#### Test 6.4: Case-Insensitive Email
1. Sign up with email: `Test@Example.com`
2. Sign out
3. Sign in with email: `test@example.com`
4. **Expected**: Successfully signed in

### 7. User Profile Testing

#### Test 7.1: View Profile
1. Sign in with valid credentials
2. Navigate to `/profile`
3. **Expected**: User information displayed correctly

#### Test 7.2: Update Profile
1. On profile page, click "Edit Profile"
2. Change name to `Updated Name`
3. Click "Save Changes"
4. **Expected**: Profile updated, changes persisted

#### Test 7.3: Profile Persistence
1. Update profile information
2. Sign out
3. Sign back in
4. Navigate to profile
5. **Expected**: Updated information still there

## Browser Compatibility Testing

Test authentication on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Performance Testing

### Test 8.1: Sign-Up Performance
1. Measure time from form submission to redirect
2. **Expected**: < 2 seconds

### Test 8.2: Sign-In Performance
1. Measure time from form submission to redirect
2. **Expected**: < 1 second

### Test 8.3: Profile Load Performance
1. Measure time to load profile page
2. **Expected**: < 1 second

## Accessibility Testing

- [ ] Form labels are properly associated with inputs
- [ ] Error messages are announced to screen readers
- [ ] Password visibility toggle is keyboard accessible
- [ ] Form can be completed using keyboard only
- [ ] Color contrast meets WCAG AA standards

## Test Results Template

```
Test: [Test Name]
Date: [Date]
Tester: [Name]
Browser: [Browser/Version]
OS: [Operating System]

Result: [PASS/FAIL]
Notes: [Any observations]
Screenshots: [If applicable]
```

## Known Issues

None currently documented. Please report any issues found during testing.

## Future Enhancements

- [ ] Two-factor authentication (2FA)
- [ ] Social login (Google, Microsoft)
- [ ] Password reset via email
- [ ] Account recovery options
- [ ] Login activity log
- [ ] Device management
