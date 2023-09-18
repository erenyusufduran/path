# **WILD OASIS**

- The wild oasis is a small boutique **hotel** with 8 luxurious wooden cabins.
- They need a custom-built application to manage everything about the hotel: **bookings**, **cabins** and **guests**
- This is the **internal application** used inside the hotel to **check in guests as they arrive**
- They have nothing right now, so they **also need to API**
- Later they will probably want a **customer-facing website** as well, where customers will be able to **book stays**, using the same API.

## How to Plan
1. Gather application **requirements and features**
2. Divide the application into **pages**
3. Divide the application into **feature categories**
4. Decide on what **libraries** to use

### 1. STEP
  #### Authentication
   - Users of the app are hotel employees. They need to be logged into the application to perform tasks
   - New users can only be signed up inside the applications
   - Users should be able to upload an avatar, and change their name and password
  #### Cabins
   - App needs a table view with all cabins, showing the cabin photo, name, capacity, price and current discount
   - Users should be able to update or delete a cabin, and to createnew cabins
  #### Bookings
   - App needs a table view with all bookings, showing arrival and departure dates, status and paid amount, as well as cabin and guest data
   - The bookings status can be **unconfirmed**, **checked in** or **checked out**. The table should be filterable by this important status
   - Other booking data includes: number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price
  #### Check In / Out
   - Users should be able to delete, check in, or check out a booking as the guest arrives
   - Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment, and then confirm that payment has been received.
   - On check in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already.
  #### Guests
   - Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification
  #### Dashboard
   - The initial app screen should be a dashboard, to display information for the las 7, 30 or 90 days:
     - A list of guests checking in and out on the current day. Users should be able to perform these tasks from here.
     - Statistics on recent bookings, sales, check ins, and occupancy rate
     - A chart showing all daily hotel sales, showing both *total* sales and *extras* sales
     - A chart showing statistics on stay durations, as this is an important metric for the hotel
  #### Settings
   - Users should be able to define a few application-wide settings: breakfast pice, min and max nights/booking, max guests/booking
   - App needs a dark mode.

### 2. & 3. STEP


### Feature Categories
1. Bookings
2. Cabins
3. Guests
4. Dashboard
5. Check in and out
6. App setting
7. Authentication

### Necessary Pages
1. **Dashboard** `/dashboard`
2. **Bookings** `/bookings`
3. **Cabins** `/cabins`
4. **Booking check in** `/checkin/:bookingId`
5. **App settings** `/settings`
6. **User sign up** `/users`
7. **User login** `/login`
8. **Account settings** `/account`

## Tech Decisions

- **Routing** - *React Router*
- **Styling** - *styled components*
  - Very popular way of writing component-scoped CSS, right inside JS. A technology worth learning.
- **Remote State Management** - *React Query*
  - The best way of managing remote state, with features like caching, automatic re-fetching, pre-fetching, offline support, etc. Alternatives are SWR and RTK Query, but this is the most popular.
- **UI State Management** - *Context API*
- **Form Management** - *React Hook Form*
  - Handling bigger forms can be a lot of work, such as manual state creating and error handling. A library can simplify all this.
- **Other Tools** - **React Icons**, **React hot toast**, **Recharts**, **date-fns**, **supabase**