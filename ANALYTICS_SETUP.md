# Google Analytics Integration Guide

## Overview

This document provides comprehensive instructions for setting up and using Google Analytics 4 (GA4) with the Ontario CyberSafe Certification platform.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Configuration](#configuration)
3. [Event Tracking](#event-tracking)
4. [Analytics Dashboard](#analytics-dashboard)
5. [Reporting](#reporting)
6. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account (create one if needed)
3. Click **"Create"** or **"Admin"** → **"Create Property"**
4. Fill in the property details:
   - **Property name**: Ontario CyberSafe Certification
   - **Reporting timezone**: America/Toronto
   - **Currency**: CAD
5. Click **"Create"**

### Step 2: Get Your Measurement ID

1. In the Google Analytics dashboard, go to **Admin** → **Data Streams**
2. Click on your web stream
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Configure Environment Variables

Add your Measurement ID to your environment configuration:

```bash
# .env.local or your environment configuration
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 4: Verify Installation

1. Deploy your application
2. Open the landing page in your browser
3. Open **Developer Tools** → **Console**
4. Type: `window.gtag` - you should see the gtag function
5. Go to Google Analytics → **Realtime** → **Overview**
6. You should see your session in real-time

---

## Configuration

### Analytics Module Location

The analytics integration is located in:
- **Main module**: `/client/src/lib/analytics.ts`
- **React hook**: `/client/src/hooks/useAnalytics.ts`
- **Integration**: `/client/src/App.tsx`

### Initialization

Analytics is automatically initialized when the app loads:

```typescript
// In App.tsx
useEffect(() => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId) {
    initializeAnalytics(measurementId);
  }
}, []);
```

---

## Event Tracking

### Available Events

The platform tracks the following events automatically:

#### Page Views
- **Event**: `page_view`
- **Data**: page path, page title
- **Triggered**: On every page navigation

#### Button Clicks
- **Event**: `button_click`
- **Data**: button name, button location
- **Triggered**: When users click tracked buttons

#### Conversions
- **Event**: `conversion`
- **Data**: conversion type, value
- **Triggered**: When users complete key actions

#### Sign-Up
- **Event**: `sign_up`
- **Data**: signup method
- **Triggered**: When users create an account

#### Login
- **Event**: `login`
- **Data**: login method
- **Triggered**: When users log in

#### Lesson Completion
- **Event**: `lesson_completed`
- **Data**: module ID, lesson ID, lesson title
- **Triggered**: When users complete a lesson

#### Quiz Completion
- **Event**: `quiz_completed`
- **Data**: module ID, score, passed status
- **Triggered**: When users complete a quiz

#### Certificate Generation
- **Event**: `certificate_generated`
- **Data**: certificate ID, module name
- **Triggered**: When users earn a certificate

#### Engagement
- **Event**: `engagement`
- **Data**: engagement type, duration
- **Triggered**: During user interactions

#### Scroll Depth
- **Event**: `scroll_depth`
- **Data**: scroll percentage
- **Triggered**: At 25%, 50%, 75%, 100% scroll depth

#### Form Submission
- **Event**: `form_submission`
- **Data**: form name, form status
- **Triggered**: When users submit forms

#### Error
- **Event**: `error`
- **Data**: error type, error message
- **Triggered**: When errors occur

#### Section View
- **Event**: `section_view`
- **Data**: section name
- **Triggered**: When users view specific sections

#### Pricing Interaction
- **Event**: `pricing_interaction`
- **Data**: pricing tier, action
- **Triggered**: When users interact with pricing

#### Feature View
- **Event**: `feature_view`
- **Data**: feature name
- **Triggered**: When users view features

### Custom Event Tracking

To track custom events in your components:

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a custom event
trackEvent('custom_event_name', {
  custom_property: 'value',
  another_property: 123
});
```

### Using the Analytics Hook

For React components, use the `useAnalytics` hook:

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

export default function MyComponent() {
  const { trackEvent, trackButtonClick, trackSectionView } = useAnalytics('my_page', 'My Page Title');

  const handleClick = () => {
    trackButtonClick('my_button', 'my_section');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
```

---

## Analytics Dashboard

### Key Metrics to Monitor

#### 1. **User Acquisition**
- **Location**: Reports → Acquisition → Overview
- **Metrics**: New users, user acquisition by channel
- **Action**: Identify which marketing channels drive the most traffic

#### 2. **Engagement**
- **Location**: Reports → Engagement → Overview
- **Metrics**: Session duration, bounce rate, pages per session
- **Action**: Optimize content for higher engagement

#### 3. **Conversions**
- **Location**: Reports → Conversions → Overview
- **Metrics**: Conversion rate, conversion funnel
- **Action**: Identify drop-off points and optimize

#### 4. **User Behavior**
- **Location**: Reports → User Journey → Funnel Analysis
- **Metrics**: User paths, conversion funnels
- **Action**: Understand user journey and optimize

#### 5. **Landing Page Performance**
- **Location**: Reports → Pages and Screens
- **Metrics**: Page views, scroll depth, time on page
- **Action**: Identify high-performing and underperforming pages

#### 6. **Pricing Page Conversions**
- **Location**: Reports → Events → pricing_interaction
- **Metrics**: Tier selection, conversion by tier
- **Action**: Optimize pricing strategy

#### 7. **Course Completion**
- **Location**: Reports → Events → lesson_completed, quiz_completed
- **Metrics**: Completion rate, time to completion
- **Action**: Identify difficult lessons and improve content

---

## Reporting

### Creating Custom Reports

#### 1. **Conversion Funnel Report**

1. Go to **Reports** → **Exploration**
2. Click **Create new exploration**
3. Select **Funnel exploration**
4. Add steps:
   - Step 1: `page_view` (path contains "landing")
   - Step 2: `button_click` (button_name = "get_started")
   - Step 3: `sign_up`
   - Step 4: `lesson_completed`
5. View the funnel visualization

#### 2. **User Engagement Report**

1. Go to **Reports** → **Exploration**
2. Click **Create new exploration**
3. Select **Free form exploration**
4. Dimensions: User ID, Session Source
5. Metrics: Session Duration, Engagement Rate
6. Analyze user engagement patterns

#### 3. **Pricing Tier Preference Report**

1. Go to **Reports** → **Events**
2. Select `pricing_interaction` event
3. Add dimension: `pricing_tier`
4. View tier selection distribution

#### 4. **Course Completion Report**

1. Go to **Reports** → **Events**
2. Select `lesson_completed` event
3. Add dimension: `module_id`
4. View completion by module

### Scheduling Reports

1. Go to **Reports** → **Explore** (your custom report)
2. Click **Share** → **Email**
3. Configure:
   - Recipients: Your email
   - Frequency: Weekly/Monthly
   - Format: PDF
4. Click **Create**

---

## Key Performance Indicators (KPIs)

### Landing Page KPIs

| KPI | Target | How to Track |
|-----|--------|--------------|
| Bounce Rate | < 40% | Reports → Pages and Screens |
| Average Session Duration | > 2 minutes | Reports → Engagement → Overview |
| CTA Click Rate | > 5% | Events → button_click |
| Conversion Rate | > 2% | Events → conversion |
| Scroll Depth (75%+) | > 40% | Events → scroll_depth |

### Training Platform KPIs

| KPI | Target | How to Track |
|-----|--------|--------------|
| Lesson Completion Rate | > 80% | Events → lesson_completed |
| Quiz Pass Rate | > 75% | Events → quiz_completed (passed=true) |
| Certificate Generation | > 50% | Events → certificate_generated |
| User Retention (7-day) | > 40% | Cohort Analysis |
| Average Time per Lesson | 15-30 min | Session Duration |

### Pricing Page KPIs

| KPI | Target | How to Track |
|-----|--------|--------------|
| Pricing Tier Selection | Track distribution | Events → pricing_interaction |
| Team Tier Preference | > 40% | pricing_tier = "team" |
| Enterprise Inquiries | Track monthly | pricing_tier = "enterprise" |

---

## Troubleshooting

### Analytics Not Loading

**Problem**: `window.gtag` is undefined

**Solution**:
1. Verify `VITE_GA_MEASUREMENT_ID` is set correctly
2. Check browser console for errors
3. Ensure script is loaded: Check Network tab → gtag/js
4. Clear browser cache and reload

### Events Not Appearing

**Problem**: Events not showing in Google Analytics

**Solution**:
1. Wait 24-48 hours for data to process
2. Check **Realtime** → **Overview** for immediate data
3. Verify event names match exactly (case-sensitive)
4. Check browser console for JavaScript errors
5. Ensure user hasn't blocked analytics (privacy settings)

### Incorrect Data

**Problem**: Data seems inaccurate or duplicated

**Solution**:
1. Check for multiple GA4 properties
2. Verify no duplicate tracking code
3. Check for bot traffic filtering
4. Review data retention settings

### Performance Issues

**Problem**: Analytics is slowing down the site

**Solution**:
1. Ensure GA script loads asynchronously (already configured)
2. Reduce custom event frequency
3. Use event sampling for high-traffic sites
4. Monitor Core Web Vitals in GA4

---

## Advanced Configuration

### Setting User Properties

Track user information:

```typescript
import { setUserProperties } from '@/lib/analytics';

setUserProperties('user123', {
  subscription_tier: 'team',
  registration_date: '2025-01-12',
  country: 'Canada'
});
```

### Custom User Segments

Create segments in Google Analytics:

1. Go to **Admin** → **Segments**
2. Click **Create segment**
3. Define conditions (e.g., users who viewed pricing)
4. Apply to reports

### Conversion Goals

Set up conversion goals:

1. Go to **Admin** → **Conversions**
2. Click **New conversion event**
3. Create events:
   - `sign_up` - User registration
   - `pricing_tier_team` - Team tier selection
   - `certificate_generated` - Certificate earned
4. Track these as conversions

---

## Privacy & Compliance

### GDPR Compliance

1. Add cookie consent banner before GA loads
2. Set `anonymize_ip` to true:
   ```typescript
   gtag('config', measurementId, {
     anonymize_ip: true
   });
   ```
3. Update privacy policy to disclose GA usage

### PIPEDA Compliance (Canada)

1. Ensure user consent before tracking
2. Provide option to opt-out
3. Document data retention policies
4. Review GA data sharing settings

### Data Retention

1. Go to **Admin** → **Data Settings**
2. Set **Data retention**: 14 months (default)
3. Disable **Google signals** if not needed

---

## Support & Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9322688)
- [GA4 Reporting](https://support.google.com/analytics/answer/9212670)
- [GA4 Troubleshooting](https://support.google.com/analytics/answer/12508693)

---

## Next Steps

1. **Set up Google Analytics 4 property** (if not done)
2. **Add Measurement ID** to environment variables
3. **Deploy the application**
4. **Verify data collection** in Realtime
5. **Create custom reports** for your KPIs
6. **Set up email reports** for stakeholders
7. **Monitor analytics weekly** and optimize

---

**Last Updated**: January 12, 2025
**Version**: 1.0
