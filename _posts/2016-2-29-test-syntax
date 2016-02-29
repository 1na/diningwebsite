---
layout: post
title: Syntax
--- 
<h1>Contents</h1>

{menu: {options: {descendants: true, levels: [2,6]}}}
--- name:content

# kramdown Syntax

This is version **<%= ::Kramdown::VERSION %>** of the syntax documentation.

The kramdown syntax is based on the Markdown syntax and has been enhanced with features that are
found in other Markdown implementations like [Maruku], [PHP Markdown Extra] and [Pandoc]. However,
it strives to provide a strict syntax with definite rules and therefore isn't completely compatible
with Markdown. Nonetheless, most Markdown documents should work fine when parsed with kramdown. All
places where the kramdown syntax differs from the Markdown syntax are highlighted.

Following is the complete syntax definition for all elements kramdown supports. Together with the
documentation on the available converters, it is clearly specified what you will get when a kramdown
document is converted.


## Source Text Formatting

A kramdown document may be in any encoding, for example ASCII, UTF-8 or ISO-8859-1, and the output
will have the same encoding as the source.

The document consists of two types of elements, block-level elements and span-level elements:

* Block-level elements define the main structure of the content, for example, what part of the text
  should be a paragraph, a list, a blockquote and so on.

* Span-level elements mark up small text parts as, for example, emphasized text or a link.

Thus span-level elements can only occur inside block-level elements or other span-level elements.

You will often find references to the "first column" or "first character" of a line in a block-level
element descriptions. Such a reference is always to be taken relative to the current indentation
level because some block-level elements open up a new indentation level (e.g. blockquotes). The
beginning of a kramdown document opens up the default indentation level which begins at the first
column of the text.


### Line Wrapping

Some lightweight markup syntax don't work well in environments where lines are hard-wrapped. For
example, this is the case with many email programs. Therefore kramdown allows content like
paragraphs or blockquotes to be hard-wrapped, i.e. broken across lines. This is sometimes referred
to as "lazy syntax" since the indentation or line prefix required for the first line of content is
not required for the consecutive lines.

Block-level elements that support line wrapping always end when one of the following conditions is
met:

* a [blank line](#blank-lines), an [EOB marker line](#eob-marker), a [block IAL](#block-ials) or the
  end of the document (i.e. a [block boundary](#block-boundaries)),

*  or an [HTML block](#html-blocks).

Line wrapping is allowed throughout a kramdown document but there are some block-level elements that
do *not* support being hard-wrapped:

[headers](#headers)

: This is not an issue in most situations since headers normally fit on one line. If a header text
  gets too long for one line, you need to use HTML syntax instead.

[fenced code blocks](#fenced-code-blocks)

: The delimiting lines of a fenced code block do not support hard-wrapping. Since everything between
  the delimiting lines is taken as is, the content of a fenced code block does also not support
  hard-wrapping.

[definition list terms](#definition-lists)

: Each definition term has to appear on a separate line. Hard-wrapping would therefore introduce
  additional definition terms. The definitions themselves, however, do support hard-wrapping.

[tables](#tables)

: Since each line of a kramdown table describes one table row or a separator, it is not possible to
  hard-wrap tables.

**Note** that it is **NOT** recommended to use lazy syntax to write a kramdown document. The
flexibility that the kramdown syntax offers due to the issue of line wrapping hinders readability
