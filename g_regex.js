// https://www.youtube.com/watch?v=sa-TUpSx1JA

# regex = /asd/
####################

# metaChars need to be escaped
#######################
  .[{()\^%$|?*+
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
|        // Either Or
( )      // Group
  
  
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

*        // 0 or more
+        // 1 or more
?        // 0 or 1
{3}      // exact number
{3,4}    // range of numbers (min, max)








