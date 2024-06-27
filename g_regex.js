# regex = /asd/
####################

# metaChars need to be escaped
#######################
  .[{()\^%$|?*+
// backslash
  \. \[ \{ \\ 

.      // Any Character EXCEPT new line
\d      // Digit (0-9)
\D      // Not a digit (0-9)
\w      // Word Character (a-z, A-Z, 0-9, _)
\W      // Not a word Char
\s      // Whitespace (space, tab, newline)
\S      // Not whitespace

\b      // Word Boundary
\B      // Not word boundary
^      // Begining of a String
$      // End of a String

[]        // Matches Chars in bracket
[^ ]      // Matches Chats NOT in bracket
|        // Either Or
