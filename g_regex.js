// https://www.youtube.com/watch?v=sa-TUpSx1JA

# regex = /asd/
####################

# metaChars need to be escaped
#######################
  [] \ . ^ $ * + ? {} | ()
// backslash
  \. \[ \{ \\ 

# REGEX
########################
    
.      // Any Character EXCEPT new line
\d      // Digit (0-9)
\D      // Not a digit (0-9)
\w      // Word Character (a-z, A-Z, 0-9, _)
\W      // Not a word Char
\s      // Whitespace (space, tab, newline)
\S      // Not whitespace

\b      // Word Boundary matches the start or end of a word. \bha will match haga, not gha. \bha\b will only match ha not haha
\B      // Not word boundary
^      // Begining of a String. ^ha will match 'ha we kjalwkejawe', not match 'ad ha asdladh ha'
$      // End of a String. ha$ will match 'sh ha asdha'

# CHARACTER SETS
#########################
// DONT NEED TO ESCAPE CHARS HERE
// each item above, or char set below matches only 1 character


[]        // Matches Chars in bracket
[^ ]      // Matches Chars NOT in bracket
  
  
321-223-1234
543.123.6421
\d\d\d[.-]\d\d\d[.-]\d\d\d\d

543..123--3421
\d\d\d[.-][.-]\d\d\d[.-][.-]\d\d\d\d

1234567
[1-7]

all letters
[a-zA-Z]

all NOT letters
[^a-zA-Z]
matches everything NOT in the set

# QUANTIFIERS
###############

*        // 0 or more, C/w* will match C and Cow and Cute
+        // 1 or more, C/w* will match Cow and Cute
?        // 0 or 1, Mr/.? looks for Mr or Mr.
{3}      // exact number, /w{2} looks for 2 word characters back to back
{3,4}    // range of numbers (min, max), /d{2,4} looks for 2-4 digit characters back to back


321-223-1234
543.123.6421
\d{3}[.-]\d{3}[.-]\d{4}

543..123--3421
\d{3}[.-]{2}\d{3}[.-]{2}\d{4}

Mr. Cash
Mr Smith
Mr. T
Mr\.?\s[A-Z]\w*


# GROUPS
#########
// MATCH DIFFERENT PATTERNS

( )      // Group
|        // Either Or


# EXAMPLES
############

Mr. Cash
Mr Smith
Mr. T
Ms Hasd
Mrs. Tow
 
M(r|s|rs)\.?\s[A-Z]\w*
// group of r OR s

CoreyMSd@gmail.com
corey.sharsd@university.edu
corey-321-schar@my-work.net

[-a-zA-Z0-9.]+@[-a-z]+\.(com|edu|net)

https://www.google.com
http://casre.com
https://youtube.com
https://www.nasa.gov

https?://(www\.)?[a-z]+\.(com|gov)


# CREATE GROUP REFERENCE
###########################

https?://(www\.)?([a-z]+)\.(com|gov)

// Using groups to capture data.
// Group 0 is implicit, entire string
// Group 1 is www
// Group 2 is domain name
// Group 3 is com or gov

Group 1: $1 or \1  // auto reference of group 1
Group 2: $2 or \2  // auto reference of group 2
Group 3: $3 or \3  // auto reference of group 3
Useful for replace all

