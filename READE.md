# Techlaunch Mini Project
Owner: Raveendran Rajthanan.

## DevTools findings
1. The main heading uses an h1 HTML tag.
2. The paragraph text is inside a p HTML tag.
3. The webpage uses an img HTML tag with an alt attribute.
4. The Console shows successful messages and no obvious red error message in the visible output.

## Project Idea

### About the School
A simple website that provides basic information about a school.

### School Facilities
Information about the facilities and activities available at the school.

### Contact Information
Basic contact details and location information of the school.

## Interaction plan

### Interaction
Show More Toggle

### User Problem
The About section contains a long amount of information.
Showing all the content at once can make the page longer,
especially on smaller mobile screens.

### Trigger
The user clicks the "Show more" button.

### Change
When the user clicks "Show more", the hidden About
information becomes visible and the button changes
to "Show less".

When the user clicks "Show less", the additional
information is hidden again and the button changes
back to "Show more".

### Accessibility
The interaction can be operated using the keyboard.
The button can be reached using the Tab key and
activated using Enter or Space.

## Form rules

### Name
- Required field
- Must not be empty
- Spaces-only input is not allowed

### Email
- Required field
- Must be a valid email address

### Message
- Required field
- Must contain at least 10 characters

## Form test cases

| # | Input                           | Expected          | Pass |
|---|---------------------------------|-------------------|------|
| 1 | Empty name                      | Name message      | Yes  |
| 2 | Name " "                        | Name message      | Yes  |
| 3 | Email `raju@`                   | Email message     | Yes  |
| 4 | Valid name + email + message    | Thank-you message | Yes  |
| 5 | Message less than 10 characters | Message error     | Yes  |
| 6 | Show More using keyboard        | Text shows/hides  | Yes  |

## Next improvements
1. Improve the visual design and responsiveness of the website.
2. Add more interactive features for users.
3. Improve form feedback and accessibility.